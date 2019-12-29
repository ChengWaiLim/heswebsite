<template>
  <div class="business_expert_area">
    <div class="business_tabs_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <ul class="nav" id="myTab" role="tablist">
              <li class="nav-item" v-for="(tab, index) in tabList" v-bind:key="index">
                <a
                  :class="index===0?'nav-link active' : 'nav-link'"
                  :id="index + 'object-tab'"
                  data-toggle="tab"
                  :href="'#' + index + 'object' "
                  role="tab"
                  :aria-controls="index + 'object-tab'"
                  :aria-selected="index===0?'true':'false'"
                >{{tab.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="border_bottom">
        <div class="tab-content" id="myTabContent">
          <div
            v-for="(tab, index) in tabList"
            v-bind:key="index"
            :class="index===0?'tab-pane fade show active' : 'tab-pane fade'"
            :id="index + 'object'"
            role="tabpanel"
            :aria-labelledby="index + 'object-tab'"
          >
            <div class="row align-items-center">
              <div class="col-xl-6 col-md-6">
                <div class="business_info">
                  <div class="icon">
                    <i class="flaticon-first-aid-kit"></i>
                  </div>
                  <h3>{{tab.subTitle}}</h3>
                  <p>{{tab.content}}</p>
                </div>
              </div>
              <div class="col-xl-6 col-md-6">
                <div class="business_thumb">
                  <img src="@/assets/image8.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TabInterface } from "./Interface";
export default Vue.extend({
  name: "tab-area",
  props: {
    tabList: {
      type: Array as () => Array<TabInterface>,
      required: true
    }
  }
});
</script>