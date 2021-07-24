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
                <div class="p-md-2"> <img
                        src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/156932485_1493884067472965_47667903107371549_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SZubRYGgvqIAX-9y_Kj&_nc_ht=scontent-xsp1-1.xx&oh=2d24c5b7464b1ebecb5dbe98d4995697&oe=60E65790"
                        alt="" class="rounded-circle" id="profile"> </div>
                <div class="p-md-2 p-1" id="info">
                    <h5>Nguyễn Văn Đinh</h5>
                    <div class="text-muted">Quản lý nhân sự</div>
                </div>
            </div>
            <div class="rounded p-lg-2 p-1" id="blue-background">
                <div class="d-flex flex-md-row align-items-center">
                    <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                        <p class="h4">10</p>
                        <div class="text-muted" id="count">Tổng tin</div>
                    </div>
                    <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                        <p class="h4">4</p>
                        <div class="text-muted" id="count">Tin đã duyệt</div>
                    </div>
                    <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                        <p class="h4">6</p>
                        <div class="text-muted" id="count">Đang chờ duyệt</div>
                    </div>
                    <div class="d-flex flex-column align-items-center px-lg-4 px-md-2 px-sm-1 px-2">
                        <p class="h4">43</p>
                        <div class="text-muted" id="count">Số nhân viên</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="tab-content w-100 pt-md-0">
        <div class="tab-pane show active" id="user" role="tabpanel" aria-labelledby="user-tab">
            <div class="container rounded-bottom bg-light">
                <div class="row pl-lg-5 pt-md-0 pt-sm-2">
                    <div class="col-md-6 py-md-4">
                        <div class="d-flex flex-row">
                            <a href="createJob.html">
                                <div class="btn border-primary text-primary selected-tab">Đăng tin tìm việc</div>
                            </a>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Người dùng</th>
                                                <th>Việc Làm</th>
                                                <th>Ứng tuyển</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hitesh Chauhan</td>
                                                <td>Engine</td>
                                                <td class="text-danger"> 18.76% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Samso Palto</td>
                                                <td>Brakes</td>
                                                <td class="text-danger"> 11.06% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>Tiplis mang</td>
                                                <td>Window</td>
                                                <td class="text-danger"> 35.00% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Pter parker</td>
                                                <td>Head light</td>
                                                <td class="text-success"> 22.00% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Ankit Dave</td>
                                                <td>Back light</td>
                                                <td class="text-success"> 28.05% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 py-md-4">
                        <div class="d-flex flex-row">
                            <a href="registerRecruiter.html">
                                <div class="btn border-primary text-primary selected-tab">Chỉnh sửa hồ sơ của bạn</div>
                            </a>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Người dùng</th>
                                                <th>Việc làm</th>
                                                <th>Ứng tuyển</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hitesh Chauhan</td>
                                                <td>Engine</td>
                                                <td class="text-danger"> 18.76% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Samso Palto</td>
                                                <td>Brakes</td>
                                                <td class="text-danger"> 11.06% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>Tiplis mang</td>
                                                <td>Window</td>
                                                <td class="text-danger"> 35.00% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Pter parker</td>
                                                <td>Head light</td>
                                                <td class="text-success"> 22.00% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Ankit Dave</td>
                                                <td>Back light</td>
                                                <td class="text-success"> 28.05% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
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
</template>

<script>
export default {

}
</script>

<style>

</style>