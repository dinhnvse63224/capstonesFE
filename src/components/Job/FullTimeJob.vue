<template>
  <div v-if="job.type" class="col-lg-6 col-md-12 col-xs-12">
    <div class="fulltime">
      <div class="img-thumb">
        <img v-bind:src="job.image" />
      </div>
      <div class="content">
        <h3>
          <router-link to="/job-detail">{{ job.name }}</router-link>
        </h3>
        <p class="brand">{{ job.brand }}</p>
        <p class="major" hidden>{{ job.major }}</p>
        <div class="tags">
          <i class="lni-map-marker"></i> {{ job.location }}
        </div>
        <div class="tag mb-3"><i class="lni-tag"></i> {{ job.required }}</div>
        <span class="full-time"> Full time </span>
      </div>
    </div>
  </div>
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

<style scoped>
#latest-jobs .fulltime {
  background: #fff;
  margin: 15px 0;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 14px rgba(191, 191, 191, 0.24);
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

#latest-jobs .fulltime .img-thumb {
  position: relative;
  display: block;
  text-align: center;
  line-height: 160px;
  height: 20%;
  border-right: 1px solid #f1f1f1;
  padding: 5px;
  width: 100%;
}

#latest-jobs .fulltime .content {
  padding: 20px;
  width: 100%;
}

#latest-jobs .fulltime .content h3 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
}

#latest-jobs .fulltime .content h3 a {
  color: black;
}

#latest-jobs .fulltime .content h3 a:hover {
  color: #00BCD4;
}

#latest-jobs .fulltime .content .tags span {
  margin-right: 10px;
  line-height: 30px;
}

#latest-jobs .fulltime .content .tags span i {
  margin-right: 5px;
  color: #00BCD4;
}

#latest-jobs .fulltime .content .tag i {
  color: #00BCD4;
}

#latest-jobs .fulltime .content .job-type {
  color: #00BCD4;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;
  background: #d5ffe7;
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: uppercase;
}

#latest-jobs .fulltime .content .part-time {
  background: #ffd8d2;
  color: #ff6046;
}
</style>