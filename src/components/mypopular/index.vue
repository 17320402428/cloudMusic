<!-- 热门歌单页 -->
<template>
  <view class="hot_misc">
    <navigator v-for="(item, index) in 6" :key="index" class="hot_nav">
      <view class="hot_misc_item">
        <view class="img">
          <image src="../../static/icon/yonghu.png"></image>
          <view class="bottom">
            <text class="b_l iconfont icon-shouting">28万</text>
            <text class="b_r iconfont icon-bofang"></text>
          </view>
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
@font-face {
  font-family: "iconfont";
  src: url("https://at.alicdn.com/t/font_1576018_k1cezob6hw.eot?t=1577282862347"); /* IE9 */
  src: url("https://at.alicdn.com/t/font_1576018_k1cezob6hw.eot?t=1577282862347#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVsAAsAAAAACiAAAAUeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqHNIYKATYCJAMUCwwABCAFhG0HWhugCBFVpIGQfYFtwx5CArWgWN2AEcPkzjnGnIcNTKBAAAAAAEE8vz/6ORdvYTa6iaFsYigQolTBhLyh7Sbw/xJ2CC+9pP5UMkcGE/C/a1pgW2G+74hl0Y59LnRp6F7yr6in2fjJGTW5uU0CWe7gSB8wovb3v7akBKPIHzCQgFpmYQ0QQJD3f44ZL5I2G+Z/b1guWWHRgKMBD6jqKjFK+A4ED+ke4BkuTODdEMCdaDKRanNbV+CKQdgmgPRERQQBV5cJE0MWXLVOyJkGWQEUuKpZ+AKAZf335T/KQg0KqxHu1SjMQkH5B3j2hML/E99yBSgrzwHczgMNZAIGpCvU1VnQZioTjfun0JAPuIqLFHzJs+hn5/9/wiLpi8MVd0qDQeX/44mDoPJETHnawBeyyFYLGlCojkYDGtVPKJkPlVXPcAc8QJIBsgwETaTeoDBolCde1Z+x00TGWFJ20WpcH0WVCcc7QTgrzHEKwxr+zIjnjj0l+mT4VIx5ibp6TRgauY7UaLlNzRXOSrpueh/2AjDSJ1Yj4TFTJO0+npPrMPpEWcHWRQS5OYCg7WPqpLsgdxWJdHiFEw47L6TDVTo4kLY2AHznSCT7SjlPaie12rjaOllbR1lHxdvb2dvH9W/kbO3r48LcLhodKWGug4qLqO0maoq643i+htswITJCGBAeEhNibV2dk6ybqCyKcgmzwpAaIuBp5w8OeDp6OAYI/v5j0tPi4+KYWxdXHyo5eUF1Ffc89xh3P4R3LBAW3dzdIzw9Mjuep7ydfF1TbG1jHBMHPJXXua9esRmNSs2U2EajCwovgqJcvnZAR8TBzU1QPBTX3Byv7HgzFAfF++rB/7pNDjAPIgXwoKVU7xlgNUZ+5wVjaLhzR5GTXUX89NtHDMO4IjnDxARLXqpX/u39v0UFFqAQGqSNpB0SZOC624/ED3kOd6HsVZLiRjT/K5CskOCV3P75JYkZHDcL/pQJRXO+/lenAhb5Kt/Mo7R9APh1DFHU8H+jWMe+P9NKS0atygdvWLd8Sy5WoMCAlKzl9rRMwsskW9lsK78jFZnNqdOZ7YeJi+/HK0zqYCMx/CfxYjGmNNIUvXbvWe0OjGPtU5uSzJECYxWmbh6DqQscPnJXN2neqiZQUgP1z+7oa758Oiv9UeDIscnvWeAVtm+V5CxkTHp9KjeKrHvf8a1DjmONFhMuO7EbTGZMhorAP7QXbTlMKW5O9+mibf6YBOwmZ7bhlEdXrd2rc/Ne0CU39wYPJwsa/G6cfLykEDZaNrGH1yCyAPD3iAMyA512pk9rw0w/LuiK83EdfQYSDGDQ/eqKHKNTz2n18hT46+eukE7tpBKnFp994pRD5isVzHbvVln0dlubDlE54pNNetblwN87eYIUbIdwvYsRFBdRoLlKRBhMJlgessHhqgzcZRid7yFAUCZzA9JdAQhfj6B4uwfN1zPCYN7ACvYPDt/K4K699hU9JKdavcAJcgbJHBT1TkhWbBnVp1zmhgSnVKde8hBVFDbXNrzZEXc8lHEgTuQWogARvIUh3I8b4yELfswprqWI2dH6ugh7ozXqbaGlSsARiGNAYg4olOcIdTJq+X7+FCflDCLEtP3wXuKCSM0ONq3ZSIEYqVyqtm1ZHE1IWxASvEkIPAsM0cEZMeWBLHzVGEehNWmORObIOo0TaVVr9WvsMhYf/x2Fl7Ep0WLEioNz72Sa1xIviJONmPoclZPtqYtlrua5mzcbTo2iulAAAAA=")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1576018_k1cezob6hw.woff?t=1577282862347")
      format("woff"),
    url("https://at.alicdn.com/t/font_1576018_k1cezob6hw.ttf?t=1577282862347")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("https://at.alicdn.com/t/font_1576018_k1cezob6hw.svg?t=1577282862347#iconfont")
      format("svg"); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-yonghu:before {
  content: "\e6cb";
}

.icon-bofang:before {
  content: "\e601";
}

.icon-shouting:before {
  content: "\e61e";
}

.icon-wangyiyunyinleclick:before {
  content: "\e600";
}
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
        position: relative;
        image {
          width: 100%;
          height: 100%;
        }
        .bottom {
          position: absolute;
          width: 150rpx;
          height: 40rpx;
          line-height: 40rpx;
          bottom: 0;
          // opacity: 0.2;
          background-color: rgba(000, 000, 000, 0.2);
          background-position: 0 -537px;
          .b_l {
            float: left;
            font-size: 20rpx;
          }
          .b_r {
            float: right;
            font-size: 20rpx;
          }
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
