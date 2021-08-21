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
            <div class="col">
              <div class="container">
                <div>
                  <h2>Việc làm full time</h2>
                </div>
                <div class="col">
                  <ListFullTimeJob v-bind:listJob="listJob" />
                </div>
                      <!-- pagination -->
     
              </div>
               <center>
        <div class="pagination_rounded">
          <paginate
              :page-count="pageCount"
              :page-range="3"
              :margin-pages="2"
              :click-handler="clickCallback"
              :prev-text="' Trước '"
              :next-text="' Sau '"
              :container-class="'pagination'"
              :active-class="'active'"
              :page-class="'page-item'">
          </paginate>
        </div>
      </center>
              <div class="container">
                <div>
                  <h2>Việc làm part time</h2>
                </div>
                <div class="col">
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
import Paginate from 'vuejs-paginate'
export default {
  components: {
    ListPartTimeJob,
    ListFullTimeJob,
    Paginate
  },
  data() {
    return {
      listJob: [],
      listBanner: [],
       pageCount : 0,
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
      this.pageCount = Math.ceil(this.allJob.length / 5);
      this.list = this.paginate(this.allJob, 5, 1);
    }).catch((e) => {
      console.log(e.response);
    });
    axios.post("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/part-time?page=1").then((response) => {
      this.listJob = response.data.data;
      this.pageCount = Math.ceil(this.listJob.length / 5);
      this.list = this.paginate(this.listJob, 5, 1);
      console.log(this.list);
    }).catch((e) => {
          console.log(e.response);
        });
  },
  paginate(array, page_size, page_number) {
      return array.slice((page_number - 1) * page_size, page_number * page_size);
    },
    clickCallback(number) {
      this.list = this.paginate(this.allJob, 8, number);
    },
};
</script>

<style>
/* pagination */

.pagination_rounded,
.pagination_square {
  margin-top: 50px;
  display: inline-block;
  text-align: center;
}

.pagination_rounded ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.pagination_rounded li:first-child {
  margin-left: 0px;
}

.pagination_rounded ul li {
  float: left;
  margin-left: 20px;
}

.pagination_rounded ul li a:hover {
  background: #00bcd4;
  color: #fff;
  border: 1px solid #00bcd4;
}

a:link {
  text-decoration: none;
}

.pagination_rounded .prev {
  margin-left: 0px;
  border-radius: 35px;
  width: 80px;
  height: 34px;
  line-height: 34px;
}

.pagination_rounded ul li a {
  float: left;
  color: #00bcd4;
  border-radius: 50%;
  line-height: 30px;
  height: 30px;
  width: 30px;
  text-align: center;
  margin-bottom: 40px;
  border: 1px solid black;
}

.pagination_rounded .prev i {
  margin-right: 10px;
}

.pagination_rounded .next {
  border-radius: 35px;
  width: 80px;
  height: 34px;
  line-height: 34px;
}

.visible-xs {
  display: none !important;
}

/* banner ads slider */
body {
  background-color: #eee;
}

.container-fluid {
  margin-top: 30px;
}

.carousel-item img {
  height: 400px;
}
</style>