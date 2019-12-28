<!-- 新碟上架页 -->
<template>
  <view class="hot_misc">
    <navigator v-for="item in newdishList" :key="item.id" class="hot_nav">
      <view class="hot_misc_item">
        <view class="img">
          <image :src="item.blurPicUrl"></image>
        </view>
        <view class="text">
          <text class="songName">{{item.name}}</text>
          <text class="songComposer">{{item.artist.name}}</text>
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
    return {
      newdishList:[] // 新碟列表
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getnewdishList(){
      const res = await this.$http({
        url:"/album/newest"
      })
      if(res.code ===200){
        this.newdishList = res.albums.slice(0,6)
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getnewdishList()
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.hot_misc {
  display: flex;
  flex-wrap: wrap;
  .hot_nav {
    flex: 26%;
    .hot_misc_item {
      .img {
        width: 228rpx;
        height: 228rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        height: 90rpx;
        line-height: 41rpx;
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
