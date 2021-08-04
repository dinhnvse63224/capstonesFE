<template>
  <div id="recruiter-register">
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
    <form @submit.prevent="recruiterRegister">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /><span class="font-weight-bold"></span>
            <span class="text-black-50"></span><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
               <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Tên tài khoản</label>
                <input type="text" class="form-control" v-model="username" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mật khẩu</label>
                <input type="password" class="form-control" v-model="password" />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Nhập lại mật khẩu</label>
                <input type="password" class="form-control" v-model="confirmPassword" />
              </div>
            </div>            
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Email</label>
                <input type="text" class="form-control" v-model="gmail" />
              </div>
              <div class="col-md-5">
                <label class="labels">Điện thoại</label>
                <input type="text" class="form-control" v-model="phone" />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Họ và tên</label>
                <input type="text" class="form-control" v-model="fullname" />
              </div>
            </div>
           
            <div class="mt-5 text-center">
                <button
                  class="btn btn-common log-btn"
                  type="btn btn-common log-btn"
                >
                  Đăng ký
                </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="row mt-3">
              <div class="col-md-8">
                <label class="labels" for="isCompany">Bạn là</label>
                <select
                  name="poc"
                  id="isCompany"
                  class="form-control"
                  v-model="selected"
                >
                  <option value="personal">Nhà tuyển dụng tư nhân</option>
                  <option value="company">Nhà tuyển dụng doanh nghiệp</option>
                </select>
              </div>
            </div>
            <div v-if="selected === 'company'" id="company">
              <div class="row mt-2">
                <div class="col-md-8">
                  <label class="labels">Tên công ty</label>
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Địa chỉ công ty</label>
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Website của công ty</label>
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "",     
      username: '',
      password: '',
      confirmPassword: '', 
      gmail: '',
      phone: '',
      avatar: '',
      fullname: '',
    };
  },
  methods: {
    async recruiterRegister() {
        await axios.post('https://localhost:44315/recruiter/register', {
            fullname: this.fullname,
            gmail: this.gmail,
            phone: this.phone,
            username: this.username,
            password: this.password,
            confirmPassword: this.confirmPassword,
            avatar: this.avatar
        });

        this.$router.push('/recruiter-login');
    },
  },
};
</script>

<style>
</style>