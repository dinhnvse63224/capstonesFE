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
            <img
              v-bind:src="studentProfile.avatar"
              class="rounded-circle"
              id="profile"
            />
          </div>
          <div class="p-md-2 p-1" id="info">
            <h5>{{ studentProfile.gmail }}</h5>
            <div class="text-muted"></div>
          </div>
        </div>
        <div class="rounded p-lg-2 p-1" id="blue-background">
          <div class="d-flex flex-md-row align-items-center">
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">{{ listSaved.length }}</p>
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
              <div class="row pl-lg-6 pt-md-0 pt-sm-2">
                <div class="col-md-12 mt-30 ov">
                  <div id="section-header">
                    <center>
                      <h2 class="section-tittle">Danh sách CV của bạn</h2>
                      <br />
                    </center>
                    <div>
                      <router-link class="btn btn-common" to="/update-cv">
                        Thêm mới CV</router-link
                      >
                    </div>
                  </div>
                  <div
                    class="container-fluid bg-trasparent my-4 p-3"
                    style="position: relative"
                  >
                    <div
                      class="
                        row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4
                        g-3
                      "
                    >
                      <div
                        v-for="(cv, index) in listCV"
                        v-bind:key="index"
                        class="col"
                      >
                        <div class="card h-100 shadow-sm">
                          <div class="label-top shadow-sm">
                            {{ cv.cvName }}
                          </div>
                          <div class="card-body">
                            <label class="label" v-if="cv.workingForm == 1">
                              Hình thức: Full Time
                            </label>
                            <label class="label" v-else>
                              Hình thức: Part Time
                            </label><br>
                            <label class="label">
                              Mức lương:
                              {{ formatPrice(cv.desiredSalary) }} VNĐ
                            </label>
                            <div class="text-center my-4">
                              <router-link
                                class="btn btn-warning"
                                :to="{
                                  path: 'detail-cv',
                                  query: { id: cv.id },
                                }"
                                >Chi tiết</router-link
                              >
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
                                <tr>
                                  <th class="th-label">Tên việc làm</th>
                                  <th class="th-label">Tên công ty</th>
                                  <th class="th-label">Ngày việc làm hết hạn</th>
                                  <th class="th-label"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in listSaved"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td style="text-align: left">
                                    <label class="td-label">
                                      <router-link
                                        :to="{
                                          name: 'jobDetail',
                                          query: { id: job.id },
                                        }"
                                        target="_blank"
                                        >{{ job.name }}</router-link
                                      >
                                    </label>
                                  </td>
                                  <td>
                                    <label class="td-label">
                                      {{ job.companyName }}
                                    </label>
                                  </td>
                                  <td>
                                    <label class="td-label">
                                      {{ job.endDate }}
                                    </label>
                                  </td>
                                  <td>
                                    <div>
                                      <button
                                        class="btn btn-common"
                                        @click.prevent="modalConfirm(job.id)"
                                      >
                                        Bỏ lưu
                                      </button>
                                    </div>
                                  </td>
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
                                  <th class="th-label">Tên việc làm</th>
                                  <th class="th-label">Ngày ứng tuyển</th>
                                  <th class="th-label">Ngày việc làm hết hạn</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in list"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td style="text-align: left">
                                    <label class="td-label">
                                      <router-link
                                        :to="{
                                          name: 'jobDetail',
                                          query: { id: job.id },
                                        }"
                                        target="_blank" 
                                        >{{ job.name }}</router-link
                                      >
                                    </label>
                                  </td>
                                  <td>
                                    <label class="td-label">
                                      {{ job.appliedDate }}
                                    </label>
                                  </td>
                                  <td>
                                    <label class="td-label">
                                      {{ job.jobEndDate }}
                                    </label>
                                  </td>
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
      <div
        class="modal fade"
        id="confirmDelete"
        tabindex="-1"
        aria-labelledby="saveJobMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ul class="body-desc">
                <li>Bạn có chắc chắn muốn xoá công việc này?</li>
              </ul>
              <button
                class="btn btn-danger log-btn"
                @click.prevent="deleteJobSaved"
              >
                Xác nhận
              </button>
              <button class="btn btn-common log-btn" data-bs-dismiss="modal">
                Huỷ
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- job suggest -->

      <div class="row">
        <div class="col-md-12 py-md-4">
          <div id="latest-jobs" class="section bg-gray">
            <div class="container job-listings-featured">
              <div class="section-header">
                <h2 class="section-title">Việc làm phù hợp</h2>
              </div>
              <ListJob v-bind:list="jobSuggest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ListJob from "../Job/ListJob";

export default {
  data() {
    return {
      studentProfile: [],
      listCV: [],
      studentCv: {},
      list: [],
      listSaved: [],
      id_job_saved_delete: "",
      job: {
        type: Object,
        default: null,
      },
      jobSuggest: [],
    };
  },
  components: {
    ListJob,
  },

  methods: {
    modalConfirm(id) {
      // eslint-disable-next-line no-undef
      $("#confirmDelete").modal("show");
      this.id_job_saved_delete = id;
    },
    deleteJobSaved() {
      axios
        .delete(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/remove-saved-job/" +
            this.id_job_saved_delete,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then(() => {
          // eslint-disable-next-line no-undef
          $("#confirmDelete").modal("hide");
          window.location.reload();
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },

  mounted() {
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/self",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data !== null) {
          this.listCV = response.data.data.listCv;
        }
      });

    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.studentCv = response.data.data;
        console.log(this.studentCv);
      });

    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/suggest",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.jobSuggest = response.data.data;
      });

    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/applied-jobs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data !== null) {
          this.list = response.data.data;
        }
      });

    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/saved-jobs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data !== null) {
          this.listSaved = response.data.data;
        }
      });
  },
};
</script>

<style>
.cv-info {
  background: #fff;
  margin: 0px 0px 0px 30px;
  border-radius: 4px;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 14px rgb(191 191 191 / 24%);
}

.list-cv {
  height: 200px;
  overflow: auto;
  margin: auto;
}
.th-label {
  font-size: 18px;
}

.td-label {
  font-size: 16px;
  margin: 20px 0px 20px 0px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container-fluid {
  float: left;
  max-width: 1000px;
}

.card {
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  border: 0;
  border-radius: 1rem;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.label-top {
  background-color: #00bcd4;
  color: #fff;
  top: 8px;
  right: 8px;
  padding: 5px 10px 5px 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  text-transform: uppercase;
  text-align: center;
}

@media (max-width: 768px) {
  .card-img-top {
    max-height: 250px;
  }
}

.over-bg {
  background: rgba(53, 53, 53, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
}

@media (max-width: 1025px) {
  .btn {
    padding: 5px 40px 5px 40px;
  }
}

@media (max-width: 250px) {
  .btn {
    padding: 5px 30px 5px 30px;
  }
}

.btn-warning {
  background: none #00bcd4;
  color: #ffffff;
  fill: #ffffff;
  border: none;
  text-decoration: none;
  outline: 0;
  box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
  border-radius: 100px;
}

.btn-warning:hover {
  background: none #ff962b;
  color: #ffffff;
  box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35);
}

@media (max-width: 576px) {
  .box-img {
    max-width: 200px;
  }

  .thumb-sec {
    max-width: 200px;
  }
}

@media (max-width: 370px) {
  .box .btn {
    padding: 5px 40px 5px 40px;
    font-size: 1rem;
  }
}
</style>