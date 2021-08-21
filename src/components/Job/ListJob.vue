<template>
  <div class="row">
      <Job v-for="(job, index) in list" v-bind:key="index" v-bind:job="job"/>

  </div>
</template>

<script>
import Job from './Job.vue'
export default {
    props: {
        list: {
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
        Job
    }
}
</script>

<style>
</style>