<template>
  <div class="row">
      <PartTimeJob v-for="(job, index) in listJob" v-bind:key="index" v-bind:job="job"/>
      <!-- run for job, index can replace by anything -->
      <!-- v-bind:key="anything replace from index" -->
  </div>
</template>

<script>
import PartTimeJob from './PartTimeJob.vue'
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
        PartTimeJob
    }
}
</script>

<style>
</style>