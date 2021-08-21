<template>
  <header id="home">
    <!-- Content section Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Bạn quên mật khẩu?</h3>
              <h5 style="text-align: left">
                Lấy lại mật khẩu của bạn với ba bước đơn giản
              </h5>
              <h5 style="text-align: left">
                1. Nhập tên tài khoản và email đã đăng ký.
              </h5>
              <h5 style="text-align: left">
                2. Hệ thống của chúng tôi sẽ gửi cho bạn một đường dẫn vào email
                đã đăng ký của bạn.
              </h5>
              <h5 style="text-align: left">
                3. Sử dụng đường dẫn này để đặt lại mật khẩu của bạn.
              </h5>
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
              <form @submit.prevent="getPassword" class="login-form">
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
                    <i class="lni-email"></i>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      v-model="gmail"
                    />
                  </div>
                </div>
                <div class="mt-1 text-center">
                  <button
                    @click="getPassword"
                    class="btn btn-danger log-btn"
                    width="50%"
                  >
                    Lấy mật khẩu
                  </button>
                  <router-link to="/recruiter-login" class="btn btn-common">
                    Trở lại đăng nhập
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section End -->
  </header>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      gmail: "",
    };
  },
  methods: {
    getPassword() {
      let data = {
        username: this.username,
        gmail: this.gmail,
      };
      axios
        .put(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/forgot-password/verify",
          data
        )
        .then(() => {
            this.$router.push({ path: "reset-password"});
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