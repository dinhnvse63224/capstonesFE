<template>
  <!-- Header Section Start -->
  <header id="home" class="hero-area">
    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
      <div class="container">
        <div class="theme-header clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
            </button>
            <router-link to="" class="navbar-brand"
              ><img src="assets/img/logo.png" />
            </router-link>
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item active">
                <router-link class="nav-link" to="/"> Trang chủ </router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="/all"> Việc làm </router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="/contact">
                  Liên Hệ
                </router-link>
              </li>
              <li
                v-if="studentProfile == '' && profile == ''"
                class="nav-item active"
              >
                <!-- <router-link class="nav-link" to="/login"
                  >Đăng nhập</router-link
                > -->
                <div class="dropdown">
                  <div class="dropbtn">Đăng nhập</div>
                  <div class="dropdown-content">
                    <a href="#" @click.prevent="StudentLogin">
                      <span> Sinh viên </span>
                    </a>
                    <router-link to="/recruiter-login"
                      ><span>Nhà tuyển dụng</span></router-link
                    >
                  </div>
                </div>
              </li>
              <li v-else-if="studentProfile != ''" class="nav-item mx-1">
                <div v-if="studentProfile != ''" class="dropdown">
                  <div class="dropbtn">
                    <img class="avatar" v-bind:src="studentProfile.avatar" />
                  </div>
                  <div class="dropdown-content">
                    <router-link to="/student-profile">Hồ sơ</router-link>
                    <a href="#" @click.prevent="Logout"
                      ><span>Đăng Xuất</span></a
                    >
                  </div>
                </div>
              </li>
              <li v-else-if="profile != ''" class="nav-item mx-1">
                <div class="dropdown">
                  <div class="dropbtn">
                    {{ profile.lastName }}
                  </div>
                  <div class="dropdown-content">
                    <router-link to="/recruiter-profile">Hồ sơ</router-link>
                    <a href="#" @click.prevent="Logout"
                      ><span>Đăng Xuất</span></a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- Header Section End -->
</template>

<script>
import axios from "axios";
import { firebase } from "@firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      changeButton: false,
      isLogin: true,
      profile: "",
      studentProfile: "",
    };
  },
  mounted() {
    if (
      localStorage.getItem("recruiterProfile") &&
      localStorage.getItem("userLogin") === "recruiter"
    ) {
      this.profile = JSON.parse(localStorage.getItem("recruiterProfile"));
    }
    if (
      localStorage.getItem("studentProfile") &&
      localStorage.getItem("userLogin") === "student"
    ) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
  },
  methods: {
    Logout() {
      localStorage.removeItem("recruiterProfile");
      localStorage.removeItem("studentProfile");
      localStorage.removeItem("userLogin");
      localStorage.removeItem("token");
      this.$router.push("/");
      window.location.reload();
    },
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
          this.familyName = res.additionalUserInfo.profile.family_name;
          this.givenName = res.additionalUserInfo.profile.given_name;
          axios
            .post(
              "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/token?role=student",
              querystring.stringify({
                userName: this.email,
                avatar: this.picture,
                name: this.familyName + this.givenName,
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
              localStorage.setItem("userLogin", "student");
              axios
                .get(
                  "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/self",
                  {
                    headers: {
                      Authorization: `Bearer ${tokenStr}`,
                    },
                  }
                )
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
.avatar {
  width: 50px;
  height: 50px;
  clip-path: circle(25px at 50% 50%);
}
</style>