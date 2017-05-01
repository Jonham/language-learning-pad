<template lang="html">
  <div class="pad-field">
    <field-header
      :title="headerMsg"
    ></field-header>
    <field-content></field-content>
  </div>
</template>

<script>
import FieldHeader from './PadField/FieldHeader.vue'
import FieldContent from './PadField/FieldContent.vue'

export default {
  name: 'PadField',
  data () {
    return {
      headerMsg: 'Click any word and ...'
    }
  },
  components: {
    FieldHeader,
    FieldContent
  }
}
</script>

<style lang="less" scoped>
  .pad-field {
    display: block;
    width: 100%;
  }
</style>
