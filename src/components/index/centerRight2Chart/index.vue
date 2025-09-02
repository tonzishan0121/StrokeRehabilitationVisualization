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
  components: {
    Chart,
  }
}
</script>