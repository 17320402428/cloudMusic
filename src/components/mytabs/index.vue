<!-- tabbar -->
<template>
  <view class="wrapper">
    <view class="zhong">
      <view class="zhong_wra"></view>
    </view>
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
    return {

    }
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
  background-color: #222;
  opacity: 0.9;
  height: 98rpx;
  line-height: 98rpx;
  .zhong {
    float: left;
    width: 25%;
    height: 150rpx;
    background-color: #222;
    cursor: pointer;
    position: relative;
    bottom: 28rpx;
    border-radius: 100% 100% 0 0;
    overflow: hidden;
    .zhong_wra {
      position: absolute;
      top: 13rpx;
      left: 20rpx;
      width: 143rpx;
      height: 120rpx;
      border-radius: 50%;
      border: 2rpx solid red;
    }
  }
}
</style>
