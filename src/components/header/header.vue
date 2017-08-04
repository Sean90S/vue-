<template>
  <div id="header-content">
    <div class="header-banan">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-banan">
        <!-- slides -->
        <swiper-slide v-for="picsItem in pics"><img :src="picsItem" alt=""></swiper-slide>
        <!-- 小点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content-image">
      <div class="personal-tailor"><router-link to="/personalTsailor"><img src="../common/img/sirendingzhi.png" alt=""></router-link></div>
      <div class="house-feast"><router-link to="/houseFeast"><img src="../common/img/jiayouyanxi.png" alt=""></router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          loop: true
        },
        pics: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
      this.$http.get('api/carouselFigure').then(function(response){
        response = response.body;
        this.pics = response.data.pics;
      })
    },
    mounted() {

    }
  }
</script>

<style type="text/less" lang="less">
  body {
    width: 100%;
    height: 100%;
    background: #1d1e1f;
  }

  #header-content {
    width: 100%;

  /* 轮播 */
  .header-banan {
    width: 100%;
    height: 500/46.875rem;
    background: red;

    .swiper-banan {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-pagination-bullet {
        border-radius: 0;
        transform:rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg); 	/* Opera */
      }

      .swiper-pagination-bullet-active {
        background: red;
      }
    }

  }

  .content-image {
    width: 100%;
    font-size: 0;
    /*margin-left:30/46.875rem;*/
    margin-top: 60/46.875rem;
    .personal-tailor {
      width: 44.3%;
      height: 600/46.875rem;
      display: inline-block;
      margin-left:30/46.875rem;
      img {
        width: 100%;
        height: 100%;
      }

    }

    .house-feast {
      width: 44.3%;
      height: 600/46.875rem;
      display: inline-block;
      margin-left: 26/46.875rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  }
</style>
