<template>
    <div class="welcome_docmed_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="welcome_thumb">
              <div class="thumb_1">
                <img src="@/assets/image1.jpg" alt />
              </div>
              <div class="thumb_2">
                <img src="@/assets/image2.jpg" alt />
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="welcome_docmed_info">
              <h2>{{welcomeBox.subTitle}}</h2>
              <h3>
                {{welcomeBox.title}}
              </h3>
              <p>
                {{welcomeBox.content}}
              </p>
              <ul v-for="(point, index) in welcomeBox.points" v-bind:key="index" >
                <li>
                  <i class="flaticon-right"></i> {{point}}
                </li>
              </ul>
              <div v-show="welcomeBox.button != null">
                <a :href="welcomeBox.button.path" class="boxed-btn3-white-2">{{welcomeBox.button.title}}</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {WelcomeAreaInterface} from './WelcomeAreaInterface'

export default Vue.extend( {
  name:"welcome-area",
  props:{
    welcomeBox:{
        required: true,
        type: Object as () => WelcomeAreaInterface,
    }
  }
});
</script>

<style lang="sass" scoped>
.bradcam_overlay:before
    background: linear-gradient(to right, #91e842 0%, #98FB98 24%, rgba(35, 203, 167, 0) 96%, rgba(35, 203, 167, 0) 100%)

</style>
