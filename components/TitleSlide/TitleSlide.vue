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
import TitleSlideInterface from "./Interface"

export default Vue.extend( {
  props: {
      titleSlide:{
          type: Object as () => TitleSlideInterface,
          required: true,
      }
  }
});
</script>

<style lang="sass" scoped>
.bradcam_overlay:before
    background: linear-gradient(to right, #91e842 0%, #98FB98 24%, rgba(35, 203, 167, 0) 96%, rgba(35, 203, 167, 0) 100%)

</style>
