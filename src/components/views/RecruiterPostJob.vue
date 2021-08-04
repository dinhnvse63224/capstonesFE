<template>
  <div id="recruiter-post-job">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Nhà tuyển Dụng</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header Start -->

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
                </div>
                <div class="form-group">
                  <label for="inputEmail4">Hình thức*</label>
                  <select v-model="workingForm" class="form-control">
                    <option :value="1">Full time</option>
                    <option :value="2">Part time</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="time"> Mức Lương Tối Thiểu(VNĐ)*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="salaryMin"
                    id="time"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="inputEmail4">Ngành nghề*</label>
                  <!-- <multiselect
                    v-model="categories"
                    :options="options"
                    :multiple="true"
                    :close-on-select="false"
                    :clear-on-select="false"
                    :preserve-search="true"
                    label="code"
                    track-by="code"
                    :preselect-first="true"
                  >
                    <template
                      slot="selection"
                      slot-scope="{ values, isOpen }"
                      ><span
                        class="multiselect__single"
                        v-if="values.length &amp;&amp; !isOpen"
                        >{{ values.length }} options selected</span
                      ></template
                    >
                  </multiselect> -->
                  <select v-model="categories" class="form-control">
                    <option
                      v-for="(categories, index) in list"
                      v-bind:key="index"
                      v-bind:categories="categories"
                      :value="categories.code"
                    >
                      {{ categories.value }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="labels" for="sex">Yêu cầu giới tính</label
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
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="phone">Quận</label>
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
                </div>
                <div class="form-group">
                  <label for="time"> Mức Lương Tối Đa(VNĐ)*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="salaryMax"
                    id="time"
                    placeholder=""
                  />
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
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2"
                    >Mô tả công viêc*</label
                  >
                  <textarea
                    class="form-control rounded-0"
                    v-model="description"
                    id="exampleFormControlTextarea2"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2"
                    >Yêu cầu công việc*</label
                  >
                  <textarea
                    class="form-control rounded-0"
                    v-model="requirement"
                    id="exampleFormControlTextarea2"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-12">
                <div class="form-group">
                  <label for="exampleFormControlTextarea2">Quyền lợi*</label>
                  <textarea
                    class="form-control rounded-0"
                    v-model="offer"
                    id="exampleFormControlTextarea2"
                    rows="5"
                  ></textarea>
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
                    <!-- Modal -->
                  </div>
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
      token: "",
    };
  },
  components: {
    
  },

  mounted() {
    axios.get("https://localhost:44315/job/categories").then((response) => {
      this.list = response.data.data;

    });
  },
  computed: {
    loadCategories() {
      return this.categories.slice(',');
    }
  },
  methods: {
    async postJob() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      };
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
        categories: [this.categories],
      };
      await console.log(data);
      await axios
        .post("https://localhost:44315/job/create", data, {
          headers: header,
        })
        .then(
          this.$router.push('/recruiter-profile')
        );
    },
  },
};
</script>

<style>
</style>