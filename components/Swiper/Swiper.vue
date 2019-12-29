<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slideList" v-bind:key="index" :style="{'background-image':'url('+slide.img+')'}">
          <div class="swiper-box">
            <div class="swiper-title">{{slide.title}}</div>
            <div class="swiper-sub-title">{{slide.subTitle}}</div>
            <a class="swiper-button" href="#">Check Our Service</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from "swiper";
import $ from "jquery";
import SlideInterface from "./Interface"

export default Vue.extend( {
  name:"swiper",
  props: {
    slideList:{
      type: Array as () => Array<SlideInterface>,
      required: true,
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      direction: "horizontal"
    });
  }
});
</script>

<style scoped lang="sass">
@import "swiper/css/swiper.css"
html,
body 
  position: relative
  height: 100%
body 
  background: #eee
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif
  font-size: 14px
  color: #000
  margin: 0
  padding: 0

.swiper-container 
  width: 100%
  height: 100%
  .swiper-slide 
    height: 500px
    text-align: center
    font-size: 18px
    background: #fff
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    /* Center slide text vertically */
    display: -webkit-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
    .swiper-box
      width: 720px
      margin-bottom: 10%
      margin-right: 20%
      text-align: left
      .swiper-sub-title 
        font-size: 18px
        font-weight: 400
        color: #727272
        margin-bottom: 40px
        margin-top: 10px
      .swiper-title 
        color: #1F1F1F
        font-family: "Poppins", sans-serif
        font-size: 70px
        text-transform: capitalize
        letter-spacing: 2px
        font-weight: 300
      .swiper-button
        background-color: #7ee8fa
        background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)
        display: inline-block
        padding: 18px 44px
        font-family: "Poppins", sans-serif
        font-size: 15px
        font-weight: 500
        border: 0
        border: 1px solid transparent
        -webkit-border-radius: 4px
        -moz-border-radius: 4px
        border-radius: 4px
        text-align: center
        color: #666666
        text-transform: capitalize
        -webkit-transition: 0.5s
        -moz-transition: 0.5s
        -o-transition: 0.5s
        transition: 0.5s
        cursor: pointer


</style>