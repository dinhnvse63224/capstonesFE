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
                <div class="mt-5 text-center">
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
export default {
  data() {
    return {
      username: "",
      password: "",
      grant_type: "",
      token: "",
      recruiter: {},
    };
  },
  methods: {
    async recruiterLogin() {
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
          localStorage.setItem("token", tokenStr)
          localStorage.setItem("userLogin", "recruiter")
          axios
            .get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/self", {
              headers: {
                Authorization: `Bearer ${tokenStr}`,
              },
              
            })
            .then((response) =>
              localStorage.setItem(
                "recruiterProfile",
                JSON.stringify(response.data.data)
              ),
            )
            .then(() => {
              const path = `/recruiter-profile`;
              if (this.$route.path !== path) this.$router.push(path);
              window.location.reload();
            });
        })
        .catch((error) => {
          window.alert(error);
        });
    },
  },
};
</script>

<style>
</style>