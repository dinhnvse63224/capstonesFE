<template>
  <div id="recruiter-post-job">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Tạo mới việc làm</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header Start -->
    <div class="d-flex flex-row">
      <div><a href="#" @click="comeback">Trở về</a><br /></div>
    </div>
    <div class="row justify-content-center round">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-lg card-1">
          <div class="card-body inner-card">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="first-name">Tên việc làm*</label
                  ><input
                    type="text"
                    class="form-control"
                    v-model="name"
                    id="Tên công việc"
                    placeholder=""
                  />
                  <!-- Show job nanme error -->
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
                <div class="form-group">
                  <label for="inputEmail4">Hình thức*</label>
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
                <div class="form-group">
                  <label for="time"> Mức Lương Tối Thiểu(VNĐ)*</label>
                  <vue-numeric
                    id="time"
                    class="form-control"
                    separator=","
                    v-model="salaryMin"
                  ></vue-numeric>
                  <!-- Show salary minumum error -->
                  <div v-if="error_salaryMin.length > 0">
                    <ul>
                      <li
                        v-for="item in error_salaryMin"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <label for="inputEmail4">Ngành nghề*</label>
                <multiselect
                  v-model="multiCategory"
                  :options="list"
                  :multiple="true"
                  :close-on-select="false"
                  :preserve-search="true"
                  placeholder=""
                  label="value"
                  track-by="id"
                  class="form-control w-auto"
                >
                </multiselect>
                <!-- Show category error -->
                <div v-if="error_category.length > 0">
                  <ul>
                    <li
                      v-for="item in error_category"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="form-group">
                  <label class="labels" for="sex">Yêu cầu giới tính*</label
                  ><br />
                  <select
                    v-model="sex"
                    name="sex"
                    id="sex"
                    class="form-control"
                  >
                    <option :value="1">Nam</option>
                    <option :value="2">Nữ</option>
                  </select>
                  <!-- Show sex error -->
                  <div v-if="error_sex.length > 0">
                    <ul>
                      <li
                        v-for="item in error_sex"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="phone">Quận*</label>
                  <select v-model="location" class="form-control">
                    <option :value="null">Khu Vực</option>
                    <option :value="1">Quận 1</option>
                    <option :value="2">Quận 2</option>
                    <option :value="3">Quận 3</option>
                    <option :value="4">Quận 4</option>
                    <option :value="5">Quận 5</option>
                    <option :value="6">Quận 6</option>
                    <option :value="7">Quận 7</option>
                    <option :value="8">Quận 8</option>
                    <option :value="9">Quận 9</option>
                    <option :value="10">Quận 10</option>
                    <option :value="11">Quận 11</option>
                    <option :value="12">Quận 12</option>
                    <option :value="13">Quận Bình Thạnh</option>
                    <option :value="14">Quận Thủ Đức</option>
                    <option :value="15">Quận Gò Vấp</option>
                    <option :value="16">Quận Phú Nhuận</option>
                    <option :value="17">Quận Tân Bình</option>
                    <option :value="18">Quận Tân Phú</option>
                    <option :value="19">Quận Bình Tân</option>
                    <option :value="20">Huyện Nhà Bè</option>
                    <option :value="21">Huyện Hóc Môn</option>
                    <option :value="22">Huyện Bình Chánh</option>
                    <option :value="23">Huyện Củ Chi</option>
                    <option :value="24">Huyện Cần Giờ</option>
                  </select>
                  <!-- Show location error -->
                  <div v-if="error_location.length > 0">
                    <ul>
                      <li
                        v-for="item in error_location"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group">
                  <label for="Evaluate Budget">Địa chỉ làm việc*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="workingPlace"
                    id="Evaluate Budget"
                    placeholder=""
                  />
                  <!-- Show working place error -->
                  <div v-if="error_workingPlace.length > 0">
                    <ul>
                      <li
                        v-for="item in error_workingPlace"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group">
                  <label for="time"> Mức Lương Tối Đa(VNĐ)*</label>
                  <vue-numeric
                    id="time"
                    class="form-control"
                    separator=","
                    v-model="salaryMax"
                  ></vue-numeric>
                  <!-- Show salary maximum error -->
                  <div v-if="error_salaryMax.length > 0">
                    <ul>
                      <li
                        v-for="item in error_salaryMax"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group">
                  <label for="skill">Số người cần tuyển*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="quantity"
                    id="skill"
                    placeholder=""
                  />
                  <!-- Show quantity error -->
                  <div v-if="error_quantity.length > 0">
                    <ul>
                      <li
                        v-for="item in error_quantity"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group">
                  <label class="labels" for="days">Số ngày hiệu lực*</label
                  ><br />
                  <select v-model="activeDays" name="days" class="form-control">
                    <option
                      v-for="(activeDay, index) in listDayPrice"
                      v-bind:key="index"
                      :value="activeDay.activeDays"
                    >
                      {{ activeDay.activeDays }} Ngày -
                      {{ formatPrice(activeDay.price) }} VNĐ
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2"
                    >Mô tả công viêc*</label
                  >
                  <vue-editor
                    v-model="description"
                    :editorToolbar="customToolbar"
                  ></vue-editor>
                  <!-- Show description error -->
                  <div v-if="error_description.length > 0">
                    <ul>
                      <li
                        v-for="item in error_description"
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
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2"
                    >Yêu cầu công việc*</label
                  >
                  <vue-editor
                    v-model="requirement"
                    :editorToolbar="customToolbar"
                  ></vue-editor>
                  <!-- Show requirement error -->
                  <div v-if="error_requirement.length > 0">
                    <ul>
                      <li
                        v-for="item in error_requirement"
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
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2">Quyền lợi*</label>
                  <vue-editor
                    v-model="offer"
                    :editorToolbar="customToolbar"
                  ></vue-editor>
                  <!-- Show offer error -->
                  <div v-if="error_offer.length > 0">
                    <ul>
                      <li
                        v-for="item in error_offer"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-2 mt-4">
                  <div
                    class="
                      height-100
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="postJob"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Đăng tuyển
                    </button>
                  </div>
                  <!-- Modal -->
                  <!-- <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Vui lòng thanh toán
                          </h5>
                          <button
                            type="button"
                            
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <ul class="body-desc">
                            <li>Bạn vui lòng thanh toán để được đăng tin:</li>
                            <li>Số Tài khoản</li>
                            <li>Chủ Tài khoản</li>
                            <li>
                              Nội dung: Chuyển tiền "tên công việc + tên công
                              ty"
                            </li>
                          </ul>
                          <button
                            @click.prevent="doneJob"
                            class="btn btn-common log-btn"
                            type="btn btn-common log-btn"
                          >
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> -->
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
import { VueEditor } from "vue2-editor";
import Swal from "sweetalert2";
import VueNumeric from "vue-numeric";
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      name: "",
      workingForm: "",
      location: "",
      workingPlace: "",
      description: "",
      requirement: "",
      type: true,
      offer: "",
      sex: "",
      quantity: "",
      salaryMin: "",
      salaryMax: "",
      list: [],
      categories: [],
      id: "",
      activeDays: "",
      activeDay: "",
      multiCategory: [],
      listDayPrice: [],
      token: "",
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true },
      ],
      customToolbar: [[{ list: "ordered" }, { list: "bullet" }]],

      error_category: [],
      error_description: [],
      error_quantity: [],
      error_requirement: [],
      error_name: [],
      error_workingPlace: [],
      error_offer: [],
      error_salaryMin: [],
      error_salaryMax: [],
      error_workingForm: [],
      error_location: [],
      error_sex: [],
    };
  },
  components: {
    VueEditor,
    VueNumeric,
    Multiselect,
  },

  async mounted() {
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/categories"
      )
      .then((response) => {
        this.list = response.data.data;
        console.log(this.list);
      });
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/active-days-price"
      )
      .then((response) => {
        this.listDayPrice = response.data.data;
        console.log(this.listDayPrice);
      });
  },
  computed: {
    loadCategories() {
      return this.categories.slice(",");
    },
  },
  methods: {
    postJob() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      };
     this.categories = [];
      this.multiCategory.forEach((cate) => {
        (this.multiCategory = []), this.categories.push(cate.id);
        console.log(this.categories.push(cate.id));
      });
      const data = {
        name: this.name,
        workingForm: this.workingForm,
        salaryMin: this.salaryMin,
        location: this.location,
        workingPlace: this.workingPlace,
        requirement: this.requirement,
        type: true,
        offer: this.offer,
        sex: this.sex,
        quantity: this.quantity,
        description: this.description,
        salaryMax: this.salaryMax,
        categories: this.categories,
        activeDays: this.activeDays,
      };
      axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/create",
          data,
          {
            headers: header,
          }
        )
        .then(() => {
          Swal.fire({
            title: "Thành công",
            text: "Tạo công việc thành công",
            icon: "success",
            confirmButtonText: "Xác nhận",
            timer: 2000,
          });
          this.$router.push("/recruiter-profile");
          window.location.reload();
        })
         .catch((e) => {
          (this.error_category = []),
            (this.error_description = []),
            (this.error_quantity = []),
            (this.error_requirement = []),
            (this.error_name = []),
            (this.error_workingPlace = []),
            (this.error_offer = []),
            (this.error_salaryMin = []),
            (this.error_salaryMax = []),
            (this.error_workingForm = []),
            (this.error_location = []),
            (this.error_sex = []),
            console.log(e.response);
          const { status } = e.response;
          if (status == 400) {
            console.log(e.response.data);
            if (
              JSON.stringify(
                e.response.data.modelState["dto.salaryMin"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "salaryMin không thể >= salaryMax"
            ) {
              Swal.fire({
                title: "Thất bại",
                text: "Mức lương tối thiểu không bằng hoặc lớn hơn mức lương tối đa",
                icon: "error",
                confirmButtonText: "Xác nhận",
              });
            }

            /*Check category*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.categories"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Ít nhất 1 category"
            ) {
              this.error_category.push("Chọn ít nhất một ngành nghề");
            } 
            // Check sex
            if (
              JSON.stringify(
                e.response.data.modelState["dto.sex"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_sex.push("Hãy chọn một giới tính");
            }
            /*Check description*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.description"][0].toString()
              ).replace(/^"(.*)"$/, "$1") ==
              "The description field is required."
            ) {
              this.error_description.push("Mô tả công việc không để trống");
            }
            /*Check name*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.name"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "The name field is required."
            ) {
              this.error_name.push("Tên công việc không để trống");
            }
            /*Check offer*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.offer"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "The offer field is required."
            ) {
              this.error_offer.push("Quyền lợi không để trống");
            }
            /*Check quantity*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.quantity"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_quantity.push("Số người cần tuyển không để trống");
            } else if (
              JSON.stringify(
                e.response.data.modelState["dto.quantity"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Giá trị nhỏ nhất là 1"
            ) {
              this.error_quantity.push("Số người cần tuyển lớn hơn 0");
            }
            /*Check requirement*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.requirement"][0].toString()
              ).replace(/^"(.*)"$/, "$1") ==
              "The requirement field is required."
            ) {
              this.error_requirement.push("Yêu cầu công việc không để trống");
            }
            /*Check salary max*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.salaryMax"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_salaryMax.push("Mức lương tối đa không để trống");
            } else if (
              JSON.stringify(
                e.response.data.modelState["dto.salaryMax"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Giá trị nhỏ nhất là 1"
            ) {
              this.error_salaryMax.push("Mức lương tối đa lớn hơn 0");
            }
            /*Check salary min*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.salaryMin"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "Giá trị nhỏ nhất là 1"
            ) {
              this.error_salaryMin.push("Mức lương tối thiểu lớn hơn 0");
            } else if (
              JSON.stringify(
                e.response.data.modelState["dto.salaryMin"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_salaryMin.push("Mức lương tối thiểu không để trống và là một số");
            }
            /*Check working place*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.workingPlace"][0].toString()
              ).replace(/^"(.*)"$/, "$1") ==
              "Địa chỉ chính xác của nơi làm việc không bỏ trống"
            ) {
              this.error_workingPlace.push("Địa chỉ công việc không để trống");
            }
            /*Check working form*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.workingForm"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_workingForm.push(
                "Hình thức nên chọn Part-time hoặc Full-time"
              );
            }
            /*Check location*/
            if (
              JSON.stringify(
                e.response.data.modelState["dto.location"][0].toString()
              ).replace(/^"(.*)"$/, "$1") == "An error has occurred."
            ) {
              this.error_location.push("Chọn một quận");
            }
          }
        });
    },
    comeback() {
      this.$router.push("/recruiter-profile");
      window.location.reload();
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>