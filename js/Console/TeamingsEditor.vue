<template>
  <div class="content">
    <table>
      <tr>
        <th>Tag</th>
        <th>Name</th>
      </tr>
      <tr v-for="teaming in teamings" :key="teaming.id">
        <td>{{teaming.tag}}</td>
        <td>{{teaming.name}}</td>
      </tr>
    </table>
    <p>Teams</p>
  </div>
</template>

<script>
	import Dialog from 'dialog-cl';
  import {Teaming} from '../Teaming';
  import TeamingEditorVue from './TeamingEditor.vue';

  export default {
  	data: function() {
  		return {
  		  teamings: []
      }
    },
  	mounted() {
  		console.log(this.$site);
	    this.addComponent = this.$site.console.components.addNav2Link(this, 'Add Teaming', 5, () => {
		    this.add();
	    });

	    this.$site.api.get('/api/team/teamings/new', {})
		    .then((response) => {
			    if (!response.hasError()) {
			    	this.take(response);
				    console.log(response);

			    } else {
				    this.$site.toast(this, response);
			    }

		    })
		    .catch((error) => {
			    this.$site.toast(this, error);
		    });
    },
	  beforeDestroy() {
		  this.$site.console.components.removeNav2(this, this.addComponent);
	  },
	  methods: {
  		take(response) {
  			let data = response.getData('teamings').attributes;

  			this.teamings = [];
  			for(let row of data) {
  				this.teamings.push(new Teaming(row));
        }

        console.log(this.teamings);
      },
  		add() {
  			const teaming = new Teaming();

  			new Dialog({
            title: 'New Teaming',
            content: '<div id="cl-new-teaming"></div>',
            buttons: [
                {
                	  contents: 'Add',
                    focus: true,
                    click: (dialog) => {
                	  	if(teaming.tag.trim() === '') {
                        new Dialog.MessageBox('Must enter valid tag', 'You must provide a valid non-empty tag',
                          Dialog.MessageBox.OK);
                        return;
                      }

	                    if(teaming.name.trim() === '') {
		                    new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name',
			                    Dialog.MessageBox.OK);
		                    return;
	                    }

                	  	let params = {
	                    	  tag: teaming.tag.trim(),
                          name: teaming.name.trim(),
                          public: teaming.public
                	  	}

                	  	this.$site.api.post('/api/team/teamings/new', params)
                	  	    .then((response) => {
                	  	        if (!response.hasError()) {
		                            this.take(response);
                                dialog.close();
                	  	        } else {
		                            this.$site.toast(this, response);
                	  	        }

                	  	    })
                	  	    .catch((error) => {
		                        this.$site.toast(this, error);
                	  	    });

                    }
                },
                {
                	  contents: 'Cancel',
                    click: (dialog) => {
                	  	dialog.close();
                    }
                }
            ]

        });

		  // Create a Vue inside the dialog box
		  new this.$site.Vue({
			  el: '#cl-new-teaming',
			  data: function() {
				  return {
            teaming: teaming
				  }
			  },
			  template: `<editor :teaming="teaming"></editor>`,
			  components: {
			  	editor: TeamingEditorVue
			  }
		  })
      }
    }
  }

</script>