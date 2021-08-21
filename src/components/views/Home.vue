<template>
  <div id="home">
    <header id="home" class="hero-area">
      <div class="container">
        <div class="row space-100 justify-content-center">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">TÌM KIẾM VIỆC LÀM MƠ ƯỚC</h2>
              <div class="job-search-form">
                <div id="search">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-xs-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          v-model="keyword"
                          type="text"
                          placeholder="Tên công ty hoặc việc làm"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select v-model="location">
                              <option :value="null">Khu Vực</option>
                              <option :value="1">Quận 1</option>
                              <option :value="2">Quận 2</option>
                              <option :value="3">Quận 3</option>
                              <option :value="4">Quận 4</option>
                              <option :value="5">Quận 5</option>
                              <option :value="6">Quận 6</option>
                              <option :value="7">Quận 7</option>
                              <option :value="8">Quận 8</option>
                              <option :value="9">Quận 9</option>
                              <option :value="10">Quận 10</option>
                              <option :value="11">Quận 11</option>
                              <option :value="12">Quận 12</option>
                              <option :value="13">Quận Bình Thạnh</option>
                              <option :value="14">Quận Thủ Đức</option>
                              <option :value="15">Quận Gò Vấp</option>
                              <option :value="16">Quận Phú Nhuận</option>
                              <option :value="17">Quận Tân Bình</option>
                              <option :value="18">Quận Tân Phú</option>
                              <option :value="19">Quận Bình Tân</option>
                              <option :value="20">Huyện Nhà Bè</option>
                              <option :value="21">Huyện Hóc Môn</option>
                              <option :value="22">Huyện Bình Chánh</option>
                              <option :value="23">Huyện Củ Chi</option>
                              <option :value="24">Huyện Cần Giờ</option>
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
                            <select v-model="categoryCode">
                              <option :value="null">Ngành nghề</option>
                              <option v-for="(category, index) in listCategories" v-bind:key="index" v-bind:category="category" :value="category.code"> {{category.value}} </option>
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
                            <select v-model="workingForm">
                              <option :value="null">Hình thức</option>
                              <option :value="1">Full time</option>
                              <option :value="2">Part time</option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-layers"></i>
                      </div>
                    </div>
                    <div class="col-lg-1 col-md-6 col-xs-12">
                      <button @click="search" class="button">
                        <i class="lni-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Latest Section Start -->
    <section id="latest-jobs" class="section bg-gray">
      <div class="row">
        <div class="col-md-2">
          <a v-bind:href="listBanner[0].url" target="_blank">
          <img :src="listBanner[0].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
        <div class="col-md-8">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">VIỆC LÀM MỚI NHẤT</h2>
              <p v-if="allJob.length === 0"> Không có công việc nào phù hợp </p>
            </div>
            <ListJob v-bind:list="list" />
          </div>
        </div>
        <div class="col-md-2">
          <a v-bind:href="listBanner[1].url" target="_blank">
          <img :src="listBanner[1].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
      </div>

      <!-- pagination -->
      <center class="justify-content-center d-flex">
        <div class="">
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
    </section>
  
  </div>
</template>

<script>
import ListJob from "../Job/ListJob.vue";
import axios from "axios";
import Paginate from 'vuejs-paginate'

export default {
  data() {
    return {
      majors: [],
      list: [],
      pageCount : 0,
      allJob: [],
      keyword: null,
      location: null,
      categoryCode: null,
      workingForm: null,
      listCategories: [],
      category: {
        type: Object,
        default: null,
      },
      listBanner: [],
    };
  },
  components: {
    ListJob,
    Paginate
  },
  methods: {
    search() {
      let data = {
        keyword: this.keyword,
        location: this.location,
        categoryCode: this.categoryCode,
        workingForm: this.workingForm,
      }
      console.log(data);
      axios
        .post("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/search", {
          keyword: this.keyword,
          location: this.location,
          categoryCode: this.categoryCode,
          workingForm: this.workingForm,
        })
        .then((response) => {
          this.allJob = response.data.data === null ? [] : response.data.data;
          console.log(this.allJob.length);
          this.pageCount = Math.ceil(this.allJob.length / 8);
          this.list = this.paginate(this.allJob, 8, 1);
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
  },

  mounted() {
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job").then((response) => {
      this.allJob = response.data.data;
      this.pageCount = Math.ceil(this.allJob.length / 8);
      this.list = this.paginate(this.allJob, 8, 1);
    });
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/categories")
    .then((response) => {
      this.listCategories = response.data.data;
    });
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/banners")
    .then((response) => {
      this.listBanner = response.data.data;
    });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
