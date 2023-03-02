<template>
  <div>
    <div v-if="staff">
      <p class="cl-center"><a :href="reportPath">Team Participation Report for {{json.teaming}}</a></p>
    </div>
    <form v-if="json.team !== undefined" @submit.prevent="submit">
      <h2>Team {{json.team.name}}</h2>
      <div class="cl-team-member" v-for="member in json.team.members">
        <h3>{{member.name}}</h3>

        <div class="cl-teamrater-item" v-for="item in json.items" :id="name(member, item)" >
          <div v-if="item.before.length > 0" v-html="item.before"></div>
          <div v-html="item.text"></div>

          <div v-if="item.type==='multiple-choice'" v-for="choice in item.choices">
            <p class="cl-teamrater-radio"><input type="radio" v-model="values[member.memberid][item.tag]"
                                                 :id="name(member, item, choice)" :value="choice.code"/>
              <label :for="name(member, item, choice)" v-html="choice.text"></label></p>
          </div>
          <div v-if="item.type==='comment'">
              <textarea class="cl-team-comment" v-model="values[member.memberid][item.tag]"></textarea>
          </div>

          <div v-if="item.after.length > 0" v-html="item.after"></div>
        </div>
      </div>

      <p class="cl-center"><input type="submit" value="Submit"></p>

    </form>
    <p v-else-if="!staff" class="cl-center">You are not a member of a team</p>

  </div>
</template>

<script>

/**
 * Component that is placed on a page for rating team members.
 */
export default {
  props: ['json'],
  data: function() {
    return {
      values: {},
      staff: false,
      reportPath: ''
    }
  },
  created() {
    console.log(this.json)
    if(this.json.team !== undefined) {
      for(const member of this.json.team.members) {
        // Create an object for this member
        this.values[member.memberid] = {}
        //this.$set(this.values, member.memberid, {});
        let memberData = this.values[member.memberid];

        for(const item of this.json.items) {
          memberData[item.tag] = item.type === 'comment' ? '' : null
          //this.$set(memberData, item.tag, item.type === 'comment' ? '' : null);
        }
      }

      // Fill in any existing ratings
      for(const rating of this.json.ratings) {
        const rateeid = +rating.rateeid;
        if(this.values[rateeid] !== undefined) {
          const data = rating.metadata;
          for(const tag in data) {
            if(this.values[rateeid][tag] !== undefined) {
              this.values[rateeid][tag] = data[tag]
            }
          }
        }
      }
    }

  },
  mounted() {
    this.staff = this.json.staff
    this.reportPath = Site.root + '/cl/team/ratings/' + this.json.teaming
  },
  methods: {
    name(member, item, choice) {
      let n = 'cl-teamrater-' + member.memberid + '-' + item.tag
      if(choice !== undefined) {
        n += '-' + choice.code
      }

      return n
    },
    submit(event) {
      let any = false
      for(const member of this.json.team.members) {

        for(const item of this.json.items) {
          const element = document.getElementById(this.name(member, item))

          if(this.values[member.memberid][item.tag] === null) {
            any = true
            element.classList.add('cl-teamrater-missing')
          } else {
            element.classList.remove('cl-teamrater-missing')
          }
        }
      }

      if(any) {
        this.$site.toast(this, "You must complete all items to submit this form")
        return
      }

      let data = {
        ratings: this.values
      }

      this.$site.api.post('/api/team/rate/' + this.json.assignment + '/' + this.json.team.id, data)
          .then((response) => {
            if(response.hasError()) {
              this.$site.toast(this, response)
            } else {
              this.$site.toast(this, "Ratings successfully uploaded")
            }

          })
          .catch((error) => {
            this.$site.toast(this, error);
          });
    }
  }
}
</script>

<style lang="scss" scoped>

h3 {
  padding-left: 0.25em;
  text-align: center;
}

div.cl-team-member {
  padding: 0.1em 0.5em 0.5em 0.5em;
  background: #bfb;
  margin-bottom: 1em;
  border: 1px solid black;
}


div.cl-teamrater-item {
  margin: 0.5em 0;
  padding: 0 0.5em 1em 0.5em;


}

div.cl-teamrater-missing {
  border: 1px solid red
}

p.cl-teamrater-radio {
  margin: 0 3em 0.3em 3em;
  position: relative;

  input {
    position: absolute;
    left: -1.5em;
    top: 0.25em;
  }
}

textarea.cl-team-comment {
  width: 100%;
  height: 6em;
}

input[type='submit'] {
  font-size: 1.5em;
}
</style>
