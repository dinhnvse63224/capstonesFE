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
              <li v-if="profile == ''" >
                <router-link class="button btn btn-common" to="/recruiter">
                  Nhà Tuyển Dụng
                </router-link>
              </li>
              <li v-else-if="profile != ''" class="nav-item mx-1">
                <div class="dropdown">
                  <div class="dropbtn">{{ profile.fullName}}</div>
                  <div class="dropdown-content">
                    <router-link to="/recruiter-profile">Hồ sơ</router-link>
                    <a href="#" @click.prevent="Logout"
                      ><span>Đăng Xuất</span></a
                    >
                  </div>
                </div>
              </li>

              <li v-if="studentProfile == ''" class="nav-item active">
                <router-link class="nav-link" to="/student-login"
                  >Đăng nhập</router-link
                >
                <!-- chưa đẩy ra trang mới, để tạm -->
              </li>
              <li v-else-if="studentProfile != ''" class="nav-item mx-1">
                <div class="dropdown">
                  <div class="dropbtn"><img class="avatar" v-bind:src="studentProfile.avatar"/> </div>
                  <div class="dropdown-content">
                    <router-link to="/student-profile">Hồ sơ</router-link>
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
    if (localStorage.getItem("recruiterProfile")) {
      this.profile = JSON.parse(localStorage.getItem("recruiterProfile"));
    }
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
  },
  methods: {
    Logout() {
      localStorage.removeItem("recruiterProfile");
      localStorage.removeItem("studentProfile");
      localStorage.removeItem("token");
      this.$router.push("/");
      window.location.reload();
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