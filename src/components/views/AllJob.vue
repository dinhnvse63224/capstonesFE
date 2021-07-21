<template>
  <div id="alljob">
    <header id="home" class="hero-area">
      <div class="container">
        <div class="row space-100 justify-content-center">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">TÌM KIẾM VIỆC LÀM MƠ ƯỚC</h2>
              <div class="job-search-form">
                <form>
                  <div class="row">
                    <div class="col-lg-5 col-md-6 col-xs-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Tên công ty hoặc việc làm"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(location, district) in locations"
                                v-bind:key="district"
                              >
                                {{ location.district }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-map-marker"></i>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(major, index) in majors"
                                v-bind:key="index"
                              >
                                {{ major.index }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-layers"></i>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-xs-12">
                      <div class="form-group">
                        <div class="search-category-container">
                          <label class="styled-select">
                            <select>
                              <option
                                v-for="(type, index) in types"
                                v-bind:key="index"
                              >
                                {{ type.index }}
                              </option>
                            </select>
                          </label>
                        </div>
                        <i class="lni-layers"></i>
                      </div>
                    </div>
                    <div class="col-lg-1 col-md-6 col-xs-12">
                      <button type="submit" class="button">
                        <i class="lni-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="latest-jobs" class="section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div>
              <h2>Việc làm full time</h2>
            </div>
            <div class="container">
              <ListFullTimeJob v-bind:listJob="listJob" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div>
              <h2>Việc làm part time</h2>
            </div>
            <div class="container">
              <ListPartTimeJob v-bind:listJob="listJob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ListPartTimeJob from "../Job/ListPartTimeJob.vue"
import ListFullTimeJob from "../Job/ListFullTimeJob.vue"
export default {
  components: {
    ListPartTimeJob,
    ListFullTimeJob,
  },
  data() {
    return {
      majors: [
        {
          index: "Ngành nghề",
        },
        {
          index: "Bán hàng",
        },
        {
          index: "IT",
        },
        {
          index: "Gia sư",
        },
        {
          index: "Phục vụ",
        },
        {
          index: "Sửa chữa",
        },
      ],
      locations: [
        {
          district: "Khu vực",
        },
        {
          district: "Quận 1",
        },
        {
          district: "Quận 2",
        },
        {
          district: "Quận 3",
        },
        {
          district: "Quận 4",
        },
        {
          district: "Quận 5",
        },
        {
          district: "Quận 6",
        },
        {
          district: "Quận 7",
        },
        {
          district: "Quận 8",
        },
        {
          district: "Quận 9",
        },
        {
          district: "Quận 10",
        },
        {
          district: "Quận 11",
        },
        {
          district: "Quận 12",
        },
        {
          district: "Quận Bình Tân",
        },
        {
          district: "Quận Bình Thạnh",
        },
        {
          district: "Quận Gò Vấp",
        },
        {
          district: "Quận Phú Nhuận",
        },
        {
          district: "Quận Tân Bình",
        },
        {
          district: "Quận Tân Phú",
        },
        {
          district: "Quận Thủ Đức",
        },
      ],
      types: [
        {
          index: "Hình thức",
        },
        {
          index: "Full time",
        },
        {
          index: "Part time",
        },
      ],
      listJob: [
        {
          jobID: 1,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 1",
          workingPlace: "168 Nguyễn Đình Chiểu, Phường 6, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 2,
          name: "Bán hàng tại Circle K",
          brand: "Circle K",
          majors: "Bán hàng",
          location: "Quận 3",
          workingPlace: "68 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/7.png",
        },
        {
          jobID: 3,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 9",
          workingPlace: "120 Lê Văn Việt, Phường Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 7,
          name: "Bán hàng tại Circle K",
          brand: "Circle K",
          majors: "Bán hàng",
          location: "Quận 7",
          workingPlace: "158 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/7.png",
        },
        {
          jobID: 8,
          name: "Lập Trình Viên Ngôn Ngữ Java",
          brand: "FPT Software",
          majors: "IT",
          location: "Quận 9",
          workingPlace: "FPT Software Building, Lô T2, đường D1, khu công nghệ cao, Phường Tân Phú, quận Thủ Đức, Thành phố Hồ Chí Minh",
          description: "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Fresher trong vòng từ 1- 3 tháng",
          required: " - Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/fpt.jpg",
        },
        {
          jobID: 9,
          name: "Lập Trình Viên Ngôn Ngữ C#/.net",
          brand: "KMS Technology",
          majors: "IT",
          location: "Quận 3",
          workingPlace: "290/26 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Thành phố Hồ Chí Minh",
          description: "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required: "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
          salaryMin: 4500000,
          salaryMax: 6000000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/kms.png",
        },
        {
          jobID: 10,
          name: "Phục vụ tại The Coffee House",
          brand: "The Coffee House",
          majors: "Phục vụ",
          location: "Quận 1",
          workingPlace: "49 Lê Thị Riêng, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng The Coffee House",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/coffee.jpg",
        },
        {
          jobID: 11,
          name: "Phục vụ tại The Coffee House",
          brand: "The Coffee House",
          majors: "Phục vụ",
          location: "Quận 3",
          workingPlace: "313 Nguyễn Thị Thập, Tân Phú, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required: "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/coffee.jpg",
        },
        {
          jobID: 12,
          name: "Gia sư tại nhà",
          brand: "Tư Nhân",
          majors: "Gia sư",
          location: "Quận 7",
          workingPlace: "124 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Gia sư tại nhà",
          required: "Sinh viên có thành tích học tập tốt các môn tự nhiên",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/gs.png",
        },
        {
          jobID: 13,
          name: "Gia sư tại nhà",
          brand: "Tư Nhân",
          majors: "Gia sư",
          location: "Quận 7",
          workingPlace: "124 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Gia sư tại nhà",
          required: "Sinh viên có thành tích học tập tốt các môn xã hội",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/gs.png",
        },
        {
          jobID: 14,
          name: "Sửa chữa căn hộ",
          brand: "Tiến Phát",
          majors: "Sửa chữa",
          location: "Quận 1",
          workingPlace: "189C Cống Quỳnh, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên sửa chữa",
          required: "Có kinh nghiệm sửa chữa căn hộ",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/tp.jpg",
        },
        {
          jobID: 15,
          name: "Sửa chữa căn hộ",
          brand: "Tiến Phát",
          majors: "Sửa chữa",
          location: "Quận 6",
          workingPlace: "551 Đường Hậu Giang, Phường 11, Quận 6, Thành phố Hồ Chí Minh",
          description: "Nhân viên sửa chữa",
          required: "Có kinh nghiệm sửa chữa căn hộ",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/tp.jpg",
        },
        {
          jobID: 16,
          name: "Lập Trình Viên Flutter",
          brand: "FPT Software",
          majors: "IT",
          location: "Quận 9",
          workingPlace: "FPT Software Building, Lô T2, đường D1, khu công nghệ cao, Phường Tân Phú, quận Thủ Đức, Thành phố Hồ Chí Minh",
          description: "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required: "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/fpt.jpg",
        },
        {
          jobID: 17,
          name: "Lập Trình Viên Ngôn Ngữ C++",
          brand: "KMS Technology",
          majors: "IT",
          location: "Quận Tân Bình",
          workingPlace: "123 Cộng Hòa, Phường 12, Tân Bình, Thành phố Hồ Chí Minh",
          description: "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required: "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/kms.png",
        },
        {
          jobID: 18,
          name: "Gia sư tại nhà",
          brand: "Tư Nhân",
          majors: "Gia sư",
          location: "Quận Bình Thạnh",
          workingPlace: "47 Bùi Đình Tuý, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
          description: "Gia sư tại nhà",
          required: "Sinh viên có thành tích học tập tốt các môn tự nhiên",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/gs.png",
        },
        {
          jobID: 19,
          name: "Sửa chữa căn hộ",
          brand: "Tiến Phát",
          majors: "Sửa chữa",
          location: "Quận Phú Nhuận",
          workingPlace: "45 Hoàng Văn Thụ, Phường 15, Phú Nhuận, Thành phố Hồ Chí Minh",
          description: "Nhân viên sửa chữa",
          required: "Có kinh nghiệm sửa chữa căn hộ",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/tp.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>