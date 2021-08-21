<template>
  <div id="student-profile">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Thông tin chi tiết CV</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a href="#" @click="$router.go(-1)"> Trở về</a>
    </div>
    <div class="row justify-content-center round">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-lg card-1">
          <div class="card-body inner-card">
            <div class="row justify-content-center">
              <div class="col-lg-2 col-md-6 col-sm-12">
                <img
                  class="rounded-circle"
                  v-if="cv.avatar == ''"
                  src="/assets/img/logo.png"
                  width="150"
                  height="150"
                  style="margin: 30px 10px 10px 10px"
                />
                <img
                  class="rounded-circle"
                  v-else
                  v-bind:src="cv.avatar"
                  width="150"
                  height="150"
                  style="margin: 30px 10px 10px 10px"
                />
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">Tên CV: {{ cv.cvName }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Họ & tên: {{ cv.name }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Giới tính: {{ cv.sex ? "Nam" : "Nữ" }}</label
                    >
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Ngày sinh: {{ cv.dob }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Số điện thoại: {{ cv.phone }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Trường học: {{ cv.school }}</label>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="col-md-12">
                  <label class="labels"
                    >Kỹ năng: <span v-html="cv.skill"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Kinh nghiệm: <span v-html="cv.experience"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Ngoại ngữ: <span v-html="cv.foreignLanguage"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Mức lương mong muốn:
                    {{ formatPrice(cv.desiredSalaryMinimum) }} VNĐ</label
                  >
                </div>
              </div>
            </div>
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
      studentProfile: [],
      id: "",
      workingForm: "",
      salary: "",
      token: "",
      cv: {},
    };
  },

  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },

  async mounted() {
    this.id = this.$route.query.id;
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/cv/" +
          this.$route.query.id,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.cv = response.data.data;
        console.log(this.cv);
      });
  },
};
</script>

<style>
</style>