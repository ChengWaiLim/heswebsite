
<template>
  <section>
    <base-header
      email="s1113618@s.eduhk.hk"
      phone="90298193"
      :navigationButtonList="baseHeader.navigationButtonList"
      :button="baseHeader.button"
    ></base-header>
    <swiper :slideList="slideList"></swiper>
    <service-area :serviceBoxList="serviceAreaList"></service-area>
    <welcome-area :welcomeBox="welcomeArea"></welcome-area>
    <gridbox-area :gridBoxList="gridBoxList"></gridbox-area>
    <tab-area :tabList="tabList"></tab-area>
    <!-- Emergency_contact start -->
    <static-slide-area :slideList="staticSlideList"></static-slide-area>
    <!-- <div class="Emergency_contact">
      <div class="conatiner-fluid p-0">
        <div class="row no-gutters">
          <div class="col-xl-6">
            <div
              class="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue"
            >
              <div class="info">
                <h3>For Any Emergency Contact</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div class="info_button">
                <a href="#" class="boxed-btn3-white">+10 378 4673 467</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue"
            >
              <div class="info">
                <h3>Make an Online Appointment</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div class="info_button">
                <a href="#" class="boxed-btn3-white">Make an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Emergency_contact end -->

    <!-- footer start -->
    <footer class="footer">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-md-6 col-lg-4">
              <div class="footer_widget">
                <div class="footer_logo">
                  <a href="#">
                    <img src="@/assets/Education_Logo.png" alt />
                  </a>
                </div>
                <p>
                  Firmament morning sixth subdue darkness
                  creeping gathered divide.
                </p>
                <div class="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
              <div class="footer_widget">
                <h3 class="footer_title">Departments</h3>
                <ul>
                  <li>
                    <a href="#">Eye Care</a>
                  </li>
                  <li>
                    <a href="#">Skin Care</a>
                  </li>
                  <li>
                    <a href="#">Pathology</a>
                  </li>
                  <li>
                    <a href="#">Medicine</a>
                  </li>
                  <li>
                    <a href="#">Dental</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-lg-2">
              <div class="footer_widget">
                <h3 class="footer_title">Useful Links</h3>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="footer_widget">
                <h3 class="footer_title">Address</h3>
                <p>
                  200, D-block, Green lane USA
                  <br />+10 367 467 8934
                  <br />docmed@contact.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right_text">
        <div class="container">
          <div class="footer_border"></div>
          <div class="row">
            <div class="col-xl-12">
              <p class="copy_right text-center">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;
                <script>
  document.write(new Date().getFullYear());
                </script>All rights reserved | This template is made with
                <i
                  class="fa fa-heart-o"
                  aria-hidden="true"
                ></i> by
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end  -->
    <!-- link that opens popup -->

    <!-- form itself end-->
    <form id="test-form" class="white-popup-block mfp-hide">
      <div class="popup_box">
        <div class="popup_inner">
          <h3>Make an Appointment</h3>
          <form action="#">
            <div class="row">
              <div class="col-xl-6">
                <input id="datepicker" placeholder="Pick date" />
              </div>
              <div class="col-xl-6">
                <input id="datepicker2" placeholder="Suitable time" />
              </div>
              <div class="col-xl-6">
                <select class="form-select wide" id="default-select">
                  <option data-display="Select Department">Department</option>
                  <option value="1">Eye Care</option>
                  <option value="2">Physical Therapy</option>
                  <option value="3">Dental Care</option>
                </select>
              </div>
              <div class="col-xl-6">
                <select class="form-select wide" id="default-select">
                  <option data-display="Doctors">Doctors</option>
                  <option value="1">Mirazul Alom</option>
                  <option value="2">Monzul Alom</option>
                  <option value="3">Azizul Isalm</option>
                </select>
              </div>
              <div class="col-xl-6">
                <input type="text" placeholder="Name" />
              </div>
              <div class="col-xl-6">
                <input type="text" placeholder="Phone no." />
              </div>
              <div class="col-xl-12">
                <input type="email" placeholder="Email" />
              </div>
              <div class="col-xl-12">
                <button type="submit" class="boxed-btn3">Confirm</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { Swiper, SlideInterface } from "@/components/Swiper/index";
import {
  BaseHeader,
  NavigationButtonInterface,
  HeaderButtonInterface
} from "@/components/BaseHeader/index";
import { GridboxArea, GridBoxInterface } from "@/components/GridboxArea/index";
import {
  ServiceArea,
  ServiceBoxInterface,
  ServiceBoxButtonInterface
} from "@/components/ServiceArea/index.ts";
import {
  WelcomeArea,
  WelcomeAreaInterface,
  WelcomeAreaButtonInterface
} from "@/components/WelcomeArea/index.ts";
import { TabArea, TabInterface } from "@/components/TabArea/index.ts";
import {
  StaticSlideArea,
  StaticSlideInterface,
  StaticSlideButtonInterface
} from "@/components/StaticSlideArea/index.ts";
export default {
  components: {
    Swiper,
    BaseHeader,
    ServiceArea,
    WelcomeArea,
    GridboxArea,
    TabArea,
    StaticSlideArea
  },
  data() {
    return {
      baseHeader: {
        navigationButtonList: [
          { title: "Home", path: "/home" },
          { title: "Course", path: "/course" },
          { title: "Teaching Material", path: "/teachingMaterial" },
          { title: "Contact", path: "/contact" }
        ] as NavigationButtonInterface[],
        button: {
          title: "Contact Us",
          path: "#"
        } as HeaderButtonInterface
      },
      slideList: [
        {
          img: require("~/assets/slider3.png"),
          title: "Lorem Ipsum",
          subTitle: "dolor sit amet",
        },
        {
          img: require("~/assets/slider1.png"),
          title: "Lorem Ipsum",
          subTitle: "dolor sit amet"
        }
      ] as SlideInterface[],
      serviceAreaList: [
        {
          iconClass: "el-icon-error",
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          button: {
            title: "Lorem Ipsum",
            path: "#"
          } as ServiceBoxButtonInterface
        },
        {
          iconClass: "el-icon-error",
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          button: {
            title: "Lorem Ipsum",
            path: "#"
          } as ServiceBoxButtonInterface
        },
        {
          iconClass: "el-icon-error",
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          button: {
            title: "Lorem Ipsum",
            path: "#"
          } as ServiceBoxButtonInterface
        }
      ] as ServiceBoxInterface[],
      welcomeArea: {
        subTitle: "Lorem Ipsum",
        title: "Lorem Ipsum",
        content:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        points: ["Lorem Ipsum", "Lorem Ipsum"],
        button: {
          title: "Lorem Ipsum",
          path: "#"
        } as WelcomeAreaButtonInterface
      } as WelcomeAreaInterface,
      gridBoxList: [
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        },
        {
          img: require("@/assets/image1.jpg"),
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
          buttonTitle: "Lorem Ipsum",
          path: "#"
        }
      ] as GridBoxInterface[],
      tabList: [
        {
          title: "Lorem Ipsum",
          img: require("@/assets/image1.jpg"),
          iconClass: "el-icon-error",
          subTitle: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Lorem Ipsum2",
          img: require("@/assets/image1.jpg"),
          iconClass: "el-icon-error",
          subTitle: "Lorem Ipsum2",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Lorem Ipsum3",
          img: require("@/assets/image1.jpg"),
          iconClass: "el-icon-error",
          subTitle: "Lorem Ipsum3",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        }
      ] as TabInterface[],
      staticSlideList: [
        {
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            img: require("@/assets/image1.jpg"),
          button: {
            title: "Lorem Ipsum",
            path: "#"
          } as StaticSlideButtonInterface
        },
                {
          title: "Lorem Ipsum",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            img: require("@/assets/image1.jpg"),
          button: {
            title: "Lorem Ipsum",
            path: "#"
          } as StaticSlideButtonInterface
        }
      ] as StaticSlideInterface[]
    };
  }
};
</script>
<style lang="sass" scoped>
</style>
