<template>
  <section>
    <Header></Header>
    <TitleSlide :titleSlide="titleSlide"></TitleSlide>
    <ServiceArea></ServiceArea>

  </section>
</template>
<script lang="ts">
import Header from "~/components/Header/Header.vue";
import TitleSlide from "~/components/TitleSlide/TitleSlide.vue";
import TitleSlideData from "~/components/TitleSlide/TitleSlideData";
import ServiceArea from "~/components/ServiceArea/ServiceArea.vue";
export default {
  components: {
    Header, TitleSlide, ServiceArea
  },
  data(){
      return {
          titleSlide:{
              title: "Courses",
              subTitle: "courses",
              path: require('~/assets/slider3.png')
          } as TitleSlideData
      }
  }
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