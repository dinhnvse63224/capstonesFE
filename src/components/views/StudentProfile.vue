<template>
  <div id="student-profile">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Trang cá nhân</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container border-bottom bg-white mt-1 pt-md-3 pt-2">
      <div class="d-flex flex-md-row justify-content-around align-items-center">
        <div class="d-flex flex-md-row align-items-center">
          <div class="p-md-2">
            <!-- <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
              class="rounded-circle"
              id="profile"
            /> -->
          </div>
          <div class="p-md-2 p-1" id="info">
            <h5></h5>
            <div class="text-muted"></div>
          </div>
        </div>
        <div class="rounded p-lg-2 p-1" id="blue-background">
          <div class="d-flex flex-md-row align-items-center">
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">0</p>
              <div class="text-muted" id="count">Việc làm đã lưu</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">{{ list.length }}</p>
              <div class="text-muted" id="count">Việc làm đã ứng tuyển</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-lg-5 pt-lg-2 pt-md-1">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              href="#user"
              class="nav-link active"
              id="user-tab"
              data-toggle="tab"
              role="tab"
            >
              Quản lý hồ sơ
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#job"
              class="nav-link"
              id="job-tab"
              data-toggle="tab"
              role="tab"
            >
              Việc làm đã lưu
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#result"
              class="nav-link"
              id="result-tab"
              data-toggle="tab"
              role="tab"
            >
              Việc làm bạn đã ứng tuyển
            </a>
          </li>
        </ul>

        <!--tab content-->
        <div class="tab-content w-100 pt-md-0">
          <!--userProfile-->
          <div
            class="tab-pane show active"
            id="user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div class="container rounded-bottom bg-light">
              <div class="row pl-lg-5 pt-md-0 pt-sm-2">
                <div class="col-md-6 py-md-4">
                  <div class="d-flex flex-row">
                    <div class="btn border-primary text-primary selected-tab">
                      <router-link to="/student-updateCV">
                        Cập nhật thông tin cá nhân</router-link
                      >
                    </div>
                  </div>
                  <div class="left">
                    <label class="profile-title">Thông tin của bạn</label>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <label class="labels"
                          >Họ & tên: {{ studentProfile.name }}</label
                        >
                      </div>
                      <div class="col-md-6">
                        <label class="labels" for="sex">Giới tính: </label>
                      </div>
                      <div class="col-md-6">
                        <label class="labels">Ngày sinh: </label>
                      </div>
                      <div class="col-md-8">
                        <label class="labels"
                          >Gmail: {{ studentProfile.gmail }}
                        </label>
                      </div>
                      <div class="col-md-12">
                        <label class="labels">Trường học: </label>
                      </div>
                      <div class="col-md-6">
                        <label class="labels">Kinh nghiệm: </label>
                      </div>
                      <div class="col-md-12">
                        <label class="labels">Ngoại ngữ: </label>
                      </div>
                      <div class="col-md-12">
                        <label class="labels">Mức lương mong muốn: </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--saveJob-->
          <div
            class="tab-pane fade"
            id="job"
            role="tabpanel"
            aria-labelledby="job-tab"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div class="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th>Tên việc làm</th>
                                  <th>Khu vực</th>
                                  <th>Hình thức</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                        <!--end table-responsive-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Job was applied-->
          <div
            class="tab-pane fade"
            id="result"
            role="tabpanel"
            aria-labelledby="result-tab"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div class="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th>Tên việc làm</th>
                                  <th>Hình thức</th>
                                  <th>Khu vực</th>
                                  <th>Ngày ứng tuyển</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in list"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td>{{ job.name }}</td>
                                  <td v-if="workingForm == 1"> Full time </td>
                                  <td v-else> Part time </td>
                                  <td> {{job.location}}</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <!--end table-responsive-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- job suggest -->
    <section id="featured" class="section bg-gray pb-45">
      <!-- <h2>Việc làm dành cho bạn</h2> -->
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-6 col-md-12 col-xs-12">
                    <a class="job-listings-featured" href="job-details.html">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-xs-12">
                                <div class="job-company-logo">
                                    <img src="assets/img/features/img1.png" alt="">
                                </div>
                                <div class="job-details">
                                    <h3>Software Engineer</h3>
                                    <span class="company-neme">FPT Software</span>
                                    <div class="tags">
                                        <span><i class="lni-map-marker"></i> Ho Chi Minh</span>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 text-right">
                                <div class="tag-type">
                                    <sapn class="heart-icon">
                                        <i class="lni-heart"></i>
                                    </sapn>
                                    <span class="part-time">Part Time</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      studentProfile: [],
      list: [],
      job: {
        type: Object,
        default: null,
      },
    };
  },

  mounted() {
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    axios
      .get("https://localhost:44315/job/applied-jobs", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.list = response.data.data;
      });
  },
};
</script>

<style>
</style>