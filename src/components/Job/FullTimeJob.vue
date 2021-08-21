<template>
  <div class="col-lg-6 col-md-12 col-xs-12">
    <div class="jobs-latest">
      <div v-if="job.imgUrl != null && job.imgUrl != ''" class="img-thumb">
        <img :src="job.imgUrl" width="130" height="130" />
      </div>
      <div v-else class="img-thumb">
        <img src="/assets/img/logo.png" width="130" height="130"/>
        </div>
      <div class="content">
        <h3 class="job-name">
           <router-link :to="{name:'jobDetail', query:{id:job.id}}">{{ job.name }}</router-link>
        </h3>
        <div class="tags">
          <i class="lni-map-marker" v-if="job.location == 1"> Quận 1 </i> 
          <i class="lni-map-marker" v-if="job.location == 2"> Quận 2 </i> 
          <i class="lni-map-marker" v-if="job.location == 3"> Quận 3 </i> 
          <i class="lni-map-marker" v-if="job.location == 4"> Quận 4 </i> 
          <i class="lni-map-marker" v-if="job.location == 5"> Quận 5 </i> 
          <i class="lni-map-marker" v-if="job.location == 6"> Quận 6 </i> 
          <i class="lni-map-marker" v-if="job.location == 7"> Quận 7 </i> 
          <i class="lni-map-marker" v-if="job.location == 8"> Quận 8 </i> 
          <i class="lni-map-marker" v-if="job.location == 9"> Quận 9 </i> 
          <i class="lni-map-marker" v-if="job.location == 10"> Quận 10 </i> 
          <i class="lni-map-marker" v-if="job.location == 11"> Quận 11 </i> 
          <i class="lni-map-marker" v-if="job.location == 12"> Quận 12 </i> 
          <i class="lni-map-marker" v-if="job.location == 13"> Quận Bình Thạnh </i> 
          <i class="lni-map-marker" v-if="job.location == 14"> Quận Thủ Đức </i> 
          <i class="lni-map-marker" v-if="job.location == 15"> Quận Gò Vấp </i> 
          <i class="lni-map-marker" v-if="job.location == 16"> Quận Phú Nhuận </i> 
          <i class="lni-map-marker" v-if="job.location == 17"> Quận Tân Bình </i> 
          <i class="lni-map-marker" v-if="job.location == 18"> Quận Tân Phú </i> 
          <i class="lni-map-marker" v-if="job.location == 19"> Quận Bình Tân </i> 
          <i class="lni-map-marker" v-if="job.location == 20"> Huyện Nhà Bè </i> 
          <i class="lni-map-marker" v-if="job.location == 21"> Huyện Hóc Môn </i> 
          <i class="lni-map-marker" v-if="job.location == 22"> Huyện Bình Chánh </i> 
          <i class="lni-map-marker" v-if="job.location == 23"> Huyện Củ Chi </i> 
          <i class="lni-map-marker" v-if="job.location == 24"> Huyện Cần Giờ </i> 
        </div>
        <div class="tags"> <i class="lni-calendar"> {{ job.createDate }} </i> </div><br>
        <span class="full-time">Full time</span>
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

<style>
.job-name {
  overflow: hidden;
  width: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>