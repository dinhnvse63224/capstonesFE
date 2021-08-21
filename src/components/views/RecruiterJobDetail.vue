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
    <section class="job-detail section">
      <div class="d-flex flex-row">
        <div style="margin left: 50px">
          <a href="#" @click="$router.go(-1)">Trở về</a><br />
        </div>
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
              <div class="widghet">
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
        <router-link
          :to="{ path: 'recruiter-edit-job', query: { id: job.id } }"
          class="btn btn-common"
        >
          Chỉnh sửa
        </router-link>
        <button
          type="button"
          class="btn btn-common"
          @click.prevent="modalConfirm(job.id)"
        >
          Xóa
        </button>
      </div>
    </section>
    <!-- Job Detail Section End -->
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
              @click.prevent="deleteJobCreated"
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      job: {},
      id_job_created: "",
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/" +
          this.$route.query.id
      )
      .then((response) => {
        console.log(this.$route.query.id);
        this.job = response.data.data;
      });
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    modalConfirm(id) {
      // eslint-disable-next-line no-undef
      $("#confirmDelete").modal("show");
      this.id_job_created = id;
    },
    deleteJobCreated() {
      if (localStorage.getItem("recruiterProfile")) {
        this.profile = JSON.parse(localStorage.getItem("recruiterProfile"));
      }
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
      axios
        .delete(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/remove-posted-job/" +
            this.id_job_created,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then(() => {
          // eslint-disable-next-line no-undef
          $("#confirmDelete").modal("hide");
          this.$router.push("/recruiter-profile");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>

<style>
</style>