<!-- 搜索页 -->
<template>
  <view class="wrapper">
    <input
      v-model="value"
      placeholder="音乐/视频/电台/用户"
      class="v_search"
      @blur="getSearchRes"
      @focus="clearRes"
    />
    <!-- 热搜榜 -->
    <view class="hot_search" v-if="!value">
      <view class="hot_search_title">
        <text>热搜榜</text>
      </view>
      <view
        class="search_item"
        v-for="(item, index) in fiveHotDetailList"
        :key="index"
      >
        <view :class="index > 2 ? 'search_item_l_act' : 'search_item_l'">{{
          index + 1
        }}</view>
        <view class="search_item_r">
          <text class="item_title">{{ item.searchWord }}</text>
          <text class="item_score">{{ item.score }}</text>
          <view class="content"
            ><text class="item_content">{{ item.content }}</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 搜索结果 -->
    <my-detail v-if="value" :resList="searchResultList"></my-detail>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MyDetail from "../../components/mydetail/index"
export default {
  components: {
    MyDetail
  },
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {
      value: "",
      hotDetailList: [], //热搜列表
      fiveHotDetailList: [], //前五热搜
      searchResultList: [] // 搜索结果
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取热搜列表id
    async getHotDetail() {
      const res = await this.$http({
        url: "/search/hot/detail"
      })
      if (res.code === 200) {
        this.hotDetailList = res.data
        this.fiveHotDetailList = this.hotDetailList.slice(0, 5)
      }
    },
    // 控制热搜显示与隐藏
    controlHotShow() {
      this.hotDetailShow = !this.hotDetailShow
    },

    // 获取搜索结果
    async getSearchRes() {
      const res = await this.$http({
        url: `/search?keywords=${this.value}`
      })
      if (res.code === 200) {
        this.searchResultList = res.result.songs
      }
    },
    // 清空搜索结果
    clearRes() {
      this.searchResultList = ""
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getHotDetail()
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.wrapper {
  .v_search {
    width: 90%;
    margin: 20rpx auto;
    height: 76rpx;
    line-height: 76rpx;
    padding-left: 30rpx;
    background-color: #f7f8fa;
    font-size: 14px;
  }
  .hot_search {
    padding: 0 50rpx;
    .hot_search_title {
      height: 80rpx;
      font-size: 25px;
      text {
        font-size: 38rpx;

        color: #717171;
      }
    }
    .search_item {
      display: flex;
      height: 124rpx;
      .search_item_l {
        width: 78rpx;
        height: 92rpx;
        line-height: 92rpx;
        color: #ff3a3a;
        font-size: 44rpx;
      }
      .search_item_l_act {
        width: 78rpx;
        height: 92rpx;
        line-height: 92rpx;
        color: #999;
        font-size: 44rpx;
      }
      .search_item_r {
        margin-left: 15rpx;
        width: 100%;
        .item_title {
          display: inline-block;
          height: 48rpx;
          font-size: 16px;
          font-weight: 700;
          color: #333;
          padding-right: 20rpx;
        }
        .item_score {
          color: #ccc;
          font-size: 22rpx;
        }
      }
      .item_content {
        color: #999;
        font-size: 13px;
      }
    }
  }
}
</style>
