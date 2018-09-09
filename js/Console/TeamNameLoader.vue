<template>
  <div class="cl-center-in">
    <form class="cl-inline-padded" @submit.prevent="submit()">
      <p><label>Team Names<br>
        <textarea ref="names" v-model="names" rows="15"></textarea>
      </label></p>
    </form>
    <div class="cl-dialog-bottom">
      <button @click.prevent="submit()" type="submit">Set Names</button>
      <button @click.prevent="close()" type="submit">Cancel</button>
    </div>
  </div>
</template>

<script>
  import VueDialogVue from 'site-cl/js/Vue/VueDialog.vue';
  import Dialog from 'dialog-cl';

  export default {
  	'extends': VueDialogVue,
  	props: ['teamingid', 'parent'],
    data: function() {
  		return {
  			names: ''
      }
    },
  	mounted() {
  		this.$refs['names'].focus();
    },
    methods: {
  		submit() {
        let names1 = this.names.trim().split("\n");
        let names = [];
        for(let name of names1) {
        	name = name.trim();
        	if(name !== '') {
        		names.push(name);
          }
        }

        if(names.length === 0) {
	        new Dialog.MessageBox('Must enter names', 'You must enter one or more names to use.',
		        Dialog.MessageBox.OK);
	        return;
        }

		    let params = {
          names: names
        }

        this.$site.api.post('/api/team/teams/' + this.teamingid + '/names', params)
          .then((response) => {
            if (!response.hasError()) {
              this.parent.take(response);
              this.$dialog.close();
            } else {
              this.$site.toast(this, response);
            }

          })
          .catch((error) => {
            this.$site.toast(this, error);
          });

      }
    }
  }
</script>
