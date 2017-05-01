<template lang="html">
  <div class="pad-content">
    <div class="highlight-block" :style="highlightPosition"></div>

    <template v-for="word in splited">
      <span class="word" @click.stop.prevent="showMenu(word, $event)" @contextmenu.stop.prevent="showMenu(word, $event)" v-text="word"></span>
    </template>

    <popup-window
    v-show="isMenuShow"
    :title="menuTitle"
    :content="menuContent"
    :position="highlightPos">
    </popup-window>
  </div>
</template>

<script>
import _ from 'lodash'
// data
import ItalianText from '../../data/ita.js'
import ItalianDictionary from '../../data/Dictionary-ita.js'
// component
import PopupWindow from './PopupWindow.vue'

export default {
  data () {
    return {
      text: ItalianText.Text04,
      dict: ItalianDictionary,

      highlightPos: {
        left: 0,
        top: 0,
        width: 0
      },

      isMenuShow: false,
      menuTitle: '',
      menuContent: '',
    }
  },
  components: {
    PopupWindow,
  },
  computed: {
    splited () {
      return this.text['content'][0].split(' ');
    },
    highlightPosition () {
      let unit = 'px'

      return _.reduce(this.highlightPos, (base, val, key) => {
        base[key] = `${val}${unit}`
        return base
      },{})
    },
  },
  methods: {
    lookup (w, {target}) {
      let pos = this.highlightPos

      pos.width = target.clientWidth
      pos.top = target.offsetTop
      pos.left = target.offsetLeft
    },
    showMenu (w, ev) {
      let dict = this.dict;
      let word = trim(w)

      this.isMenuShow = true
      this.menuTitle = word
      this.menuContent = dict[word] || 'No Description.'

      this.lookup(w, ev)
    },
  }
}

function trim (str) {
  return str.replace(/[\,\.]$/, '').toLowerCase()
}
</script>

<style lang="less">
  .pad-content {
    text-align: left;
    padding: 1em;
  }
  .word {
    display: inline-block;
    margin-right: 0.3em;
    user-select: none;
  }
  .highlight-block {
    display: inline-block;
    position: absolute;
    height: 1.4em;
    background-color: rgba(255,255,0,0.6);
    border-radius: 2px;
    z-index: -99;
  }
</style>
