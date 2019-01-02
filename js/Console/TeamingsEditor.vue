<template>
  <div class="content">
    <div v-if="teamings !== null" class="full">
    <table v-if="teamings.length > 0">
      <tr>
        <th></th>
        <th>Tag</th>
        <th>Name</th>
        <th>Visibility</th>
      </tr>
      <tr v-for="teaming in teamings" :key="teaming.id">
        <td><a @click.prevent="editer(teaming)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></a>
          <a @click.prevent="deleter(teaming)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a>
        </td>
        <td><router-link :to="root + '/cl/console/team/' + teaming.id">{{teaming.tag}}</router-link></td>
        <td>{{teaming.name}}</td>
        <td>{{teaming.public ? 'Public' : 'Private'}}</td>
      </tr>
    </table>
    <div v-else class="center">
      <p>There are currently no defined teamings.</p>
      <p>Choose Add Teaming to add a new teaming.</p>
    </div>
    </div>
  </div>
</template>

<script>
	import Dialog from 'dialog-cl';
  import {Teaming} from '../Teaming';
  import TeamingEditorVue from './TeamingEditor.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

  export default {
  	extends: ConsoleComponentBase,
  	data: function() {
  		return {
  		  teamings: null
      }
    },
  	mounted() {
  		this.setTitle(': Teamings');
	    this.addNav2('Add Teaming', 5, () => {
		    this.add();
	    });

	    this.$site.api.get('/api/team/teamings', {})
		    .then((response) => {
			    if (!response.hasError()) {
			    	this.take(response);
			    } else {
				    this.$site.toast(this, response);
			    }

		    })
		    .catch((error) => {
			    this.$site.toast(this, error);
		    });
    },
	  methods: {
  		take(response) {
  			let data = response.getData('teamings').attributes;

  			this.teamings = [];
  			for(let row of data) {
  				this.teamings.push(new Teaming(row));
        }
      },
  		add() {
  			const teaming = new Teaming();

  			new Dialog({
            title: 'New Teaming',
            content: '<div id="cl-teaming"></div>',
    		    addClass: 'cl-dialog-narrow',
            buttons: [
                {
                	  contents: 'Add',
                    focus: true,
                    click: (dialog) => {
	                    if(!this.$site.Tags.validate(teaming.tag)) {
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
          el: '#cl-teaming',
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
      },
      editer(teaming) {
  			teaming = teaming.clone();

	      new Dialog({
		      title: 'Edit Teaming',
		      content: '<div id="cl-teaming"></div>',
	        addClass: 'cl-dialog-narrow',
		      buttons: [
			      {
				      contents: 'Update',
				      focus: true,
				      click: (dialog) => {
                if(!this.$site.Tags.validate(teaming.tag)) {
                  return;
                }

					      if(teaming.name.trim() === '') {
						      new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name',
							      Dialog.MessageBox.OK);
						      return;
					      }

					      let params = {
					      	id: teaming.id,
						      tag: teaming.tag.trim(),
						      name: teaming.name.trim(),
						      public: teaming.public
					      }

					      this.$site.api.post('/api/team/teamings/update', params)
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
		      el: '#cl-teaming',
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
      },
      deleter(teaming) {
	      new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + teaming.name,
		      Dialog.MessageBox.OKCANCEL, () => {
		        this.$site.api.post('/api/team/teamings/delete', {id: teaming.id})
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
		      });
      }
    }
  }

</script>