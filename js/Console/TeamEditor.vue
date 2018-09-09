<template>
  <div class="cl-center-in">
    <form class="cl-inline-padded" @submit.prevent="submit()">
      <p><label>Name<br><input ref="name" type="text" v-model="team.name"></label></p>
    </form>
    <div class="cl-dialog-bottom">
      <button @click.prevent="submit()" type="submit">{{operation==='new' ? 'Add' : 'Update'}}</button>
      <button @click.prevent="close()" type="submit">Cancel</button>
    </div>
  </div>
</template>

<script>
  import VueDialogVue from 'site-cl/js/Vue/VueDialog.vue';
  import Dialog from 'dialog-cl';

  export default {
  	'extends': VueDialogVue,
  	props: ['team', 'teamingid', 'operation', 'parent'],
  	mounted() {
  		this.$refs['name'].focus();
    },
    methods: {
  		submit() {
        if(this.team.name.trim() === '') {
          new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name',
            Dialog.MessageBox.OK);
          return;
        }

        let params = {
          id: this.team.id,
          name: this.team.name.trim()
        }

        this.$site.api.post('/api/team/teams/' + this.teamingid + '/' + this.operation, params)
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
