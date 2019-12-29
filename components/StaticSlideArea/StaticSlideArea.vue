<template>
  <div class="Emergency_contact">
    <div class="conatiner-fluid p-0">
      <div class="row no-gutters">
        <div class="col-xl-6" v-for="(slide, index) in slideList" v-bind:key="index">
          <div
            class="single_emergency d-flex align-items-center justify-content-center overlay_skyblue" 
            :style="{'background-image':'url('+slide.img+')'}"
          >
            <div class="info">
              <h3>{{slide.title}}</h3>
              <p>{{slide.content}}</p>
            </div>
            <div class="info_button" v-show="slide.button != null">
              <a :href="slide.button.path" class="boxed-btn3-white">slide.button.title</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { StaticSlideInterface, StaticSlideButtonInterface } from "./Interface";
export default Vue.extend({
  name: "static-slide-area",
  props: {
    slideList: {
      type: Array as () => Array<StaticSlideInterface>,
      required: true
    }
  }
});
</script>
<style scoped lang="sass">
.single_emergency
  padding-left: 25px
  rpadding-right: 25px
</style>
