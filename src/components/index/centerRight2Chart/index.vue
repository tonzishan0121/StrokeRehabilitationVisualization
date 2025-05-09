<template>
  <div>
    <Chart :cdata='cdata'/>
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  props: {
    cdata: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  components: {
    Chart,
  }
}
</script>