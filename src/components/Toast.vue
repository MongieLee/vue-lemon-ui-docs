<template>
  <div>
    <h2 class="title">Toast 消息弹窗</h2>
    <h3>常用的消息弹窗</h3>
    <p>上中下三个位置传入了文本的消息弹窗，页面只会同时存在一个消息弹窗，不传关闭参数时，默认1s后自动关闭</p>
    <div class="button-wrapper">
      <l-button @click="showToastTop">上面弹出</l-button>
      <l-button @click="showToastMiddle">中间弹出</l-button>
      <l-button @click="showToastBottom">下面弹出</l-button>
    </div>
    <code-wrapper class="top-margin" v-html="markdown(showPositionContent)"></code-wrapper>
    <hr />

    <p>设置3s后关闭的消息弹窗</p>
    <l-button @click="threeMClose">3秒后自动关闭</l-button>
    <code-wrapper class="top-margin" v-html="markdown(threeMCloseContent)"></code-wrapper>
    <hr />

    <p>不会自动关闭的消息弹窗，需要手动点击关闭按钮</p>
    <l-button @click="unautoClose">不会自动关闭</l-button>
    <code-wrapper class="top-margin" v-html="markdown(unaotuCloseContent)"></code-wrapper>
    <hr />

    <p>设置了关闭按钮文字和点击关闭按钮执行回调函数的消息弹窗</p>
    <l-button @click="callbackToast">关闭时会执行回调函数</l-button>
    <code-wrapper class="top-margin" v-html="markdown(callbackContent)"></code-wrapper>
    <hr />

    <p>消息内容为HTML的消息弹窗</p>
    <l-button @click="htmlToast">消息内容为一段HTML字符串</l-button>
    <code-wrapper class="top-margin" v-html="markdown(htmlContent)"></code-wrapper>

    <l-attribute slotContent="Options"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">message</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">函数接受的第一个参数</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">--</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">object</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">函数接受的第二个参数</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">autoClose，closeButton，enableHtml，position</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">autoClose</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">函数接受的第二个参数的可配置项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Boolean | Number</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">false，true，数值</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">1</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">closeButton</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">函数接受的第二个参数的可配置项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">message为字符串，callback为函数</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          {
          message: "关闭",
          callback: undefined,
          }
        </div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">enableHtml</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">函数接受的第二个参数的可配置项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Boolean</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">false，true</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">false</div>
      </el-col>
    </el-row>
    <hr />
    <div style="height:50px;"></div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      showPositionContent: `
      <l-button @click="showToastTop">上面弹出</l-button>
      <l-button @click="showToastMiddle">中间弹出</l-button>
      <l-button @click="showToastBottom">下面弹出</l-button>

      //Vue实例中的方法
      ${`showToastTop() {
        this.$toast("这是上面的消息弹窗");
      },
      showToastMiddle() {
        this.$toast("这是中间的消息弹窗", {
          position: "middle"
        });
      },
      showToastBottom() {
        this.$toast("这是下面的消息弹窗", {
          position: "bottom"
        });
      }`}
      `,
      threeMCloseContent: `
      <l-button @click="threeMClose">3秒后自动关闭</l-button>

      //Vue实例中的方法
      ${`threeMClose() {
      this.$toast("3秒后自动关闭", {
          autoClose: 3,
          position: "middle"
        });
      }`}
      `,
      unaotuCloseContent: `
    <l-button @click="unautoClose">不会自动关闭</l-button>

    //Vue实例中的方法
    ${`unautoClose() {
    this.$toast("需要点击关闭按钮才会关闭", {
        autoClose: false,
        position: "middle"
      });
    }`}
      `,
      callbackContent: `
    <l-button @click="callbackToast">关闭时会执行回调函数</l-button>

    ${`//Vue实例中的方法
    callbackToast() {
      this.$toast("点击callback按钮会在控制台打印Toast!", {
        autoClose: false,
        closeButton: {
          message: "callback",
          callback() {
            console.log("Toast!");
          }
        },
        position: "middle"
      });
    }`}
    `,
      htmlContent: `
    <l-button @click="htmlToast">消息内容为一段HTML字符串</l-button>

    ${`//Vue实例中的方法
    htmlToast() {
      this.$toast(
        "<i>这是一个用了i标签包裹的<a href='https://www.baidu.com' target='_blank'>超链接</a>，高亮文字可点击跳转</i>",
        {
          autoClose: false,
          position: "middle",
          enableHtml: true
        }
      );
    }`}
    `,
    };
  },
  methods: {
    markdown(md) {
      return marked(md);
    },
    showToastTop() {
      this.$toast("这是上面的消息弹窗");
    },
    showToastMiddle() {
      this.$toast("这是中间的消息弹窗", {
        position: "middle",
      });
    },
    showToastBottom() {
      this.$toast("这是下面的消息弹窗", {
        position: "bottom",
      });
    },
    unautoClose() {
      this.$toast(`需要点击关闭按钮才会关闭`, {
        autoClose: false,
        position: "middle",
      });
    },
    threeMClose() {
      this.$toast(`3秒后自动关闭`, {
        autoClose: 3,
        position: "middle",
      });
    },
    callbackToast() {
      this.$toast(`点击callback按钮会在控制台打印Toast!`, {
        autoClose: false,
        closeButton: {
          message: "callback",
          callback() {
            console.log("Toast!");
          },
        },
        position: "middle",
      });
    },
    htmlToast() {
      this.$toast(
        `<i>这是一个用了i标签包裹的<a href='https://www.baidu.com' target="_blank">超链接</a>，高亮文字可点击跳转</i>`,
        {
          autoClose: false,
          position: "middle",
          enableHtml: true,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.top-margin {
  margin-top: 25px;
}
.button-wrapper button {
  margin-right: 20px;
}
</style>