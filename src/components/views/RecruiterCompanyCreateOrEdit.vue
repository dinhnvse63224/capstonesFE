<template>
  <div id="recruiter-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>{{ isCreated ? "Cập nhật" : "Tạo mới" }} công ty</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center round">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-lg card-1">
          <div class="card-body inner-card">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <div class="d-flex flex-row">
                  <div>
                    <a href="#" @click="$router.go(-1)">Trở về trang cá nhân</a><br />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 py-5">
                  <div class="row mt-3">
                    <div class="col-md-12">
                    <img :src="company.avatar" width="150px" />
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
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels"
                        ><span style="color: red">*</span>Tên công ty</label
                      >
                      <input type="text" class="form-control" v-model="name" />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels"
                        ><span style="color: red">*</span>Trụ sở chính</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="headquarters"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels"
                        ><span style="color: red">*</span>Website công ty</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://"
                        v-model="website"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 py-5">
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels"
                        ><span style="color: red">*</span>Mô tả công ty</label
                      >
                      <vue-editor
                        v-model="description"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <button
                class="btn btn-common log-btn"
                type="btn btn-common log-btn"
                @click.prevent="updateCompany"
              >
                {{ isCreated ? "Cập nhật" : "Tạo mới" }}
              </button>
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

export default {
  data() {
    return {
      name: "",
      token: "",
      headquarters: "",
      website: "",
      description: "",
      error: false,
      isCreated: false,
      hasCompany: true,
      company: "",
    };
  },

  components: {
    VueEditor,
  },

  methods: {
    updateCompany() {
      const response = this.isCreated
        ? axios.put(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/update",
            {
              name: this.name,
              headquaters: this.headquarters,
              website: this.website,
              description: this.description,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        : axios.post(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/create",
            {
              name: this.name,
              headquaters: this.headquarters,
              website: this.website,
              description: this.description,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
      response
        .catch((error) => {
          console.log(error.response);
          if (error.response.status == 400) {
            this.error = true;
          }
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/recruiter-profile");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      var formData = new FormData();
      formData.append("avatar", this.file);
      axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/upload-image",
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }

    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/self",
        {
          headers: header,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          this.isCreated = true;
        }
        this.name = response.data.data.name;
        this.headquarters = response.data.data.headquaters;
        this.website = response.data.data.website;
        this.description = response.data.data.description;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          this.isCreated = false;
        }
      });
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/self",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.company = response.data.data;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          this.hasCompany = false;
        }
      });
  },
};
</script>

<style>
</style>