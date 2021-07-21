<template>
  <div class="row">
      <FullTimeJob v-for="(job, index) in listJob" v-bind:key="index" v-bind:job="job"/>
      <!-- run for job, index can replace by anything -->
      <!-- v-bind:key="anything replace from index" -->
  </div>
</template>

<script>
import FullTimeJob from './FullTimeJob.vue'
export default {
    props: {
        listJob: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data() {
        return {
            
        }
    },
    components: {
        FullTimeJob
    }
}
</script>

<style>
</style>