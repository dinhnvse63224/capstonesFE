<template>
  <div class="row">   
        <JobSuggest v-for="(job, index) in listJob" v-bind:key="index" v-bind:job="job"/>
        <!-- run for job, index can replace by anything -->
        <!-- v-bind:key="anything replace from index" -->
  </div>
</template>

<script>
import JobSuggest from "./JobSuggest.vue";
export default {
  props: {
    listJob: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    JobSuggest,
  },
};
</script>

<style>
</style>