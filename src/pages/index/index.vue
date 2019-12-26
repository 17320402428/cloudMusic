<template>
  <view class="wrapper">
    <van-search shape="round"></van-search>
    <!-- 热门推荐 -->
    <view class="hot_music">
      <my-title :title="every"></my-title>
      <my-song></my-song>
    </view>
    <!-- 个性化推荐 -->
    <view class="individualization">
      <my-title :title="Individualization"></my-title>
      <my-song></my-song>
    </view>
    <!-- 热门歌单 -->
    <view class="popsongs">
      <my-title :title="popsongs"></my-title>
      <my-popular></my-popular>
    </view>
    <!-- 榜单 -->
    <view class="music_list">
      <my-title :title="musiclist"></my-title>
      <!-- 飙升榜 -->
      <view class="soar">
        <!-- 左侧图片 -->
        <view class="soar_img">
          <image src="../../static/index/biaosheng.jpg"></image>
        </view>
        <!-- 右侧内容 -->
        <view class="coar_text">
          <text>云音乐飙升榜<text style="color='#333'">></text></text>
          <text>苏路-带刺的玫瑰</text>
          <text>庄心妍-为情所伤</text>
          <text>孙悦-祝你平安</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VanButton from "@/wxcomponents/dist/button/index"
import VanSearch from "@/wxcomponents/dist/search/index"
import MyTitle from "@/components/mytitle/MyTitle"
import MySong from "@/components/mysong/index"
import MyPopular from "@/components/mypopular/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    VanButton,
    VanSearch,
    MyTitle,
    MySong,
    MyPopular
  },
  data() {
    //这里存放数据
    return {
      every: "每日歌曲",
      Individualization: "个性推荐",
      popsongs: "热门歌单",
      musiclist:"云音乐榜单"
    }
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getRecommended() {
      const data = await this.http({
        url: "/recommend/songs"
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getRecommended()
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  position: absolute;
  width: 100%;
  overflow: hidden;
  .music_list{
    .soar{
      .soar_img{
        width: 220rpx;
        height: 220rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
