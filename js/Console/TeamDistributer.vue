<template>
  <div class="cl-center-in">
    <form class="cl-inline-padded" @submit.prevent="submit()">
      <p><label>Team Size<br><input style="width: 8em" class="center" ref="size" type="text" v-model="size"></label></p>
    </form>
    <div class="cl-dialog-bottom">
      <button @click.prevent="submit()" type="submit">Distribute</button>
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
  			size: 5
      }
    },
  	mounted() {
	    this.$refs['size'].select();
  		this.$refs['size'].focus();
    },
    methods: {
  		submit() {
  			let size = +this.size;
  			if(size < 1 || size > 100) {
          new Dialog.MessageBox('Must enter size', 'You must provide a size from 1 to 100',
            Dialog.MessageBox.OK);
          return;
        }

        let params = {
          size: size
        }

        this.$site.api.post('/api/team/teams/' + this.teamingid + '/distribute', params)
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
