<template>
  <div class="our_department_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center mb-55">
            <h3>Our Departments</h3>
            <p>
              Esteem spirit temper too say adieus who direct esteem.
              <br />It esteems luckily or picture placing drawing.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6 col-lg-4" v-for="(gridBox, index) in gridBoxList" v-bind:key="index">
          <gridbox :data="gridBox"></gridbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Gridbox from "./Gridbox.vue";
import { GridBoxInterface } from "./Interface";
export default Vue.extend({
  name: "gridbox-area",
  components: {
    Gridbox
  },
  props: {
    gridBoxList: {
      type: Array as () => Array<GridBoxInterface>,
      require: true
    },
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
});
</script>