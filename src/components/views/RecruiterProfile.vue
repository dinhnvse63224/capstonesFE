<template>
  <div id="recruiter-profile">
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
    <div
      v-if="recruiter"
      class="container border-bottom bg-white mt-1 pt-md-3 pt-2"
    >
      <div class="d-flex flex-md-row justify-content-around align-items-center">
        <div class="d-flex flex-md-row align-items-center">
          <div class="p-md-2">
            <img
              v-bind:src="recruiter.image"
              alt=""
              class="rounded-circle"
              id="profile"
            />
          </div>
          <div class="p-md-2 p-1" id="info">
            <h5>{{ recruiter.fullname }}</h5>
          </div>
        </div>
        <div class="rounded p-lg-2 p-1" id="blue-background">
          <div class="d-flex flex-md-row align-items-center">
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">0</p>
              <div class="text-muted" id="count">Tổng tin</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">0</p>
              <div class="text-muted" id="count">Tin đã duyệt</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">0</p>
              <div class="text-muted" id="count">Đang chờ duyệt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content w-100 pt-md-0">
      <div
        class="tab-pane show active"
        id="user"
        role="tabpanel"
        aria-labelledby="user-tab"
      >
        <div class="container rounded-bottom bg-light">
          <div class="row pl-lg-5 pt-md-0 pt-sm-2">
            <div class="col-md-6 py-md-4">
              <div class="d-flex flex-row">
                <router-link to="/recruiter-post-job">
                  <div class="btn border-primary text-primary selected-tab">
                    Đăng tin tìm việc
                  </div>
                </router-link>
              </div>

              <div class="card">
                <div class="card-body">
                  <!-- Orders Table-->
                  <!-- Orders Table-->
                  <div class="col-lg-12 pb-5">
                    <div class="table-responsive">
                      <table class="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Tên công việc</th>
                            <th>Ngày đăng ký</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- <tr>
                            <td>
                              <a
                                class="navi-link"
                                href="#order-details"
                                data-toggle="modal"
                                >Front-end</a
                              >
                            </td>
                            <td>25/07/2021</td>
                          </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 py-md-4">
              <div class="d-flex flex-row">
                <router-link to="/recruiter-edit-profile">
                  <div class="btn border-primary text-primary selected-tab">
                    Chỉnh sửa hồ sơ của bạn
                  </div>
                </router-link>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="col-lg-12">
                    <div class="main-box clearfix">
                      <div class="table-responsive">
                        <table class="table user-list">
                          <thead>
                            <tr>
                              <th><span>Người ứng tuyển</span></th>
                              <th><span>Ngày ứng tuyển</span></th>
                              <th><span>Công việc</span></th>
                              <th><span>Email</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- <tr>
                                        <td>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                            <a href="#" class="user-link">George Clooney</a>
                                            <span class="user-subhead">Member</span>
                                        </td>
                                        <td>
                                            2013/08/12
                                        </td>
                                       <td>
                                            Front end
                                        </td>
                                        <td>
                                            <a href="#">Testbrando.com</a>
                                        </td>
                                        <td style="width: 20%;">
                                            <a href="#" class="table-link">
                                                <span class="fa-stack">
                                                    <button class="fa fa-check-circle" style=" font-size:36px; color: green; border: none"></button>
                                                    
                                                </span>
                                            </a>
                                            <a href="#" class="table-link">
                                                <span class="fa-stack">
                                                    <button class="fa fa-times-circle" style="font-size:36px; color: red; border: none"></button>
                                                </span>
                                            </a>
                                           
                                        </td>
                                    </tr> -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
      recruiter: null,
    };
  },
  methods: {
    async created() {
      const response = await axios.get("https://localhost:44315/recruiter", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      });

      this.recruiter = response.data;
    },
  },
};
</script>

<style>
body {
  background: #eee;
}
.main-container {
  margin-top: 40px;
}
.widget-author {
  margin-bottom: 58px;
}
.author-card {
  position: relative;
  padding-bottom: 48px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.author-card .author-card-cover {
  position: relative;
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.author-card .author-card-cover::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.5;
}
.author-card .author-card-cover > .btn {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0 10px;
}
.author-card .author-card-profile {
  display: table;
  position: relative;
  margin-top: -22px;
  padding-right: 15px;
  padding-bottom: 16px;
  padding-left: 20px;
  z-index: 5;
}
.author-card .author-card-profile .author-card-avatar,
.author-card .author-card-profile .author-card-details {
  display: table-cell;
  vertical-align: middle;
}
.author-card .author-card-profile .author-card-avatar {
  width: 85px;
  border-radius: 50%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.author-card .author-card-profile .author-card-avatar > img {
  display: block;
  width: 100%;
}
.author-card .author-card-profile .author-card-details {
  padding-top: 20px;
  padding-left: 15px;
}
.author-card .author-card-profile .author-card-name {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
}
.author-card .author-card-profile .author-card-position {
  display: block;
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
}
.author-card .author-card-info {
  margin-bottom: 0;
  padding: 0 25px;
  font-size: 13px;
}
.author-card .author-card-social-bar-wrap {
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
}
.author-card .author-card-social-bar-wrap .author-card-social-bar {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);
}
.btn-style-1.btn-white {
  background-color: #fff;
}
.list-group-item i {
  display: inline-block;
  margin-top: -1px;
  margin-right: 8px;
  font-size: 1.2em;
  vertical-align: middle;
}
.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.list-group-item.active:not(.disabled) {
  border-color: #e7e7e7;
  background: #fff;
  color: #ac32e4;
  cursor: default;
  pointer-events: none;
}
.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0;
}

.list-group-flush .list-group-item {
  border-right: 0 !important;
  border-left: 0 !important;
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
a.list-group-item,
.list-group-item-action {
  color: #404040;
  font-weight: 600;
}
.list-group-item {
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid #e7e7e7 !important;
  border-radius: 0 !important;
  color: #404040;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>