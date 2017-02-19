<template lang="html">
  <div class="pad-header">
    <p v-text="guideMsg"></p>
  </div>
</template>

<script>
export default {
  name: 'FieldHeader',
  data () {
    return {
      guideMsg: 'Click any word and ...'
    }
  },
  props: [
    'title'
  ],
  mounted () {
    if (this.title) {
      this.guideMsg = this.title;
    }
  }
}
</script>

<style lang="less" scoped>
  @bg-color: black;
  @font-color: white;

  .pad-header {
    text-align: left;
    display: block;
    width: 100%;
    padding: 1em;
    background-color: @bg-color;
    color: @font-color;
  }
</style>
