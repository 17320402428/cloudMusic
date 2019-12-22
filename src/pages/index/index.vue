<!--  -->
<template>
  <div class="">
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VanButton from "@/wxcomponents/dist/button/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    VanButton
  },
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

</style>