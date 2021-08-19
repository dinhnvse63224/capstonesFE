<template>
  <div class="row">   
        <JobSuggest v-for="(job, index) in jobSuggest" v-bind:key="index" v-bind:job="job"/>
  </div>
</template>

<script>
import JobSuggest from "./JobSuggest.vue";
export default {
  props: {
    jobSuggest: {
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