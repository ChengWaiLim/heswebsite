<template>
  <div class="single_department">
    <div class="department_thumb">
      <img :src="data.img" alt />
    </div>
    <div class="department_content">
      <h3>
        <a href="#">{{data.title}}</a>
      </h3>
      <p>{{data.content}}</p>
      <a href="#" class="learn_more">{{data.buttonTitle}}</a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridBoxInterface} from "./Interface";
export default Vue.extend({
  name: "gridbox",
  props: {
    data: {
      type: Object as () => GridBoxInterface
    }
  }
});
</script>