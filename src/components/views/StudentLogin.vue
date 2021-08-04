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
              <form class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mã OTP"
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
                <router-link to="" class="btn btn-common log-btn"
                  >Đăng Nhập</router-link
                >
                <button @click.prevent="StudentLogin" class="btn btn-common log-btn">
                  Đăng nhập bằng
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#4285F4"
                        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
                      ></path>
                      <path
                        fill="#EA4335"
                        d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
                      ></path>
                    </g>
                  </svg>
                  Google
                </button>
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
import axios from "axios";
import { firebase } from "@firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      id: "",
      picture: "",
      email: "",
    };
  },
  methods: {
    StudentLogin() {
      const firebaseConfig = {
        apiKey: "AIzaSyBDvwlPRvIcHRQuNitJ5s2ypKiYKP_iywk",
        authDomain: "loginfirebase-b1bff.firebaseapp.com",
        projectId: "loginfirebase-b1bff",
        storageBucket: "loginfirebase-b1bff.appspot.com",
        messagingSenderId: "28578870875",
        appId: "1:28578870875:web:eb94c1277416d2e3c0b17e",
        measurementId: "G-QXCPLH7ZY1",
      };
      firebase.initializeApp(firebaseConfig);

      const provider = new firebase.auth.GoogleAuthProvider();
      var querystring = require("querystring");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          this.id = res.additionalUserInfo.profile.id;
          this.picture = res.additionalUserInfo.profile.picture;
          this.email = res.additionalUserInfo.profile.email;          
          axios
            .post(
              "https://localhost:44315/token?role=student",
              querystring.stringify({
                userName: this.email,
                avatar: this.picture,
                grant_type: "password",
                google_id: this.id,
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
              axios
                .get("https://localhost:44315/student/self", {
                  headers: {
                    Authorization: `Bearer ${tokenStr}`,
                  },
                })
                .then((response) =>
                  localStorage.setItem(
                    "studentProfile",
                    JSON.stringify(response.data.data)
                  )
                )
                .then(() => {
                  const path = `/student-profile`;
                  if (this.$route.path !== path) this.$router.push(path);
                  window.location.reload();
                });
            })
            .catch((error) => {
              window.alert(error);
            });
        });
    },
  },
};
</script>

<style>
</style>