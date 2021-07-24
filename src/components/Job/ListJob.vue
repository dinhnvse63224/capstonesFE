<template>
  <div class="row">
      <Job v-for="(job, index) in listJob" v-bind:key="index" v-bind:job="job"/>
      <!-- <Job v-for="(job, index) in list" v-bind:key="index" v-bind:job="job"/> -->
      <!-- run for job, index can replace by anything -->
      <!-- v-bind:key="anything replace from index" -->
  </div>
</template>

<script>
import Job from './Job.vue'
export default {
    props: {
        listJob: {
            type: Array,
            default: function() {
                return []
            }
        }
        // list: {
        //     type: Array,
        //     default: function() {
        //         return []
        //     }
        // }

    },
    data() {
        return {

        }
    },
    //method
    
    components: {
        Job
    }
}
</script>

<style>
</style>