<template>
    <div id="recruiter-post-job">
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
    <!-- Page Header Start -->


    <div class="row justify-content-center round">
        <div class="col-lg-10 col-md-12 ">
            <div class="card shadow-lg card-1">
                <div class="card-body inner-card">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6 col-sm-12">
                            <div class="form-group"><label for="first-name">Tên việc làm*</label><input type="text"
                                    class="form-control" id="Tên công việc" placeholder=""> </div>
                            <div class="form-group"> <label for="inputEmail4">Hình thức*</label> <select
                                    class="form-control">
                                    <option>Full time</option>
                                    <option>Part time</option>

                                </select> </div>
                            <div class="form-group"> <label for="time">Lương*</label> <input type="text"
                                    class="form-control" id="time" placeholder=""> </div>
                            <div class="form-group"><label for="skill">Số người cần tuyển*</label> <input type="text"
                                    class="form-control" id="skill" placeholder=""> </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-12">
                            <div class="form-group"> <label for="last-name">Số điện thoại*</label> <input type="text"
                                    class="form-control" id="last-name" placeholder=""> </div>
                            <div class="form-group"> <label for="phone">Email*</label> <input type="email"
                                    class="form-control" id="email" placeholder=""> </div>
                            <div class="form-group"> <label for="Evaluate Budget">Địa chỉ làm việc*</label> <input
                                    type="text" class="form-control" id="Evaluate Budget" placeholder=""> </div>
                            <div class="form-group"> <label for="inputEmail4">Ngành nghề*</label> <select
                                    class="form-control">
                                    <option>Phục vụ</option>
                                    <option>Bán Hàng</option>
                                    <option>IT</option>
                                </select></div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10 col-12">
                            <div class="form-group"> <label for="exampleFormControlTextarea2">Mô tả công viêc*</label>
                                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2"
                                    rows="5"></textarea></div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10 col-12">
                            <div class="form-group"> <label for="exampleFormControlTextarea2">Yêu cầu công việc*</label>
                                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2"
                                    rows="5"></textarea></div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10 col-12">
                            <div class="form-group"> <label for="exampleFormControlTextarea2">Quyền lợi*</label>
                                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2"
                                    rows="5"></textarea></div>
                            <div class="mb-2 mt-4">
                                <div class="height-100 d-flex justify-content-center align-items-center"> <button
                                        type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"> Đăng tuyển</button>
                                    <!-- Modal -->
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">
                                                    Vui lòng thanh toán</h5> <button type="button" class="btn-close"
                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <ul class="body-desc">
                                                    <li>Bạn vui lòng thanh toán để được đăng tin:</li>
                                                    <li>Số Tài khoản</li>
                                                    <li>Chủ Tài khoản</li>
                                                    <li>Nội dung: Chuyển tiền "tên công việc + tên công ty"</li>
                                                </ul>
                                                <a href="profileRecruiter.html"><button class="btn btn-common log-btn"
                                                        type="btn btn-common log-btn">Xác nhận</button></a>
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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>