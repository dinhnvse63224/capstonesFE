<template>
  <div class="col-lg-6 col-md-12 col-xs-12">
    <div class="jobs-latest">
      <p hidden> {{job.id}} </p>
      <div class="img-thumb">
        <img v-bind:src="job.image" />
      </div>
      <div class="content">
        <h3>
           <router-link to="/job-detail">{{ job.name }}</router-link>
        </h3>
        <p class="major" hidden>{{ job.major }}</p>
        <div class="tags">
          <i class="lni-map-marker"></i> Quận {{ job.location }}
        </div>
        <div class="tag mb-3"><i class="lni-tag"></i> {{job.requirement}} </div>
        <span v-if="job.workingForm == 1" class="full-time">Full time</span>
        <span v-else-if="job.workingForm == 2" class="part-time">Part time</span>       
      </div>
    </div>
  </div>
  <!-- <div class="col-lg-6 col-md-12 col-xs-12">
    <div class="jobs-latest">
      <div class="content">
        <h3>
          <a href="job-details.html">{{ job.name }}</a>
        </h3>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
</style>