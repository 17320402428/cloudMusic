<!--  -->
<template>
  <view class="title_wraper">
    <text class="title_l">{{title}}</text>
    <text class="title_r">更多></text>
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
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getTest() {
      const data = await this.http({
        url: "/top/playlist/highquality?before=1503639064232&limit=3"
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  // created() {
  //   this.title = "热门歌曲"
  // }
}
</script>
<style lang="less" scoped>
.title_wraper {
  height: 100rpx;
  line-height: 100rpx;
  display: flex;
  justify-content: space-between;
  .title_l {
    font-weight: 700;
    font-size: 40rpx;
  }
  .title_r {
    font-size: 30rpx;
    color: #666;
  }
}
</style>
