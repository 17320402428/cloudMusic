<!-- 详情页 -->
<template>
  <view class="detail">
    <view class="search_result">
      <view class="result_header">
        <text class="serial">序号</text>
        <text class="title">音乐标题</text>
        <text class="author">歌手</text>
        <text class="album">专辑</text>
      </view>
      <view
        class="result_con"
        v-for="(item, index) in resList"
        :key="item.id"
      >
        <text class="serial">{{ index }}</text>
        <text class="title">{{ item.name }}</text>
        <text class="author">{{ item.artists[0].name }}</text>
        <text class="album">{{ item.album.name }}</text>
      </view>
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
  props:{
    resList:{
      type:Array,
      default:[]
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
.search_result {
  font-size: 28rpx;
  .result_header {
    border-bottom: 2rpx solid #e7e7e8;
    border-top: 2rpx solid #e7e7e8;
    background-color: #fafafa;
    color: #7f746e;
  }
  text {
    height: 78rpx;
    line-height: 78rpx;
    display: inline-block;
    text-align: center;
  }
  .serial {
    border-right: 2rpx solid #e7e7e8;
    width: 10%;
  }
  .title {
    border-right: 2rpx solid #e7e7e8;
    width: 36%;
  }
  .author {
    border-right: 2rpx solid #e7e7e8;
    width: 16%;
  }
  .album {
    width: 36%;
  }
  .duration {
    width: 13%;
  }
  .result_con {
    &:nth-child(even) {
      background-color: #f5f5f7;
    }
    text {
      border: none;
      height: 100%;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
