<template>
  <div id="st-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Cập nhật CV</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div class="col-lg-12">
        <a href="#" @click="$router.go(-1)"> Trở về</a>
      </div>
      <div class="row justify-content-center round">
        <div class="col-lg-10 col-md-12">
          <div class="card shadow-lg card-1">
            <div class="card-body inner-card">
              <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <img
                        v-if="avatar == ''"
                        :src="studentProfile.avatar"
                        width="150px"
                      />
                      <img else :src="avatar" width="150px" />
                      <label>
                        <input
                          type="file"
                          id="file"
                          ref="file"
                          v-on:change="handleFileUpload()"
                          style="font-size: 15px"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-10">
                      <label class="labels">Tên CV</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="cvName"
                      />
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-10">
                      <label class="labels"
                        ><span style="color: red">*</span>Họ và Tên</label
                      >
                      <input type="text" class="form-control" v-model="name" />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <label class="labels"
                        ><span style="color: red">*</span>Ngày tháng năm
                        sinh</label
                      >
                      <input
                        type="text"
                        placeholder="yyyy/mm/dd"
                        class="form-control"
                        v-model="dob"
                      />
                    </div>
                    <div class="col-md-3">
                      <label class="labels" for="sex"
                        ><span style="color: red">*</span>Giới tính</label
                      ><br />
                      <select
                        name="sex"
                        id="sex"
                        v-model="sex"
                        class="form-control"
                      >
                        <option :value="true">Nam</option>
                        <option :value="false">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <label class="labels"
                        ><span style="color: red">*</span>Số điện thoại</label
                      >
                      <input type="text" class="form-control" v-model="phone" />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-11">
                      <label class="labels"
                        ><span style="color: red">*</span>Trường học</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="school"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-7">
                      <label class="labels"
                        ><span style="color: red">*</span>Mức lương mong
                        muốn(VNĐ)</label
                      >
                      <vue-numeric
                        class="form-control"
                        separator=","
                        v-model="desiredSalaryMinimum"
                      ></vue-numeric>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-5">
                      <label class="labels"
                        ><span style="color: red">*</span>Hình thức việc
                        làm</label
                      >
                      <select v-model="workingForm" class="form-control">
                        <option :value="1">Full time</option>
                        <option :value="2">Part time</option>
                      </select>
                    </div>
                  </div>
                  
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="row mt-3">
                    <div class="col-md-10">
                      <label class="labels"
                        ><span style="color: red">*</span>Ngoại ngữ</label
                      >
                      <vue-editor
                        v-model="foreignLanguage"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-10">
                      <label class="labels"
                        ><span style="color: red">*</span>Kỹ năng</label
                      >
                      <vue-editor
                        v-model="skill"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-10">
                      <label class="labels"
                        ><span style="color: red">*</span>Kinh nghiệm</label
                      >
                      <vue-editor
                        v-model="experience"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                    </div>
                  </div>
                </div>

                <div class="row mt-3" v-if="isError">
                  <div class="col-md-7 text-danger">
                    Vui lòng điền đủ các thông tin.
                  </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="mt-5 text-center">
                    <button
                      @click.prevent="updateCV"
                      class="btn btn-common"
                      type="btn btn-common log-btn"
                    >
                      {{ isCreated ? "Cập nhật" : "Tạo mới" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { VueEditor } from "vue2-editor";
import VueNumeric from "vue-numeric";
export default {
  data() {
    return {
      avatar: "",
      cvName: "",
      name: "",
      dob: "",
      sex: "",
      school: "",
      experience: "",
      skill: "",
      foreignLanguage: "",
      desiredSalaryMinimum: "",
      phone: "",
      workingForm: "",
      isError: false,
      isCreated: false,
      customToolbar: [[{ list: "ordered" }, { list: "bullet" }]],
      studentProfile: [],
      isPublic: ""
    };
  },

  components: {
    VueEditor,
    VueNumeric,
  },

  created() {
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/" +
          this.$route.query.id,
        {
          headers: header,
        }
      )
      .then((response) => {
        const cv = response.data.data;
        if (cv.name) {
          this.isCreated = true;
        }
        this.avatar = cv.avatar;
        this.cvName = cv.cvName;
        this.name = cv.name;
        this.dob = cv.dob;
        this.phone = cv.phone;
        this.sex = cv.sex;
        this.skill = cv.skill;
        this.school = cv.school;
        this.experience = cv.experience;
        this.foreignLanguage = cv.foreignLanguage;
        this.desiredSalaryMinimum = cv.desiredSalaryMinimum;
        this.workingForm = cv.workingForm;
        this.isPublic = cv.isPublic
      });
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
      let data = {};
      if (this.isCreated) {
        data = {
          id: Number(this.$route.query.id),
          cvName: this.cvName,
          name: this.name,
          sex: this.sex,
          phone: this.phone,
          dob: moment(this.dob).format("YYYY-MM-DD"),
          school: this.school,
          experience: this.experience,
          skill: this.skill,
          foreignLanguage: this.foreignLanguage,
          desiredSalaryMinimum: this.desiredSalaryMinimum,
          workingForm: this.workingForm,
          isPublic: this.isPublic,
        };
      } else {
        data = {
          cvName: this.cvName,
          name: this.name,
          sex: this.sex,
          phone: this.phone,
          dob: this.dob,
          school: this.school,
          experience: this.experience,
          skill: this.skill,
          foreignLanguage: this.foreignLanguage,
          desiredSalaryMinimum: this.desiredSalaryMinimum,
          workingForm: this.workingForm,
          isPublic: this.isPublic
        };
      }
      console.log(data);
      const response = this.isCreated
        ? axios.put(
            `http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/update`,
            data,
            {
              headers: header,
            }
          )
        : axios.post(
            `http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/create`,
            data,
            {
              headers: header,
            }
          );
      response
        .then(() => {
          if (this.isCreated) {
            this.$router.push("detail-cv?id=" + this.$route.query.id);
          } else {
            this.$router.push("/student-profile");
            window.location.reload;
          }
        })
        .catch((e) => {
          const { status } = e.response;
          if (status === 400) {
            this.isError = true;
          }
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      var formData = new FormData();
      formData.append("avatar", this.file);
      axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/" +
            this.$route.query.id +
            "/upload-image",
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          this.avatar = response;
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