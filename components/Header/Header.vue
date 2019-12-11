<template>
  <header>
    <div class="header-area">
      <div class="header-top_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <div class="social_media_links">
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="short_contact_list">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i> info@docmed.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-phone"></i> 9029 8193
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" class="main-header-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-2">
              <nuxt-link to="/home" class="logo" prefetch>
                
                <img class="logo-photo" src="~/assets/logo.png" alt />
                <p>He's Technology</p>
              </nuxt-link>
            </div>
            <div class="col-xl-6 col-lg-7">
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <nuxt-link to="/home">Home</nuxt-link>
                    </li>
                    <li>
                      <a href="#">
                        Services
                        <i class="ti-angle-down"></i>
                      </a>
                      <ul class="submenu">
                        <li>
                          <nuxt-link to="/services/course">Course</nuxt-link>
                        </li>
                        <li>
                          <a href="single-blog.html">Development</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="active" href="index.html">Teaching Materials</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
              <div class="Appointment">
                <div class="book_btn d-none d-lg-block">
                  <a
                    class="popup-with-form main-background-color"
                    href="#test-form"
                  >Make an Appointment</a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
    props: {}
};
</script>

<style lang="sass" scoped>
@import "@/static/css/bootstrap.min.css"
@import "@/static/css/owl.carousel.min.css"
@import "@/static/css/magnific-popup.css"
@import "@/static/css/font-awesome.min.css"
@import "@/static/css/themify-icons.css"
@import "@/static/css/nice-select.css"
@import "@/static/css/flaticon.css"
@import "@/static/css/gijgo.css"
@import "@/static/css/animate.css"
@import "@/static/css/slicknav.css"
@import "@/static/css/style.css"
@import "@/static/sass/hes-style.sass"

</style>
