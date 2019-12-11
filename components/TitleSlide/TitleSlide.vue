<template>
  <div class="bradcam_area breadcam_bg bradcam_overlay" :style="{'background-image': 'url('+  titleSlide.path + ')' }">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="bradcam_text">
            <h3>{{titleSlide.title}}</h3>
            <p>{{titleSlide.subTitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleSlideData from "./TitleSlideData"

export default Vue.extend( {
  props: {
      titleSlide:{
          type: Object as () => TitleSlideData,
          required: true,
      }
  }
});
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
.bradcam_overlay:before
    background: linear-gradient(to right, #91e842 0%, #98FB98 24%, rgba(35, 203, 167, 0) 96%, rgba(35, 203, 167, 0) 100%)

</style>
