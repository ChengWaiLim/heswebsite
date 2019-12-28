<template>
  <div class="service_area main-background-color">
    <div class="container p-0">
      <div class="row no-gutters">
        <div class="col-xl-4 col-md-4">
          <div class="single_service">
            <div class="icon">
              <i :class="serviceBoxList[0].iconClass"></i>
            </div>
            <h3>{{serviceBoxList[0].title}}</h3>
            <div class="text-wrapper">
              <p>{{serviceBoxList[0].content}}</p>
            </div>
            <div v-show="serviceBoxList[0].button != null">
              <a
                :href="serviceBoxList[0].button.path"
                class="boxed-btn3-white"
              >{{serviceBoxList[0].button.title}}</a>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="single_service main-background-color2">
            <div class="icon">
              <i :class="serviceBoxList[1].iconClass"></i>
            </div>
            <h3>{{serviceBoxList[1].title}}</h3>
            <div class="text-wrapper">
              <p>{{serviceBoxList[1].content}}</p>
            </div>
            <div v-show="serviceBoxList[1].button != null">
              <a
                :href="serviceBoxList[1].button.path"
                class="boxed-btn3-white"
              >{{serviceBoxList[1].button.title}}</a>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="single_service">
            <div class="icon">
              <i :class="serviceBoxList[2].iconClass"></i>
            </div>
            <h3>{{serviceBoxList[2].title}}</h3>
            <div class="text-wrapper">
              <p>{{serviceBoxList[2].content}}</p>
            </div>
            <div v-show="serviceBoxList[2].button != null">
              <a
                :href="serviceBoxList[2].button.path"
                class="boxed-btn3-white"
              >{{serviceBoxList[2].button.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { ServiceBoxInterface } from "./Interface";
export default Vue.extend({
  name: "service-area",
  props: {
    serviceBoxList: {
      type: Array as () => Array<ServiceBoxInterface>,
      required: true
    }
  }
});
</script>
<style  lang="sass" scoped>
.single_service
  .text-wrapper
    height: 40%
</style>

