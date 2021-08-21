<template>
  <header id="home">
    <!-- Content section Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Chào mừng bạn trở lại</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="content" class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6 col-xs-12">
            <div class="page-login-form box">
              <h3>Đăng Nhập</h3>
              <form @submit.prevent="recruiterLogin" class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      placeholder="Tên tài khoản"
                      v-model="username"
                    />
                  </div>
                  <!-- Show username error -->
                  <div v-if="error_username.length > 0">
                    <ul>
                      <li
                        v-for="item in error_username"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu"
                      v-model="password"
                    />
                  </div>
                  <!-- Check password empty -->
                  <div v-if="error_password.length > 0">
                    <ul>
                      <li
                        v-for="item in error_password"
                        v-bind:key="item"
                        style="color: red"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Duy trì đăng nhập</label
                  >
                </div>
                <div class="mt-1 text-center">
                  <router-link to="/forgot-password"
                    >Quên mật khẩu?</router-link
                  >
                </div>
                <div class="mt-1 text-center">
                  <button
                    @click="recruiterLogin"
                    class="btn btn-common log-btn"
                    type="btn btn-common log-btn"
                  >
                    Đăng Nhập
                  </button>
                </div>
              </form>
              <ul class="form-links">
                <li class="text-center">
                  <router-link to="/recruiter-register"
                    >Bạn chưa có tài khoản?</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section End -->
  </header>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      username: "",
      password: "",
      grant_type: "",
      token: "",
      recruiter: {},
      error_username: [],
      error_password: [],
    };
  },
  methods: {
    async recruiterLogin() {
      if (this.username && this.password) {
        var querystring = require("querystring");
        await axios
          .post(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/token?role=recruiter",
            querystring.stringify({
              username: this.username,
              password: this.password,
              grant_type: "password",
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            const tokenStr = response.data.access_token;
            localStorage.setItem("token", tokenStr);
            localStorage.setItem("userLogin", "recruiter");
            axios
              .get(
                "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/self",
                {
                  headers: {
                    Authorization: `Bearer ${tokenStr}`,
                  },
                }
              )
              .then((response) =>
                localStorage.setItem(
                  "recruiterProfile",
                  JSON.stringify(response.data.data)
                )
              )
              .then(() => {
                const path = `/recruiter-profile`;
                if (this.$route.path !== path) this.$router.push(path);
                window.location.reload();
              });
          })
          .catch((error) => {
            console.log(error.response);
            Swal.fire({
              title: "Đăng nhập thất bại",
              text: "Tên tài khoản hoặc mật khẩu không chính xác",
              icon: "error",
              timer: 1800,
            });
          });
      } else {
        this.error_username = [];
        this.error_password = [];

        if (this.username.length <= 6) {
          this.error_username.push("Tên tài khoản phải từ 6 ký tự trở lên");
        }

        if (this.password.length <= 6) {
          this.error_password.push("Mật khẩu phải từ 6 ký tự trở lên");
        }
      }
    },
  },
};
</script>

<style>
</style>