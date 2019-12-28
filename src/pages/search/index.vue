<!-- 搜索页 -->
<template>
  <view class="wrapper">
    <van-search hape="round" placeholder="音乐/视频/电台/用户"></van-search>
    <view class="hot_search">
      <view class="hot_search_title">
        <text>热搜榜</text>
      </view>
      <view class="search_item">
        <view class="search_item_l">1</view>
        <view class="search_item_r">
          <text class="item_title">长生诀</text>
          <text class="item_score">2422532</text>
          <view class="content"
            ><text class="item_content">且看我一键破万法</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VanSearch from "@/wxcomponents/dist/search/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { VanSearch },
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.wrapper {
  .hot_search {
    padding: 0 50rpx;
    .hot_search_title {
      height: 60rpx;
      text {
        font-size: 35rpx;

        color: #717171;
      }
    }
    .search_item {
      display: flex;
      .search_item_l {
        width: 78rpx;
        height: 78rpx;
        line-height: 78rpx;
        color: #ff3a3a;
        font-size: 44rpx;
      }
      .search_item_r {
        width: 100%;
        .item_title {
          font-size: 20px;
          color: #333;
          width: 60rpx;
        }
        .item_score {
          color: #ccc;
        }
      }
      .item_content {
        color: #999;
      }
    }
  }
}
</style>
