<template>
  <div id="job-detail">
    <ListJobInfo v-bind:listJob="jobID"/>

    <!-- Featured Section Start -->
    <section id="latest-jobs" class="section bg-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">VIỆC LÀM TƯƠNG TỰ</h2>
        </div>
        <ListSuggestJob v-bind:listJob="listJob" />
      </div>
    </section>
    <!-- Featured Section End -->
  </div>
</template>

<script>
import ListJobInfo from "../Job/ListJobInfo.vue";
import ListSuggestJob from "../Job/ListSuggestJob.vue";
export default {
  data() {
    return {
      listJob: [
        {
          jobID: 1,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 1",
          workingPlace:
            "168 Nguyễn Thị Minh Khai, Phường 6, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
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
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 3",
          workingPlace:
            "68 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 3,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 9",
          workingPlace:
            "120 Lê Văn Việt, Phường Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 4,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 7",
          workingPlace:
            "18 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: true,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 5,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 5",
          workingPlace:
            "57 Mạc Thiên Tích, Phường 8, Quận 5, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
          salaryMin: 3000000,
          salaryMax: 4500000,
          offer: "Trợ cấp đào tạo hàng tháng, lương tháng 13",
          quantity: 10,
          createDate: "11/07/2020",
          type: false,
          image: "assets/img/features/img-1.jpg",
        },
        {
          jobID: 6,
          name: "Bán hàng tại Minishop",
          brand: "Minishop",
          majors: "Bán hàng",
          location: "Quận 11",
          workingPlace:
            "356 Lạc Long Quân, Phường 5, Quận 11, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
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
          workingPlace:
            "158 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
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
          workingPlace:
            "FPT Software Building, Lô T2, đường D1, khu công nghệ cao, Phường Tân Phú, quận Thủ Đức, Thành phố Hồ Chí Minh",
          description:
            "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Fresher trong vòng từ 1- 3 tháng",
          required:
            " - Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
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
          workingPlace:
            "290/26 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Thành phố Hồ Chí Minh",
          description:
            "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required:
            "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
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
          workingPlace:
            "49 Lê Thị Riêng, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng The Coffee House",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
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
          workingPlace:
            "313 Nguyễn Thị Thập, Tân Phú, Quận 7, Thành phố Hồ Chí Minh",
          description: "Nhân viên bán hàng tại cửa hàng Minishop",
          required:
            "Học sinh, sinh viên giao tiếp tốt, thân thiện với khách hàng, cần cù trong công việc",
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
          workingPlace:
            "124 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
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
          workingPlace:
            "124 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
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
          workingPlace:
            "189C Cống Quỳnh, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh",
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
          workingPlace:
            "551 Đường Hậu Giang, Phường 11, Quận 6, Thành phố Hồ Chí Minh",
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
          workingPlace:
            "FPT Software Building, Lô T2, đường D1, khu công nghệ cao, Phường Tân Phú, quận Thủ Đức, Thành phố Hồ Chí Minh",
          description:
            "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required:
            "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
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
          workingPlace:
            "123 Cộng Hòa, Phường 12, Tân Bình, Thành phố Hồ Chí Minh",
          description:
            "Được đào tạo chuyên sâu về ngôn ngữ lập trình, kỹ năng kiểm thử phần mềm (Manual Testing & Automation Testing) với chương trình Intern trong vòng từ 1- 3 tháng",
          required:
            "Là sinh viên sắp ra trường/ mới ra trường có thể đi làm FULL-TIME, học ngành CNTT- ĐTVT- KHMT hoặc các ngành liên quan",
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
          workingPlace:
            "47 Bùi Đình Tuý, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
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
          workingPlace:
            "45 Hoàng Văn Thụ, Phường 15, Phú Nhuận, Thành phố Hồ Chí Minh",
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
  components: {
    ListJobInfo,
    ListSuggestJob,
  },
};
</script>

<style>
</style>