<template>
  <div id="home">
    <header id="home" class="hero-area">           
      <div class="container">
        <div class="row space-100 justify-content-center">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">TÌM KIẾM VIỆC LÀM MƠ ƯỚC</h2>
              <div class="job-search-form">
                <form>
                  <div class="row">
                    <div class="col-lg-5 col-md-6 col-xs-12">
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="Tên công ty hoặc việc làm"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option v-for="(location, district) in locations" v-bind:key="district">
                                {{ location.district }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-map-marker"></i>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option v-for="(major, index) in majors" v-bind:key="index">
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
                              <option v-for="(type, index) in types" v-bind:key="index">
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

    <!-- Latest Section Start -->
    <section id="latest-jobs" class="section bg-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">VIỆC LÀM MỚI NHẤT</h2>
        </div>
            <ListJob v-bind:listJob="listJob"/> 
            <!-- props data in ListJobs.vue -->
            <!-- <div id="test">
              <ul v-for="job in list" v-bind:key="job">
                <li> {{job.name}} </li>  
              </ul>
              <button v-on:click="OpenListABC">Open</button>
            </div> -->
      </div>
      

      <!-- pagination -->
      <center>
        <div class="pagination_rounded">
          <ul>
            <li>
              <a href="#" class="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i> Trước
              </a>
            </li>
            <li><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="hidden-xs"><a href="#"></a></li>
            <li class="visible-xs"><a href="#">...</a></li>
            <li><a href="#"></a></li>
            <li>
              <a href="#" class="next">
                Sau <i class="fa fa-angle-right" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
      </center>
    </section>

    <!-- banner ads slider -->
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="carousel slide" id="carousel-554496">
                <ol class="carousel-indicators">
                    <li data-slide-to="0" data-target="#carousel-554496"> </li>
                    <li data-slide-to="1" data-target="#carousel-554496"> </li>
                    <li data-slide-to="2" data-target="#carousel-554496" class="active"> </li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item">
                      <img class="d-block w-100" alt="Carousel Bootstrap First" src="https://i.imgur.com/K7A78We.jpg" />              
                    </div>
                    <div class="carousel-item"> <img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://i.imgur.com/c8952Iz.jpg" />
                    </div>
                    <div class="carousel-item active"> <img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://i.imgur.com/K7A78We.jpg" />
                    </div>
                </div> <a class="carousel-control-prev" href="#carousel-554496" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-554496" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
            </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import ListJob from '../Job/ListJob.vue'
// import axios from 'axios';

export default {
  data() {
    return {
      majors: [
        {
          index: "Ngành nghề",
        },
        {
          index: "Bán hàng",
        },
        {
          index: "IT",
        },
        {
          index: "Gia sư",
        },
        {
          index: "Phục vụ",
        },
        {
          index: "Sửa chữa",
        },
      ],
      locations: [
        {
          district: "Khu vực",
        },
        {
          district: "Quận 1",
        },
        {
          district: "Quận 2",
        },
        {
          district: "Quận 3",
        },
        {
          district: "Quận 4",
        },
        {
          district: "Quận 5",
        },
        {
          district: "Quận 6",
        },
        {
          district: "Quận 7",
        },
        {
          district: "Quận 8",
        },
        {
          district: "Quận 9",
        },
        {
          district: "Quận 10",
        },
        {
          district: "Quận 11",
        },
        {
          district: "Quận 12",
        },
        {
          district: "Quận Bình Tân",
        },
        {
          district: "Quận Bình Thạnh",
        },
        {
          district: "Quận Gò Vấp",
        },
        {
          district: "Quận Phú Nhuận",
        },
        {
          district: "Quận Tân Bình",
        },
        {
          district: "Quận Tân Phú",
        },
        {
          district: "Quận Thủ Đức",
        },
      ],
      types: [
        {
          index: "Hình thức",
        },
        {
          index: "Full time",
        },
        {
          index: "Part time",
        },
      ],
      listJob: [
        {
          jobID: 1,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 1",
          workingPlace: "168 Nguyễn Thị Minh Khai, Phường 6, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 2,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 3",
          workingPlace: "68 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 3,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 9",
          workingPlace: "120 Lê Văn Việt, Phường Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 4,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 7",
          workingPlace: "18 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 5,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 5",
          workingPlace: "57 Mạc Thiên Tích, Phường 8, Quận 5, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 6,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 11",
          workingPlace: "356 Lạc Long Quân, Phường 5, Quận 11, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/img-1.jpg",
        },
      ],
      list: null,
    };
  },
  components: {
    ListJob,
  },
  // methods: {
  //   OpenListABC() {
  //     console.log(this.list);
  //   }
  // },
  // mounted () {
  //   const tokenStr = 'ohJUB7WPrskOGyPeCrR-_TEnYdKdrYaBLvcNRTyDctLDxBDcwiR0MJvCWaEbkFKbYeg7hN4C-FbAH-gzIGARUdZggmcvrd95M4zEl5R9ggh-M_mBGOuAmC9yVWBopwSX9Qn8CZQAI-d41zosYAgjsIuQmp3MS2V7ugyaySy1O6WOqvGPhVHDGbABG6PhAFMHJU_yzb9PYJb_J4ne7R1sQzL2PwbEy6x_zmeglsbmGf4k-FBwv1FpWYidA6G8aGPhMqNBl_xM2BgYQFzoOPpyaj8eVZDgyy6gq5Npvrc-uUgcQ5buVvOlGCXxhHQosa89'
  //   // axios.get('https://localhost:44315/job').then(response => (console.log(response)))
  //   axios.get("https://localhost:44315/job", 
  //   { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response => {
  //     (this.list = response.data.data);
  //     console.log(response.data.data) })
  // }
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
    background-color: #eee
}

.container-fluid {
    margin-top: 30px
}

.carousel-item img {
    height: 400px
}
</style>
