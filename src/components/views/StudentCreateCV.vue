<template>
  <div id="st-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Tạo mới CV</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div>
        <a href="#" @click="$router.go(-1)"> Trở về</a>
      </div>
      <div class="row justify-content-center round">
        <div class="col-lg-10 col-md-12">
          <div class="card shadow-lg card-1">
            <div class="card-body inner-card">
              <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <!-- <div class="row mt-2">
                    <div class="col-md-12" >
                      <img v-if="avatar =='' " :src="studentProfile.avatar" width="150px"/>
                      <img else :src="avatar" width="150px" />
                      <label>
                      </label>
                    </div>
                  </div> -->
                  <div class="row mt-2">
                    <div class="col-md-10">
                      <label class="labels">Tên CV</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="cvName"
                      />
                      <!--Show error cvName-->
                      <div v-if="error_cvName.length > 0">
                        <ul>
                          <li
                            v-for="item in error_cvName"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-10">
                      <label class="labels"
                        ><span style="color: red">*</span>Họ và Tên</label
                      >
                      <input type="text" class="form-control" v-model="name" />
                      <!--Show error name-->
                      <div v-if="error_name.length > 0">
                        <ul>
                          <li
                            v-for="item in error_name"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
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
                        placeholder="yyyy-mm-dd"
                        class="form-control"
                        v-model="dob"
                      />
                      <!--Show error dob-->
                      <div v-if="error_dob.length > 0">
                        <ul>
                          <li
                            v-for="item in error_dob"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
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
                      <!--Show error phone-->
                      <div v-if="error_phone.length > 0">
                        <ul>
                          <li
                            v-for="item in error_phone"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
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
                      <!--Show error school-->
                      <div v-if="error_school.length > 0">
                        <ul>
                          <li
                            v-for="item in error_school"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
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
                      <!--Show error Salary Minimum-->
                      <div v-if="error_salaryMinimum.length > 0">
                        <ul>
                          <li
                            v-for="item in error_salaryMinimum"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
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
                      <!-- Show working form error -->
                      <div v-if="error_workingForm.length > 0">
                        <ul>
                          <li
                            v-for="item in error_workingForm"
                            v-bind:key="item"
                            style="color: red"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="row mt-3">
                    <div class="col-md-10">
                      <label class="labels"
                        >Ngoại ngữ</label
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
                        >Kỹ năng</label
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
                        >Kinh nghiệm</label
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

import Swal from "sweetalert2";
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
      customToolbar: [
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      ],
      studentProfile: [],

      error_cvName: [],
      error_name: [],
      error_dob: [],
      error_salaryMinimum: [],
      error_school: [],
      error_phone: [],
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
        console.log(cv);
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
            Swal.fire({
              title: "Thành công",
              text: "Tạo Cv thành công",
              icon: "success",
              timer: 1800,
            });
            this.$router.push("/student-profile");
            window.location.reload;
          }
        })
        .catch((e) => {
          (this.error_cvName = []),
            (this.error_name = []),
            (this.error_dob = []),
            (this.error_salaryMinimum = []),
            (this.error_school = []),
            (this.error_phone = []),
            console.log(e.response.data);
          const { status } = e.response;
          if (status === 400) {
            /*  this.isError = true; */
            /*Check date of birth*/
            if (this.school.length <= 0) {
              this.error_school.push("Trường học không để trống");
            }
            if (this.phone.length <= 0) {
              this.error_phone.push("Số điện thoại không để trống");
            }
            if (this.desiredSalaryMinimum.length <= 0) {
              this.error_salaryMinimum.push("Mức lương mong muốn không để trống");
            }
            if (
              JSON.stringify(
                e.response.data.modelState["dto.dob"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Phải trên 18 tuổi"
            ) {
              this.error_dob.push("Bạn chưa đủ tuổi");
            }
            /*Check Cv name*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.cvName"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Tên CV không được thiếu"
            ) {
              this.error_cvName.push("Tên Cv không được thiếu");
            }
            /*Check salary minimum*/
            if (
              JSON.stringify(
                e.response.data.modelState[
                  "dto.desiredSalaryMinimum"
                ][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Giá trị nhỏ nhất là 1"
            ) {
              this.error_salaryMinimum.push("Mức lương mong muốn lớn hơn 1");
            }
            /*Check name*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.name"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Tên không được thiếu"
            ) {
              this.error_name.push("Họ và tên không được để trống");
            }
            /*Check phone number*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.phone"][1].toString()
              ).replace(/^"(.*)"$/, "$1") == "SĐT không được thiếu" &&
              JSON.stringify(
                e.response.data.modelState["dto.phone"][0].toString()
              ).replace(/^"(.*)"$/, "$1") ==
                "SĐT chỉ chứa số và không quá 12 số"
            ) {
              this.error_phone.push(
                "Số điện thoại chỉ chứa số và từ 8 - 12 số"
              );
            }
          }
        });
    },
  },
};
</script>

<style>
</style>