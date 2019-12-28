<template>
  <view class="w">
    <view class="wrapper">
      <van-search
        hape="round"
        placeholder="音乐/视频/电台/用户"
        disabled="false"
        @tap="toSearch"
      ></van-search>
      <!-- 推荐歌单 -->
      <view class="popsongs">
        <my-title :title="title.popsongs"></my-title>
        <my-popular></my-popular>
      </view>
      <!-- 新碟上架 -->
      <view class="individualization">
        <my-title :title="title.Individualization"></my-title>
        <my-song></my-song>
      </view>
      <!-- 热门推荐 -->
      <view class="hot_music">
        <my-title :title="title.every"></my-title>
        <my-recommended></my-recommended>
      </view>
      <!-- 榜单 -->
      <view class="music_list">
        <my-title :title="title.musiclist"></my-title>
        <!-- 飙升榜 -->
        <view class="soar">
          <!-- 左侧图片 -->
          <view class="soar_img">
            <image src="../../static/index/biaosheng.jpg"></image>
          </view>
          <!-- 右侧内容 -->
          <view class="coar_text">
            <text class="coar_text_title">云音乐飙升榜></text>
            <text v-for="item in topList.soarList" :key="item.id"
              >{{ item.ar[0].name }}-{{ item.name }}</text
            >
          </view>
        </view>
        <!-- 新歌榜 -->
        <view class="soar">
          <!-- 左侧图片 -->
          <view class="soar_img">
            <image src="../../static/index/xinge.jpg"></image>
          </view>
          <!-- 右侧内容 -->
          <view class="coar_text">
            <text class="coar_text_title">云音乐新歌榜></text>
            <text v-for="item in topList.newSongList" :key="item.id"
              >{{ item.ar[0].name }}-{{ item.name }}</text
            >
          </view>
        </view>
        <!-- 原创榜 -->
        <view class="soar">
          <!-- 左侧图片 -->
          <view class="soar_img">
            <image src="../../static/index/yuanchuang.jpg"></image>
          </view>
          <!-- 右侧内容 -->
          <view class="coar_text">
            <text class="coar_text_title">网易原创歌曲榜></text>
            <text v-for="item in topList.originalList" :key="item.id"
              >{{ item.ar[0].name }}-{{ item.name }}</text
            >
          </view>
        </view>
      </view>
    </view>
    <!-- tabbar -->
    <my-tab></my-tab>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import VanButton from "@/wxcomponents/dist/button/index"
import VanSearch from "@/wxcomponents/dist/search/index"
import MyTitle from "@/components/mytitle/MyTitle"
import MySong from "@/components/mysong/index"
import MyRecommended from "@/components/myrecommended/index"
import MyPopular from "@/components/mypopular/index"
import MyTab from "@/components/mytabs/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // VanButton,
    VanSearch,
    MyTitle,
    MySong,
    MyRecommended,
    MyPopular,
    MyTab
  },
  data() {
    //这里存放数据
    return {
      title: {
        every: "推荐电台",
        Individualization: "新碟上架",
        popsongs: "推荐歌单",
        musiclist: "云音乐榜单"
      },
      topList: {
        soarList: [], //飙升榜
        newSongList: [], //新歌榜
        originalList: [] //原创榜
      }
    }
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getsoarList() {
      const res = await this.$http({
        url: "/top/list?idx=3"
      })
      if (res.code === 200) {
        let soarThree = res.playlist.tracks.splice(0, 3)
        // console.log(soarThree);
        this.topList.soarList = soarThree
      }
      // console.log(res)
    },
    async getnewsongList() {
      const res = await this.$http({
        url: "/top/list?idx=0"
      })
      if (res.code === 200) {
        let newSongThree = res.playlist.tracks.splice(0, 3)
        // console.log(newSongThree);
        this.topList.newSongList = newSongThree
      }
      // console.log(res)
    },
    async getoriginaList() {
      const res = await this.$http({
        url: "/top/list?idx=2"
      })
      if (res.code === 200) {
        let originaThree = res.playlist.tracks.splice(0, 3)
        // console.log(originaThree);
        this.topList.originalList = originaThree
      }
      // console.log(res)
    },
    // 跳转至搜索页
    toSearch() {
      uni.navigateTo({
        url: '../search/index'
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getsoarList()
    this.getnewsongList()
    this.getoriginaList()
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  padding: 0 20rpx;
  .music_list {
    margin-bottom: 144rpx;
    .soar {
      display: flex;
      margin-bottom: 10rpx;
      .soar_img {
        flex: 30%;
        height: 220rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .coar_text {
        flex: 70%;
        display: flex;
        flex-direction: column;
        border-bottom: 2rpx solid #f4f4f4;
        margin-left: 15rpx;
        text {
          height: 45rpx;
          font-size: 25rpx;
          color: #666;
          margin-bottom: 10rpx;
        }
        .coar_text_title {
          font-size: 35rpx;
          color: #000;
        }
      }
    }
  }
}
my-tab {
  position: fixed;
  bottom: 0;
  color: #fff;
  width: 100%;
  height: 98rpx;
}
</style>
