<template>
  <div id="job-detail">
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-6 col-xs-12">
            <div class="breadcrumb-wrapper">
              <div class="content">
                <h3 class="job-title">{{ job.name }}</h3>
                <p class="brand"></p>
                <div class="tags">
                  <span
                    ><i class="lni-map-marker"></i
                    ><label class="job-label">
                      {{ job.workingPlace }}
                    </label></span
                  ><br />
                  <span
                    ><i class="lni-calendar"></i> Ngày tạo:
                    <label class="job-label">{{ job.createDate }}</label> </span
                  ><br />
                  <span
                    ><i class="lni-calendar"></i> Ngày hết hạn:
                    <label class="job-label">{{ job.endDate }}</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Job Detail Section Start -->
    <section class="job-detail section">
      <div class="d-flex flex-row">
        <div><a href="#" @click="$router.go(-1)">Trở về </a><br /></div>
      </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12 col-xs-12">
            <div class="content-area">
              <h4>MÔ TẢ CÔNG VIỆC</h4>
              <span v-html="job.description"></span>
              <h5>YÊU CẦU CÔNG VIỆC</h5>
              <span v-html="job.requirement"></span>
              <h5>QUYỀN LỢI ĐƯỢC HƯỞNG</h5>
              <span v-html="job.offer"></span>
              <br />
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-xs-12">
            <div class="sideber">
              <div class="widghet" v-if="!isShowInfo">
                <h3>THÔNG TIN TUYỂN DỤNG</h3>
                <button @click.prevent="details" class="btn btn-common log-btn">
                  Chi tiết
                </button>
              </div>
              <div class="widghet" v-if="isShowInfo">
                <h3>THÔNG TIN TUYỂN DỤNG</h3>
                <li>
                  Mức lương: {{ formatPrice(job.salaryMin) }} VNĐ -
                  {{ formatPrice(job.salaryMax) }} VNĐ
                </li>
                <br />
                <li v-if="job.workingForm == 1">
                  Hình thức làm việc: Full time
                </li>
                <li v-else>Hình thức làm việc: Part time</li>
                <br />
                <li>Số lượng cần tuyển: {{ job.quantity }}</li>
                <br />
                <li v-if="job.sex == 1">Yêu cầu giới tính: Nam</li>
                <li v-else>Yêu cầu giới tính: Nữ</li>
                <br />
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-common" @click.prevent="chooseCV">
          Nộp đơn
        </button>
        <button type="button" class="btn btn-common" @click.prevent="saveJob">
          Lưu việc
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ul class="body-desc">
                  <li>
                    Nộp đơn thành công. Vui lòng chờ phản hồi qua từ nhà tuyển
                    dụng.
                  </li>
                </ul>
                <button
                  @click.prevent="accept"
                  class="btn btn-common"
                  data-bs-dismiss="modal"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="saveJobMessage"
          tabindex="-1"
          aria-labelledby="saveJobMessageLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <ul class="body-desc">
                  <li>
                    Lưu việc thành công. Vui lòng kiểm tra trong danh sách đã
                    lưu.
                  </li>
                </ul>
                <button class="btn btn-common" data-bs-dismiss="modal">
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="noCV"
          tabindex="-1"
          aria-labelledby="saveJobMessageLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <ul class="body-desc">
                  <li>Bạn chưa có CV nào. Hãy tạo CV mới ở trang hồ sơ</li>
                </ul>
                <button class="btn btn-common" data-bs-dismiss="modal">
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="chooseCV"
          tabindex="-1"
          aria-labelledby="saveJobMessageLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="col-md-12 mt-30 ov">
                  <label class="profile-title"
                    >Vui Lòng chọn cv bạn muốn nộp</label
                  >
                  <div class="left list-cv">
                    <button
                      v-for="(cv, index) in listCV"
                      v-bind:key="index"
                      class="btn btn-light col-lg-12 col-md-12 col-xs-12"
                      @click.prevent="applyJob(cv.id)"
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
                            Hình thức: Part Time </label
                          ><br />
                          <label class="label">
                            Mức lương:
                            {{ formatPrice(cv.desiredSalary) }} VNĐ
                          </label>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="mt-5">
                  <button class="btn btn-common" @click.prevent="accept">
                    Xác nhận
                  </button>
                  <button class="btn btn-common" data-bs-dismiss="modal">
                    Huỷ bỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Job Detail Section End -->
    <!-- Featured Section Start -->
    <section id="latest-jobs" class="section bg-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">VIỆC LÀM TƯƠNG TỰ</h2>
        </div>
        <ListJob v-bind:list="list" />
      </div>
    </section>
    <!-- Featured Section End -->
  </div>
</template>

<script>
import axios from "axios";
import ListJob from "../Job/ListJob";

export default {
  data() {
    return {
      job: {
        type: Object,
        default: null,
      },
      id: "",
      studentProfile: "",
      isShowInfo: false,
      token: "",
      listCV: [],
      list: [],
    };
  },
  components: {
    ListJob,
  },
  mounted() {
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    this.token = localStorage.getItem("token");
    if (this.token) {
      this.isShowInfo = true;
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
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/" +
          this.$route.query.id
      )
      .then((response) => {
        this.job = response.data.data;
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
        if (response.data.data.length >= 2) {
          this.jobSuggest = [response.data.data[0], response.data.data[1]];
        } else {
          this.jobSuggest = response.data.data;
        }
      });
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/similar-jobs/" +
          this.$route.query.id
      )
      .then((response) => {
        this.list = response.data.data;
        console.log(this.jobSimilar);
      });
  },
  methods: {
    // method ko nên dùng async
    chooseCV() {
      if (this.listCV.length == 0) {
        // eslint-disable-next-line no-undef
        $("#noCV").modal("show");
      } else {
        // eslint-disable-next-line no-undef
        $("#chooseCV").modal("show");
      }
    },
    applyJob(idCV) {
      if (this.token) {
        const header = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        };
        const data = {
          jobId: Number(this.$route.query.id),
          cvId: Number(idCV),
        };
        axios
          .post(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/apply",
            data,
            {
              headers: header,
            }
          )
          .then(() => {
            // eslint-disable-next-line no-undef
            $("#chooseCV").modal("hide");
            // eslint-disable-next-line no-undef
            $("#exampleModal").modal("show");
          })
          .catch((e) => {
            const { message } = e.response.data;
            alert(message.toString());
          });
      } else {
        alert("Bạn cần đăng nhập để nộp đơn!");
      }
    },
    saveJob() {
      if (this.token) {
        const header = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        };
        const data = {
          jobId: Number(this.$route.query.id),
        };
        axios
          .post(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/save",
            data,
            {
              headers: header,
            }
          )
          .then(() => {
            // eslint-disable-next-line no-undef
            $("#saveJobMessage").modal("show");
          })
          .catch((e) => {
            const { message } = e.response.data;
            alert(message.toString());
          });
      } else {
        alert("Bạn cần đăng nhập để nộp đơn!");
      }
    },
    details() {
      alert("Bạn cần đăng nhập để xem thông tin chi tiết");
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
.job-title {
  font-size: 28px;
}
.job-label {
  font-size: 18px;
}
</style>