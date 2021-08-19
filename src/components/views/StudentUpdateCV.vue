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
    <form>
      <div class="row">
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <div class="row mt-3">
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
                <label class="labels">Ngoại ngữ*</label>
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

            <div class="row mt-3" v-if="isError">
              <div class="col-md-7 text-danger">
                Vui lòng điền đủ các thông tin.
              </div>
            </div>

            <div class="mt-5 text-center">
              <button
                  @click.prevent="updateCV"
                  class="btn btn-common log-btn"
                  type="btn btn-common log-btn"
              >
                Cập nhật
              </button>
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
      isError: false,
      isCreated: false,
    };
  },

  created() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv",
        {
          headers: header
        }
    ).then(response => {
      const cv = response.data.data;
      if (cv.name) {
        this.isCreated = true;
      }
      this.name = cv.name;
      this.dob = cv.dob;
      this.sex = cv.sex;
      this.school = cv.school;
      this.experience = cv.experience;
      this.foreignLanguage = cv.foreignLanguage;
      this.desiredSalaryMinimum = cv.desiredSalaryMinimum;
      this.workingForm = cv.workingForm;
    })
  },
  methods: {
     updateCV() {
       this.isError = false;

      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      };
      const data = {
        name: this.name,
        cvName: this.name,
        sex: this.sex,
        dob: this.dob,
        school: this.school,
        experience: this.experience,
        foreignLanguage: this.foreignLanguage,
        desiredSalaryMinimum: this.desiredSalaryMinimum,
        workingForm: this.workingForm,
      };
      const response = this.isCreated ? axios
          .put(`http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/update`, data, {
            headers: header,
          })
          :
          axios
              .post(`http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/create`, data, {
                headers: header,
              })
       response
        .then(() => {
          this.$router.push("/student-profile");
          window.location.reload;
        })
       .catch(e => {
         const { status } = e.response;
         if (status === 400) {
           this.isError = true;
         }
       });
    },
  },
};
</script>

<style>
</style>