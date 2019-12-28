<!-- 推荐电台页 -->
<template>
  <view class="hot_misc">
    <navigator v-for="item in radioList" :key="item.id" class="hot_nav">
      <view class="hot_misc_item">
        <view class="img">
          <image :src="item.picUrl"></image>
          <view class="bottom">
            <text class="b_l iconfont icon-shouting"></text>
            <text class="b_r">{{
              item.program.listenerCount | handleNumber
            }}</text>
          </view>
        </view>
        <view class="text">
          <text class="songName">{{ item.name }}</text>
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
      radioList: [] // 新碟列表
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getradioList() {
      const res = await this.$http({
        url: "/personalized/djprogram"
      })
      if (res.code === 200) {
        this.radioList = res.result
      }
      // console.log(res)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getradioList()
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
        position: relative;
        image {
          width: 100%;
          height: 100%;
        }
        .bottom {
          position: absolute;
          width: 100%;
          height: 40rpx;
          line-height: 40rpx;
          bottom: 0;
          // opacity: 0.2;
          background-color: rgba(000, 000, 000, 0.2);
          background-position: 0 -537px;
          color: #fff;
          .b_l {
            float: left;
            font-size: 20rpx;
            margin: 0 10rpx 0 20rpx;
          }
          .b_r {
            float: left;
            font-size: 20rpx;
          }
        }
      }
      .text {
        .songName {
          display: block;
          font-size: 30rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
