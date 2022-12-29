<template>
  <div class="content">
    <div class="full cl-teams-editor" v-if="teams !== null">
      <table class="small">
        <template :key="team.id"  v-for="team in teams">
          <tr class="cl-internal">
            <th class="right"><span v-if="team.name !== null">
              <a @click.prevent="editer(team)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></a>
              <a @click.prevent="deleter(team)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a></span>
              <cl-menu add-class="cl-inline" v-if="team.name === null">
                <a><img :src="root + '/vendor/cl/site/img/menubars.png'"></a>
                <ul>
                  <li><a @click.prevent="distribute()">Distribute</a></li>
                </ul>
              </cl-menu>
              <a @click.prevent="toggle(team)"><img :src="$site.root + '/vendor/cl/site/img/' + (open[team.id] === true ? 'minus.png' : 'plus.png')"></a>
            </th>
            <th colspan="2" v-html="teamHeading(team)"></th>
            <th class="center">{{team.members.length}}</th>
          </tr>
          <template v-if="open[team.id] === true">
            <tr v-if="team.members.length === 0">
              <td colspan="4" class="center">*** empty ***</td>
            </tr>
            <tr v-for="member in team.members">
              <td class="right">
                <cl-menu>
                  <a><img :src="root + '/vendor/cl/site/img/menubars.png'"></a>
                  <ul>
                    <li v-for="team1 in teams"><a @click.prevent="move(member, team1)">{{team1.name !== null ? team1.name : 'Unassigned'}}<img v-if="team === team1" :src="root + '/vendor/cl/site/img/check16.png'"></a></li>
                  </ul>
                </cl-menu>
              </td>
              <td><a :href="'mailto:' + member.email">{{member.user}}</a></td>
              <td>{{member.name}}</td>
              <td></td>
            </tr>
          </template>
        </template>
      </table>
      <p class="center"><em>{{totals}}</em></p>
    </div>
  </div>

</template>

<script>
	import TeamEditorVue from './TeamEditor.vue';
  import Dialog from 'dialog-cl';
  import {Team} from '../Team';
  import TeamDistributerVue from './TeamDistributer.vue';
  import TeamNameLoaderVue from './TeamNameLoader.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;
  const MenuVue = Site.site.MenuVue;
  const VueDialog = Site.site.VueDialog;

  export default {
	    extends: ConsoleComponentBase,
  	  props: ['id'],
      data: function() {
	    	  return {
	    	  	teams: null,
            open: []
          }
      },
      computed: {
	      /**
         * Computed parameter that totals all team memberships
	       * @returns {number}
	       */
	    	totals() {
	    		let cnt = 0;
	    		let unaffil = 0;
	    		for(const team of this.teams) {
	    			if(team.name !== null) {
			        cnt += team.members.length;
            } else {
	    				unaffil += team.members.length;
            }
          }
	    		let response = cnt + ' team members / ' + (this.teams.length-1) + " teams";
	    		if(unaffil > 0) {
	    			response += ' / ' + unaffil + ' unassigned';
          }
	    		return response;
        }
      },
      components: {
	      clMenu: MenuVue
      },
      mounted() {
	      this.addNav2Link('Teamings', 3, '/cl/console/teams');

	      this.addNav2('Add Team', 5, () => {
		      this.add();
	      });

	      this.addNav2('Load Names', 6, () => {
		      this.loadNames();
	      });

	      this.addNav2('Expand All', 7, () => {
	      	this.expandAll();
        });

	      this.$site.api.get('/api/team/teams/' + this.id, {})
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
      beforeDestroy() {
      },
      methods: {
	    	take(response) {
	    		  let teams = response.getData('teams').attributes;

	    		  this.teams = [];
	    		  for(let team of teams) {
	    		  	this.teams.push(new Team(team));
            }
        },
        toggle(team) {
	    		if(this.open[team.id] === true) {
	    			this.$set(this.open, team.id, false);
          } else {
		        this.$set(this.open, team.id, true);
          }
        },
	    	add() {
	    		let team = new Team();
          const teamingId = this.id;

          new VueDialog(this.$site, {
            title: 'New Team',
            vue: TeamEditorVue,
            data: function() {
              return {
                team: team,
                teamingid: teamingId,
                operation: 'new'
              }
            },
            buttons: false,
            parent: this
          });
        },
	      editer(team) {
		      team = team.clone();
		      const teamingId = this.id;

	        new VueDialog(this.$site, {
		        title: 'Edit Team',
		        vue: TeamEditorVue,
		        data: function() {
			        return {
				        team: team,
                teamingid: teamingId,
                operation: 'update'
			        }
		        },
            buttons: false,
            parent: this
		      });
	      },
        deleter(team) {
		      new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + team.name,
			      Dialog.MessageBox.OKCANCEL, () => {
				      this.$site.api.post('/api/team/teams/' + this.id + '/delete', {id: team.id})
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
			      });
	      },
        move(member, team) {
	    		let params = {
	    			member: member.memberid,
            team: team !== null? team.id : 0
          }

	        this.$site.api.post('/api/team/teams/' + this.id + '/move', params)
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
        distribute() {
	        const teamingId = this.id;

	        new VueDialog(this.$site, {
		        title: 'Team Distributer',
		        vue: TeamDistributerVue,
		        data: function() {
			        return {
				        teamingid: teamingId
			        }
		        },
		        buttons: false,
		        parent: this
	        });
        },
        loadNames() {
	        const teamingId = this.id;

	        new VueDialog(this.$site, {
		        title: 'Team Name Loader',
		        vue: TeamNameLoaderVue,
            addClass: 'cl-teams-editor-dlg',
		        data: function() {
			        return {
				        teamingid: teamingId
			        }
		        },
		        buttons: false,
		        parent: this
	        });
        },
        expandAll() {
	    		for(let team of this.teams) {
	    			this.$set(this.open, team.id, true);
          }
        },
        teamHeading(team) {
	    		if(team.name === null) {
	    			return 'Unassigned';
          }

	        let html = team.name;

	    		let email = '';
	    		for(let member of team.members) {
	    			if(email !== '') {
	    				email += ';';
            }

            email += member.email;
          }

	    		return `${team.name} <a class="cl-email" href="mailto:${email}">email</a>`;
        }
      }
  }
</script>

<style lang="scss">
  div.cl-teams-editor {

    th:nth-child(2) {
      min-width: 30em;
    }

    td:nth-child(2) {
      min-width: 5em;
    }

    td:nth-child(3) {
      min-width: 10em;
    }


    a.cl-email {
      float: right;
      font-weight: normal;
      font-size: 0.85em;
      display: inline-block;
      padding-right: 1em;
      font-style: italic;
    }
  }


  div.cl-teams-editor-dlg {
    min-height: 400px;
  }

</style>