<template>
  <div id="alljob">
    <header id="home" class="hero-area">
      <div class="container">
        <div class="row space-100 justify-content-center">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">TÌM KIẾM VIỆC LÀM MƠ ƯỚC</h2>
              <div class="job-search-form">
                <form>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-xs-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Tên công ty hoặc việc làm"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(location, district) in locations"
                                v-bind:key="district"
                              >
                                {{ location.district }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-map-marker"></i>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(major, index) in majors"
                                v-bind:key="index"
                              >
                                {{ major.index }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-layers"></i>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(type, index) in types"
                                v-bind:key="index"
                              >
                                {{ type.index }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-layers"></i>
                      </div>
                    </div>
                    <div class="col-lg-1 col-md-6 col-xs-12">
                      <button type="submit" class="button">
                        <i class="lni-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="latest-jobs" class="section bg-gray">
      <div class="row">
        <div class="col-md-2">
          <a v-bind:href="listBanner[2].url" target="_blank">
          <img :src="listBanner[2].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
        <div class="col-md-8">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-xs-12">
                <div>
                  <h2>Việc làm full time</h2>
                </div>
                <div class="container">
                  <ListFullTimeJob v-bind:listJob="listJob" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-xs-12">
                <div>
                  <h2>Việc làm part time</h2>
                </div>
                <div class="container">
                  <ListPartTimeJob v-bind:listJob="listJob" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <a v-bind:href="listBanner[3].url" target="_blank">
          <img :src="listBanner[3].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ListPartTimeJob from "../Job/ListPartTimeJob.vue"
import ListFullTimeJob from "../Job/ListFullTimeJob.vue"
import axios from 'axios'
export default {
  components: {
    ListPartTimeJob,
    ListFullTimeJob,
  },
  data() {
    return {
      listJob: [],
      listBanner: []
    }    
  },
  mounted () {
    // const tokenStr = 'hyaI8lKvbHoKJx4nTPb8Z8O4eZ0COS5DJ_ExJBE9c476nh2vFhjyZ_P6XA3EwGevo_AvqscQZQ0CKdhfKDRUC2RcTmey_d_FqiTz8ALPO8nPu8z2qep1mx9JdCafyzOtx73L62k7syTOfoI0swc3RmCtGgPtcJnfiZXoHYjpHQNqlMM90wBohwC1-D3Uc5e5qo9t2VNT4yZoi1_t3xulNLdJJpK_T2ZwnUtqsSx_EdzaXIjKHb2BK8dW2QY-lULrJcTswJIYu5RqA2vCTD7V0bY07r05p2V57u9ACXMc798SbLfbeK5HiNUdfNEnZfZcPsC8-W-AaxD6EdeFc6kt9g'
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job", 
    // { headers: {"Authorization" : `Bearer ${tokenStr}`} }
    ).then(response => {
      (this.listJob = response.data.data)
 });
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/banners")
    .then((response) => {
      this.listBanner = response.data.data;
      console.log(this.listBanner);
    });
  }
};
</script>

<style>
</style>