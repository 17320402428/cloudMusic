<!-- 歌单详情页 -->
<template>
  <view class="detail">
    <view class="detail_info">
      <view class="cover">
        <img :src="detailList.coverImgUrl" alt="" />
        <text></text>
      </view>
      <view class="content">
        <view class="header">
          <h2>请你一定不要停下来 成为你想成为的人</h2>
        </view>
        <view class="operation">
          <navigator class="bofang">
            <i class="iconfont icon-bofang"></i>
            <text>播放全部</text>
          </navigator>
        </view>
        <view class="tags">
          <b>标签:</b>
          <text v-for="item in detailList.tags" :key="item">{{ item }}</text>
        </view>
      </view>
    </view>
    <view class="u-title">
      <h3>歌曲列表</h3>
      <view class="more">
        <text>播放:</text>
        <strong class="number">{{ detailList.playCount }}</strong>
        <text>次</text>
      </view>
    </view>
    <my-detail :resList="tracks"></my-detail>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MyDetail from "../../components/mydetail/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    MyDetail
  },
  data() {
    //这里存放数据
    return {
      detailList: [],
      tracks: []
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getPlaylsitDetail() {
      const res = await this.$http({
        url: `/playlist/detail?id=${24381616}`
      })
      if (res.code === 200) {
        this.detailList = res.playlist
        if (this.detailList.tracks.length > 100) {
          this.tracks = this.detailList.tracks.slice(0, 100)
        }else{
          this.tracks = this.detailList.tracks
        }
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getPlaylsitDetail()
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.detail {
  padding: 10px;
  .detail_info {
    display: flex;
    .cover {
      width: 150px;
      height: 150px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      text {
        position: absolute;
        width: 140px;
        height: 158px;
        background: url("http://hkzf.netmusic.vip/static/music/backbgc.png")
          no-repeat;
        background-position: 0 -1285px;
        top: -4px;
        left: -4px;
      }
    }
    .content {
      width: 60%;
      padding-left: 10px;
      .header {
        height: 60px;
        line-height: 60px;
        h2 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 20px;
        }
      }
      .operation {
        height: 40px;
        .bofang {
          width: 108px;
          height: 32px;
          line-height: 32px;
          display: flex;
          justify-content: center;
          background-color: #5aa0e1;
          color: #fff;
          border-radius: 5px;
          i {
            font-size: 22px;
          }
          text {
            margin-left: 4px;
          }
        }
      }
      .tags {
        display: flex;
        height: 25px;
        line-height: 25px;
        text {
          padding: 0 10px;
          font-size: 14px;
          border: 1px solid #dbdbdb;
          border-radius: 26px;
          margin-left: 4px;
        }
      }
    }
  }
  .u-title {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    h3 {
      font-size: 25px;
    }
    .more {
      display: flex;
      .number {
        color: #c20c0c;
        font-weight: bold;
      }
    }
  }
}
</style>
