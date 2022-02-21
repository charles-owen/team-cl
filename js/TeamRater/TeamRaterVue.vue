<template>
  <div>
    <form v-if="json.team !== undefined" @submit.prevent="submit">
      <h2>Team {{json.team.name}}</h2>
      <div class="cl-team-member" v-for="member in json.team.members">
        <h3>{{member.name}}</h3>

        <div class="cl-teamrater-item" v-for="item in json.items" :id="name(member, item)" >
          <div v-if="item.before.length > 0" v-html="item.before"></div>
          <div v-html="item.text"></div>

          <div v-for="choice in item.choices">
            <p class="cl-teamrater-radio"><input type="radio" v-model="values[member.id][item.tag]"
                                                 :id="name(member, item, choice)" :value="choice.code"></input>
              <label :for="name(member, item, choice)" v-html="choice.text"></label></p>
          </div>

          <div v-if="item.after.length > 0" v-html="item.after"></div>
        </div>
      </div>



      <p class="cl-center"><input type="submit" value="Submit"></p>

    </form>
    <p v-else class="cl-center">You are not a member of a team</p>

  </div>
</template>

<script>

export default {
  props: ['json'],
  data: function() {
    return {
      values: {}
    }
  },
  created() {
    console.log(this.json)

    if(this.json.team !== undefined) {
      for(const member of this.json.team.members) {
        // Create an object for this member
        let memberData = {}

        for(const item of this.json.items) {
          // Creeate an object for this item
          let itemData = {
            value: null
          }

          memberData[item.tag] = itemData
        }

        // Add to the values
        this.values[member.id] = memberData
      }
    }

    console.log(this.values)
  },
  methods: {
    name(member, item, choice) {
      let n = 'cl-teamrater-' + member.id + '-' + item.tag
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

          if(this.values[member.id][item.tag].value === null) {
            any = true
            element.classList.add('cl-teamrater-missing')
          } else {
            element.classList.remove('cl-teamrater-missing')
          }
        }

      }
      console.log(this.values)
      if(any) {
        this.$site.toast(this, "You must complete all items to submit this form")
        return
      }

      let data = {
        values: this.values
      }

      this.$site.api.post('/api/teams/rater', data).then(function (response) {
        if (!response.hasError()) {} else {
          this.$site.toast(this, response);
        }
      })["catch"](function (error) {
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

input[type='submit'] {
  font-size: 1.5em;
}
</style>
