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
    <div class="container border-bottom bg-white mt-1 pt-md-3 pt-2">
      <div class="d-flex flex-md-row justify-content-around align-items-center">
        <div class="d-flex flex-md-row align-items-center">
          <div class="p-md-2">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
              class="rounded-circle"
              id="profile"
            />
          </div>
          <div class="p-md-2 p-1" id="info">
            <h5> {{profile.fullName}} </h5>
          </div>
        </div>
        <div class="rounded p-lg-2 p-1" id="blue-background">
          <div class="d-flex flex-md-row align-items-center">
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4"> {{list.length}}</p>
              <div class="text-muted" id="count">Việc làm đã đăng</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4">  {{countApproveJob()}} </p>
              <div class="text-muted" id="count">Việc làm đã duyệt</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right"
            >
              <p class="h4"> {{countPendingJob()}} </p>
              <div class="text-muted" id="count">Việc làm chờ duyệt</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-lg-5 pt-lg-2 pt-md-1">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              href="#user"
              class="nav-link active"
              id="user-tab"
              data-toggle="tab"
              role="tab"
            >
              Quản lý hồ sơ
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#job"
              class="nav-link"
              id="job-tab"
              data-toggle="tab"
              role="tab"
            >
              Việc làm đã đăng
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#result"
              class="nav-link"
              id="job-applied"
              data-toggle="tab"
              role="tab"
            >
              Danh sách ứng tuyển
            </a>
          </li>
        </ul>

        <!--tab content-->
        <div class="tab-content w-100 pt-md-0">
          <!--userProfile-->
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
                        Đăng việc làm
                      </div>
                    </router-link>
                  </div>
                  <div class="d-flex flex-row">
                    <div class="btn border-primary text-primary selected-tab">
                      <router-link to="/recruiter-edit-profile">
                        Cập nhật thông tin cá nhân</router-link
                      >
                    </div>
                  </div>    
                  <div class="left">
                    <label class="profile-title">Thông tin của bạn</label>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <label class="labels">Họ & tên: {{profile.fullName}}</label>
                      </div>
                      <div class="col-md-8">
                        <label class="labels">Gmail: {{profile.gmail}}</label>
                      </div>
                      <div class="col-md-6">
                        <label class="labels">Điện thoại: {{profile.phone}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Job tab-->
          <div
            class="tab-pane fade"
            id="job"
            role="tabpanel"
            aria-labelledby="job-tab"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div id="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th>Tên công việc</th>
                                  <th>Ngày đăng ký</th>
                                  <th>Trạng thái</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(job, index) in list" v-bind:key="index" v-bind:job="job">
                            <td> {{job.name}} </td>
                            <td> {{job.createDate}} </td>
                            <td v-if="status == 1"> Chưa duyệt </td>
                            <td v-else> Đã duyệt </td>
                          </tr>
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

          <!--Student applied-->
          <div
            class="tab-pane fade"
            id="result"
            role="tabpanel"
            aria-labelledby="job-applied"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div class="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th><span>Người ứng tuyển</span></th>
                                  <th><span>Ngày ứng tuyển</span></th>
                                  <th><span>Công việc</span></th>
                                  <th><span>Email</span></th>
                                </tr>
                              </thead>
                              <tbody>
                                <!-- <tr v-for="(list, index) in list" v-bind:key="index" v-bind:job="job"> -->
                                        <!-- <td>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                            <a href="#" class="user-link">George Clooney</a>
                                            <span class="user-subhead">Member</span>
                                        </td> -->
                                        <!-- <td>
                                            {{list.}}
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
                        <!--end table-responsive-->
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
      profile: "",
      token: "",
      list: [],
      job: {
        type: Object,
        default: null,
      }
    };
  },
  methods: {
    countApproveJob() {
      const count = this.list.filter((obj) => obj.status == 2).length;
      return count;
    },
    countPendingJob() {
      const count = this.list.filter((obj) => obj.status == 1).length;
      return count;
    }
  },
  mounted() {
    if (localStorage.getItem("recruiterProfile")) {
      this.profile = JSON.parse(localStorage.getItem("recruiterProfile"));

    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }

     axios
        .get(
          "https://localhost:44315/job/posted-jobs",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        ).then((response) => {
          this.list = response.data.data;
        }) 
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