<template lang="html">
  <div class="popup" :style="computedPosition" ref="popup">
    <div class="title">
      <span v-html="title"></span>
      <span class="up">👍</span>
    </div>
    <div class="description" v-html="content"></div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'popup',
  props: {
    title: String,
    content: String,
    position: Object,
  },
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0,

      menuElement: null,
    }
  },
  computed: {
    computedPosition () {
      const that = this
      let menuWidth = that.menuElement ? getStyle(that.menuElement)['width'] : 0

      let pos = _.extend({}, that.contextMenuPos)
      // over screen
      let rightPoint = num(pos.left) + num(menuWidth) + 40
      if (rightPoint > that.windowWidth) {
        pos['left'] = null
        pos['right'] = '20px'
        return pos
      }
      return pos
    },
    contextMenuPos () {
      let unit = 'px'
      let added = {
        top: 40
      }
      return _.reduce(this.position, (base, val, key) => {
        let addedVal = val + (added[key] || 0)
        base[key] = `${addedVal}${unit}`
        return base
      },{})
    },
  },
  mounted () {
    const that = this
    that.windowWidth = window.innerWidth
    that.windowHeight = window.innerHeight
    that.menuElement = that.$refs.popup

    window.addEventListener('resize', function(ev) {
      that.windowWidth = window.innerWidth
      that.windowHeight = window.innerHeight
    })
  },
}

function getStyle (element) {
  return window.getComputedStyle(element)
}
function num (str) {
  return parseInt(str)
}
</script>

<style lang="less">
  .popup {
    position: absolute;
    border: 1px solid gray;
    box-shadow: 2px 2px 5px gray;
    text-align: left;
    padding: 1em;
    box-sizing: content-box;
    background-color: white;
    border-radius: 3px;
    min-width: 10em;

    .description {
      border-top: 1px solid gray;
      padding-top: 0.3em;
    }
  }
  .title {
    display: block;
    display: flex;
    justify-content: space-between;
  }
</style>
