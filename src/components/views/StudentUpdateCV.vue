<template>
  <div id="st-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Thông tin</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <form @submit="studentRegister"> -->
    <form>
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <!-- <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /> -->
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <div class="row mt-2">
              <div class="col-md-8">
                <label class="labels">Họ và Tên*</label>
                <input type="text" class="form-control" v-model="name" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-5">
                <label class="labels">Ngày tháng năm sinh*</label>
                <input type="text" placeholder="yyyy/mm/dd" class="form-control" v-model="dob" />
              </div>
              <div class="col-md-3">
                <label class="labels" for="sex">Giới tính*</label><br />
                <select name="sex" id="sex" v-model="sex" class="form-control">
                  <option :value="true">Nam</option>
                  <option :value="false">Nữ</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8">
                <label class="labels">Trường học*</label>
                <input type="text" class="form-control" v-model="school" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Kinh nghiệm*</label>
                <input type="text" class="form-control" v-model="experience" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8">
                <label class="labels">Ngoại ngữ</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Bằng TOEIC, IELTS, N6, N5, N4,..."
                  v-model="foreignLanguage"
                >
                </textarea>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Mức lương mong muốn*</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="desiredSalaryMinimum"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Hình thức công việc mong muốn*</label>
                <select v-model="workingForm" class="form-control">
                  <option :value="1">Full time</option>
                  <option :value="2">Part time</option>
                </select>
              </div>
            </div>

            <div class="mt-5 text-center">
              <router-link to="/student-profile">
                <button
                  @click="updateCV"
                  class="btn btn-common log-btn"
                  type="btn btn-common log-btn"
                >
                  Cập nhật
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      dob: "",
      sex: "",
      school: "",
      experience: "",
      foreignLanguage: "",
      desiredSalaryMinimum: "",
      workingForm: "",
    };
  },
  methods: {
     updateCV() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      };
      const data = {
        name: this.name,
        sex: this.sex,
        dob: this.dob,
        school: this.school,
        experience: this.experience,
        foreignLanguage: this.foreignLanguage,
        desiredSalaryMinimum: this.desiredSalaryMinimum,
        workingForm: this.workingForm,
      };
       axios
        .post("https://localhost:44315/student/cv/create", data, {
          headers: header,
        })
        .then(() => {
          this.$router.push("/student-profile");
          window.location.reload;
        });
    },
  },
};
</script>

<style>
</style>