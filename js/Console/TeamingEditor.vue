<template>
  <div class="cl-teaming-editor">
    <div>
      <form>
        <p><label>Tag<br><input ref="tag" type="text" v-model="teaming.tag"></label></p>
        <p><label>Name<br><input type="text" v-model="teaming.name"></label></p>
        <p class="center"><label><input type="checkbox" v-model="teaming.public"> Public</label></p>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
  	props: ['teaming'],
  	mounted() {
  		this.$refs['tag'].focus();
    }
  }
</script>

<style lang="scss">
  div.cl-teaming-editor {
    text-align: center;

    >div {
      display: inline-block;
      padding: 1.5em 0 2.0em 0;
    }
  }
</style>