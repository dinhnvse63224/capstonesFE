<template>
  <div id="st-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Thông tin</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit="studentRegister">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
          </div>
        </div>
        <div class="col-md-7 border-right">
          <div class="p-3 py-5">
            <div class="row mt-2">
              <div class="col-md-7">
                <label class="labels">Họ</label>
                <input type="text" class="form-control" v-model="firstName" />
              </div>
              <div class="col-md-4">
                <label class="labels">Tên</label>
                <input type="text" class="form-control" v-model="lastName" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-5">
                <label class="labels">Ngày tháng năm sinh</label>
                <input type="date" class="form-control" v-model="dateOfBirth" />
              </div>
              <div class="col-md-3">
                <label class="labels" for="sex">Giới tính</label><br />
                <select name="sex" id="sex" class="form-control">
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Tên đăng nhập</label>
                <input type="text" class="form-control" v-model="username" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="rePassword"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Số điện thoại cá nhân</label>
                <input type="text" class="form-control" v-model="phone" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Gmail</label>
                <input type="text" class="form-control" v-model="mail" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-10">
                <label class="labels">Trường đại học</label>
                <input type="text" class="form-control" v-model="university" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Chuyên ngành</label>
                <input type="text" class="form-control" v-model="major" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8">
                <label class="labels">Kỹ năng</label>
                <textarea
                  class="form-control"
                  placeholder="Liệt kê các kỹ năng của bạn"
                  v-model="skill"
                >
                </textarea>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8">
                <label class="labels">Ngoại ngữ</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Bằng TOEIC, IELTS, N6, N5, N4,..."
                  v-model="language"
                >
                </textarea>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <a href="profileStudent.html">
              <button
                class="btn btn-common log-btn"
                type="btn btn-common log-btn"
              >
                Đăng ký
              </button></a
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      //sex//
      username: "",
      password: "",
      rePassword: "",
      phone: "",
      mail: "",
      university: "",
      major: "",
      skill: "",
      language: "",
    };
  },
  methods: {
    async studentRegister() {
      const data = {
        //call API
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        //sex//
        username: this.username,
        password: this.password,
        rePassword: this.rePassword,
        phone: this.phone,
        mail: this.mail,
        university: this.university,
        major: this.major,
        skill: this.skill,
        language: this.language,
      };
    //   console.log(response);    
    //   this.$router.push('student-login')
    },
  },
};
</script>

<style>
</style>