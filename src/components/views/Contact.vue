<template>
  <div id="contact">
      <!-- Contact Section Start -->
    <section id="contact" class="section">      
      <div class="contact-form">
        <div class="container">
          <div class="row contact-form-area">          
            <div class="col-md-12 col-lg-6 col-sm-12">
              <div class="contact-block">
                <h2>Mẫu liên hệ</h2>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Tên của bạn" required data-error="Vui lòng điền tên của bạn">
                        <div class="help-block with-errors"></div>
                      </div>                                 
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Email" id="email" class="form-control" name="name" required data-error="Vui lòng điền email của bạn">
                        <div class="help-block with-errors"></div>
                      </div> 
                    </div>
                     <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" placeholder="Ngành nghề" id="msg_subject" class="form-control" required data-error="Vui lòng điền ngành nghề của bạn">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group"> 
                        <textarea class="form-control" id="message" placeholder="Lời nhắn của bạn" rows="5" data-error="Vui lòng điền lời nhắn của bạn" required></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="submit-button">
                        <button class="btn btn-common" id="submit" type="submit">Gửi tin nhắn</button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div> 
                        <div class="clearfix"></div> 
                      </div>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 col-sm-12">
              <div class="contact-right-area wow fadeIn">
                <h2>Địa chỉ liên lạc</h2>
                <div class="contact-info">
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-map-marker"></i>
                    </div>
                    <p>Chi nhánh chính: quận 9, Hồ Chí Minh <br> Phòng phục vụ khách hàng</p>
                  </div>
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <p><a href="mailto:hello@tom.com">Hỗ trợ khách hàng: info@mail.com Hỗ trợ công nghệ: </a></p>
                    <p><a href="mailto:tomsaulnier@gmail.com">support@mail.com</a></p>
                  </div>
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-phone-handset"></i>
                    </div>
                    <p><a href="#">Số điện thoại của chúng tôi: +880 123 456 789</a></p>
                    <p><a href="#">Số điện thoại hỗ trợ khách hàng: +880 123 456 789</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div id="conatiner-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.416707537486!2d106.69593083196193!3d10.78255664472568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b6ef2e073%3A0xdfd9b8c1dcfae0b!2zMzMgTmd1eeG7hW4gVGjhu4sgTWluaCBLaGFpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1626165580814!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div> 
            </div>
          </div>
        </div>
      </div>   
    </section>
    <!-- Contact Section End -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>