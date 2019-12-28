<!-- 登录页 -->
<template>
  <view class="wrapper">
    <view class="header">
      <!-- <text class="header_l">手机号登录</text>
      <text class="header_r iconfont icon-guanbi"></text> -->
    </view>
    <view class="main">
      <view class="main_con">
        <view class="page-section">
          <view class="weui-cells__title">手机号</view>
          <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_input">
              <input
                v-model="user"
                class="weui-input"
                type="number"
                placeholder="请输入手机号"
              />
            </view>
          </view>
        </view>
        <view class="page-section">
          <view class="weui-cells__title">密&nbsp;&nbsp;&nbsp;码</view>
          <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_input">
              <input
                v-model="password"
                class="weui-input last_input"
                password
                type="text"
                placeholder="请输入密码"
              />
            </view>
          </view>
        </view>
        <view class="sub">
          <i @click="login">登录</i>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="footer_con">
        <text>账号密码登录</text>
      </view>
    </view>
  </view>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Toast from "@/wxcomponents/dist/toast/index"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Toast
  },
  data() {
    //这里存放数据
    return {
      user: "", // 用户名
      password: "" //密码
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async login() {
      const res = await this.$http({
        url: "/login/cellphone",
        data: {
          phone: this.user,
          password: this.password
        }
      })
      console.log(res)
      if (res.code === 400) {
        this.Toast.fail("请输入正确的格式")
      } else if (res.code === 501) {
        this.Toast.fail("账号不存在")
      } else if (res.code === 502) {
        this.Toast.fail("密码错误")
      }else if(res.code === 200){
        this.$router.push('../index/index.vue')
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {}
}
</script>
<style lang="less">
//@import url(); 引入公共css类
page {
  background: url("http://codelin.site:8088/uploads/db_login.jpg");
  background-size: 100% 100%;
  color: #4f4f4f;
}
.wrapper {
  width: 80%;
  margin: 648rpx auto 0;
  opacity: 0.6;
  background-color: #fff;
  border-radius: 3%;
  .header {
    background-color: #4f4f4f;
    height: 80rpx;
    line-height: 80rpx;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 10rpx;
    .header_l {
      font-weight: 700;
    }
  }
  .main {
    height: 230rpx;
    .main_con {
      width: 400rpx;
      margin: 20rpx auto;
      .page-section {
        line-height: 65rpx;
        display: flex;
        input {
          height: 65rpx;
          border-bottom: 2rpx solid #666;
        }
        .weui-cells__title {
          width: 130rpx;
        }
      }
      .sub {
        width: 206rpx;
        margin: 21rpx 160rpx;
        i {
          width: 100%;
          display: block;
          height: 52rpx;
          line-height: 52rpx;
          text-align: center;
          border-radius: 10rpx;
          background-color: #4f4f4f;
          color: #fff;
        }
      }
    }
  }
  .footer {
    background-color: #f7f7f7;
    border-top: 2rpx solid #c6c6c6;
    height: 80rpx;
    line-height: 80rpx;
    padding: 0 10rpx;
  }
}
</style>
