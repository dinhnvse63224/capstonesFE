<template>
  <!-- Header Section Start -->
    <header id="home" class="hero-area">
      <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
      <div class="container">
        <div class="theme-header clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#main-navbar" aria-controls="main-navbar"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
            </button>
            <router-link to="" class="navbar-brand"
              ><img src="assets/img/logo.png"/>
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
                  <router-link class="nav-link" to="/contact"> Liên Hệ </router-link>
              </li>             
              <li class="button-group">
                  <router-link class="button btn btn-common" to="#"> Nhà Tuyển Dụng </router-link>
              </li>
              <li v-if="isLogin" class="nav-item active">
                <router-link class="nav-link" to="/student-login">Đăng nhập</router-link>
                <!-- chưa đẩy ra trang mới, để tạm -->
              </li>
              <li v-else class="nav-item mx-1">
                <div class="dropdown">
                  <div class="dropbtn">ThangPV</div>
                  <div class="dropdown-content">
                    <a href="registerRecruiter.html">Hồ sơ</a>
                    <a href="#">Tin nhắn</a>
                    <a href="login.html">Đăng Xuất</a>
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
      isLogin: true,
      user:
          {
              username: "ThangPV"
          }
    };
  },
  components: {

  }
}
</script>

<style>
    
</style>