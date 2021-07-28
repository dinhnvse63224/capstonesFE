<template>
  <div id="job-detail">
    <ListJobInfo v-bind:list="list[id]"/>

    <!-- Featured Section Start -->
    <section id="latest-jobs" class="section bg-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">VIỆC LÀM TƯƠNG TỰ</h2>
        </div>
        <!-- <ListSuggestJob v-bind:listJob="listJob" /> -->
      </div>
    </section>
    <!-- Featured Section End -->
  </div>
</template>

<script>
import ListJobInfo from "../Job/ListJobInfo.vue";
import axios from 'axios'
// import ListSuggestJob from "../Job/ListSuggestJob.vue";
export default {
  data() {
    return {
      list: [
        
      ],
      
    };
  },
  components: {
    ListJobInfo,
    // ListSuggestJob,
  },
  mounted () {
    // const tokenStr = 'hyaI8lKvbHoKJx4nTPb8Z8O4eZ0COS5DJ_ExJBE9c476nh2vFhjyZ_P6XA3EwGevo_AvqscQZQ0CKdhfKDRUC2RcTmey_d_FqiTz8ALPO8nPu8z2qep1mx9JdCafyzOtx73L62k7syTOfoI0swc3RmCtGgPtcJnfiZXoHYjpHQNqlMM90wBohwC1-D3Uc5e5qo9t2VNT4yZoi1_t3xulNLdJJpK_T2ZwnUtqsSx_EdzaXIjKHb2BK8dW2QY-lULrJcTswJIYu5RqA2vCTD7V0bY07r05p2V57u9ACXMc798SbLfbeK5HiNUdfNEnZfZcPsC8-W-AaxD6EdeFc6kt9g'
    axios.get("https://localhost:44315/job/" + this.list.id, 
    // { headers: {"Authorization" : `Bearer ${tokenStr}`} }
    ).then(response => {
      (this.list = response.data.data);
      console.log(response.data.data) })
  }
};
</script>

<style>
</style>