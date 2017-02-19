<template lang="html">
  <div class="pad-field">
    <field-header
      :title="headerMsg"
    ></field-header>
  </div>
</template>

<script>
import FieldHeader from './PadField/FieldHeader.vue'

export default {
  name: 'PadField',
  data () {
    return {
      headerMsg: 'Click any word and ...'
    }
  },
  components: {
    FieldHeader
  }
}
</script>

<style lang="less" scoped>
  .pad-field {
    display: block;
    width: 100%;
  }
</style>
