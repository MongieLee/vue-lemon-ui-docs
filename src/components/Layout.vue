<template>
  <div>
    <h2 class="title">Layout 网格系统</h2>
    <h3>通过基础的 24 分栏，迅速简便地创建布局。</h3>
    <p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
    <l-row>
      <l-col :span="24" class="bg-color1"></l-col>
    </l-row>

    <l-row>
      <l-col :span="8" class="bg-color1"></l-col>
      <l-col :span="8" class="bg-color2"></l-col>
      <l-col :span="8" class="bg-color3"></l-col>
    </l-row>

    <l-row>
      <l-col :span="2" class="bg-color1"></l-col>
      <l-col :span="20" class="bg-color2"></l-col>
      <l-col :span="2" class="bg-color3"></l-col>
    </l-row>

    <l-row>
      <l-col :span="10" class="bg-color1"></l-col>
      <l-col :span="2" class="bg-color2"></l-col>
      <l-col :span="12" class="bg-color3"></l-col>
    </l-row>

    <l-row>
      <l-col :span="4" class="bg-color1"></l-col>
      <l-col :span="4" class="bg-color2"></l-col>
      <l-col :span="16" class="bg-color3"></l-col>
    </l-row>
    <code-wrapper class="top-margin" v-html="markdown(defaultRowContent)"></code-wrapper>
    <hr />
    <p>分栏之间存在间隔。</p>
    <p>在l-row组件设置gutter属性，会为组件中每个l-col组件增加gutter/2的左右padding值。</p>
    <l-row gutter="20">
      <l-col :span="8" class="bg-color1">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
      <l-col :span="8" class="bg-color2">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
      <l-col :span="8" class="bg-color3">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
    </l-row>
    <l-row>
      <l-col :span="8" class="bg-color1">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
      <l-col :span="8" class="bg-color2">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
      <l-col :span="8" class="bg-color3">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
    </l-row>
    <code-wrapper class="top-margin" v-html="markdown(gutterRowContent)"></code-wrapper>
    <hr />

    <p>设置l-row组件内容的水平对齐方式</p>
    <l-row align="left">
      <l-col :span="20" class="bg-color2"></l-col>
    </l-row>
    <l-row align="center">
      <l-col :span="20" class="bg-color2"></l-col>
    </l-row>
    <l-row align="right">
      <l-col :span="20" class="bg-color2"></l-col>
    </l-row>
    <code-wrapper class="top-margin" v-html="markdown(positionRowContent)"></code-wrapper>

    <hr />
    <p>响应式布局</p>
    <p>l-col没有传入其他属性值时，span属性默认为pc下的布局，可设置phone，ipad，narrow-pc，wide-pc下的网格占比，在不同分辨率下会自适应。</p>
    <p>屏幕宽度576px及以下会采用phone的值。</p>
    <p>屏幕宽度768px及以下会采用ipad的值。</p>
    <p>屏幕宽度992px及以下会采用narrow-pc的值。</p>
    <p>屏幕宽度1200px及以下会采用span的值。</p>
    <p>屏幕宽度1201px及以上会采用wide-pc的值。</p>
    <l-row>
      <l-col
        :span="4"
        class="bg-color2"
        :phone="{span:12}"
        :ipad="{span:10}"
        :narrow-pc="{span:6}"
        :wide-pc="{span:2}"
      ></l-col>
      <l-col
        :span="20"
        class="bg-color3"
        :phone="{span:12}"
        :ipad="{span:14}"
        :narrow-pc="{span:18}"
        :wide-pc="{span:22}"
      ></l-col>
    </l-row>
    <code-wrapper class="top-margin" v-html="markdown(autoRowContent)"></code-wrapper>

    <hr />
    <l-attribute slotContent="Row Attributes"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">gutter</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置col的间隔，可选项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String, Number</div>
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
        <div class="grid-content bg-purple">position</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置row组件的水平对齐方式</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">left，center，right</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <l-attribute slotContent="Col Attributes"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">span</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置默认的网格占比</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object/例：{phone:10}</div>
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
        <div class="grid-content bg-purple">phone</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置&lt;=576px适配的网格占比</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object/例：{phone:10}</div>
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
        <div class="grid-content bg-purple">ipad</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置&lt;=768px适配的网格占比</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object/例：{ipad:10}</div>
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
        <div class="grid-content bg-purple">narrow-pc</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置&lt;=992px的网格占比</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object/例：{narrow-pc:10}</div>
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
        <div class="grid-content bg-purple">wide-pc</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置>=1201px的网格占比</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object/例：{wide-pc:10}</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">--</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
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
      selectedTabs: ["1", "2"],
      singleSelectedTabs: ["2"],
      inputMessage: "这是data里的值",
      defaultRowContent: `
      <l-row>
        <l-col :span="24" class="bg-color1"></l-col>
      </l-row>
      <l-row>
        <l-col :span="8" class="bg-color1"></l-col>
        <l-col :span="8" class="bg-color2"></l-col>
        <l-col :span="8" class="bg-color3"></l-col>
      </l-row>
  
      <l-row>
        <l-col :span="2" class="bg-color1"></l-col>
        <l-col :span="20" class="bg-color2"></l-col>
        <l-col :span="2" class="bg-color3"></l-col>
      </l-row>
  
      <l-row>
        <l-col :span="10" class="bg-color1"></l-col>
        <l-col :span="2" class="bg-color2"></l-col>
        <l-col :span="12" class="bg-color3"></l-col>
      </l-row>
  
      <l-row>
        <l-col :span="4" class="bg-color1"></l-col>
        <l-col :span="4" class="bg-color2"></l-col>
        <l-col :span="16" class="bg-color3"></l-col>
      </l-row>
  
      //style的样式
      .bg-color1 {
        background-color: #99a9bf;
      }
      .bg-color2 {
        background: #d3dce6;
      }
      .bg-color3 {
        background: #e5e9f2;
      }
      .col {
        border-radius: 4px;
        margin-bottom: 10px;
        min-height: 40px;
      }
      `,
      gutterRowContent: `
      <l-row gutter="20">
        <l-col :span="8" class="bg-color1">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
        <l-col :span="8" class="bg-color2">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
        <l-col :span="8" class="bg-color3">设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter设置了gutter</l-col>
      </l-row>
      <l-row>
        <l-col :span="8" class="bg-color1">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
        <l-col :span="8" class="bg-color2">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
        <l-col :span="8" class="bg-color3">没有设置gutter没有设置gutter没有设置gutter没有设置gutter没有设置gutter</l-col>
      </l-row>

      //style的样式
      .bg-color1 {
        background-color: #99a9bf;
      }
      .bg-color2 {
        background: #d3dce6;
      }
      .bg-color3 {
        background: #e5e9f2;
      }
      .col {
        border-radius: 4px;
        margin-bottom: 10px;
        min-height: 40px;
      }
      `,
      selectedTab: "sports",
      autoRowContent: `
      <l-row>
        <l-col :span="4" class="bg-color2" :phone="{span:12}" :ipad="{span:10}" :narrow-pc="{span:6}" :wide-pc="{span:2}"></l-col>
        <l-col :span="20" class="bg-color3" :phone="{span:12}" :ipad="{span:14}" :narrow-pc="{span:18}"  :wide-pc="{span:22}"></l-col>
      </l-row>

      //style的样式
      .bg-color2 {
        background: #d3dce6;
      }
      .bg-color3 {
        background: #e5e9f2;
      }
      .col {
        border-radius: 4px;
        margin-bottom: 10px;
        min-height: 40px;
      }
      `,
      positionRowContent: `
      <l-row align="left">
        <l-col :span="20" class="bg-color2"></l-col>
      </l-row>
      <l-row align="center">
        <l-col :span="20" class="bg-color2"></l-col>
      </l-row>
      <l-row align="right">
        <l-col :span="20" class="bg-color2"></l-col>
      </l-row>

      //style的样式
      .bg-color2 {
        background: #d3dce6;
      }
      .col {
        border-radius: 4px;
        margin-bottom: 10px;
        min-height: 40px;
      }
      `
    };
  },
  methods: {
    markdown(md) {
      return marked(md);
    }
  }
};
</script>

<style lang="scss" scoped>
.top-margin {
  margin-top: 25px;
}
.col-border {
  background-color: #999;
}
.bg-color1 {
  background-color: #99a9bf;
}
.bg-color2 {
  background: #d3dce6;
}
.bg-color3 {
  background: #e5e9f2;
}
.col {
  border-radius: 4px;
  margin-bottom: 10px;
  min-height: 40px;
}
</style>