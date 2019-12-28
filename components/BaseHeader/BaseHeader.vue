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
                      <i class="fa fa-envelope"></i>
                      {{email}}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-phone"></i>
                      {{phone}}
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
                <img class="logo-photo" src="@/assets/Education_Logo.png" alt />
                <p>He's Technology</p>
              </nuxt-link>
            </div>
            <div class="col-xl-6 col-lg-7">
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    
                    <li v-for="(navigateButton, index) in navigationButtonList" v-bind:key="index">
                      <nuxt-link :to="navigateButton.path">{{navigateButton.title}}</nuxt-link>
                    </li>

                      
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
              <div class="Appointment">
                <div class="book_btn d-none d-lg-block" v-show="button != null">
                  
                  <nuxt-link :to="button.path"  class="popup-with-form main-background-color">{{button.title}}</nuxt-link>
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
import {NavigationButtonInterface, HeaderButtonInterface} from "./Interface";
export default {
  name: "base-header",
  props: {
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    navigationButtonList: {
      type: Array as () => Array<NavigationButtonInterface>,
      required: false
    },
    button: {
      type: Object as () => HeaderButtonInterface,
      required: false
    }
  }
};
</script>
