<template>
  <div id="job-in4">

    <!-- Page Header Start -->
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-6 col-xs-12">
                    <div class="breadcrumb-wrapper">
                        <div class="img-wrapper">
                            <img v-bind:src="job.image">
                        </div>
                        <div class="content">
                            <h3 class="product-title"> {{job.name}}</h3>
                            <p class="brand"></p>
                            <div class="tags">
                                <span><i class="lni-map-marker"></i> {{ job.workingPlace }} </span>
                                <span><i class="lni-calendar"></i> {{ job.createDate }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Job Detail Section Start -->
    <section class="job-detail section">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <div class="content-area">
                        <h4>MÔ TẢ CÔNG VIỆC</h4>
                        <p> {{ job.description }} </p>
                        <h5>YÊU CẦU ỨNG VIÊN</h5>
                        <p> {{ job.requirement }} </p>
                        <h5>QUYỀN LỢI ĐƯỢC HƯỞNG</h5>
                        <p> {{ job.offer }} </p>
                        <br>
                        <a href="#" class="btn btn-common">Apply job</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-xs-12">
                    <div class="sideber">
                        <div class="widghet">
                            <h3>THÔNG TIN TUYỂN DỤNG</h3>
                            <li> Mức lương: {{ job.salaryMin }} - {{ job.salaryMax }}</li> <br>
                            <li v-if="job.type"> Hình thức làm việc: Full time</li>
                            <li v-else> Hình thức làm việc: Part time</li><br>
                            <li> Số lượng cần tuyển: {{ job.quantity }}</li> <br>
                            <li> Yêu cầu giới tính: {{ job.sex }} </li> <br>

                        </div>
                        <div class="widghet">
                            <h3>CHIA SẺ VIỆC LÀM TỚI BẠN BÈ</h3>
                            <div class="share-job">

                                <ul class="mt-4 footer-social">
                                    <li><a class="facebook" href="#"><i class="lni-facebook-filled"></i></a></li>
                                    <li><a class="twitter" href="#"><i class="lni-twitter-filled"></i></a></li>
                                    <li><a class="linkedin" href="#"><i class="lni-linkedin-fill"></i></a></li>
                                    <li><a class="google-plus" href="#"><i class="lni-google-plus"></i></a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    props: {
        job: {
            type: Object,
            default: null,
        }
    }
}
</script>

<style>

</style>