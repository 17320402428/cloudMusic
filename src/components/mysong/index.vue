<!-- 公共歌曲页 -->
<template>
  <view class="hot_misc">
    <navigator v-for="(item, index) in 6" :key="index" class="hot_nav">
      <view class="hot_misc_item">
        <view class="img">
          <image src="../../static/icon/yonghu.png"></image>
        </view>
        <view class="text">
          <text class="songName">火红的撒日朗</text>
          <text class="songComposer">要不要买菜</text>
        </view>
      </view>
    </navigator>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
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
.hot_misc {
  height: 450rpx;
  display: flex;
  flex-wrap: wrap;
  .hot_nav {
    flex: 26%;
    .hot_misc_item {
      .img {
        width: 150rpx;
        height: 150rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        .songName {
          display: block;
          font-size: 30rpx;
        }
        .songComposer {
          display: block;
          font-size: 25rpx;
          color: #666;
        }
      }
    }
  }
}
</style>
