<template>
  <div id="app">
    <div id="header">
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/lemon-logo.png" alt="这是个logo" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  min-width: 980px;
  margin: 0;
}
* {
  /* padding: 0;
  margin: 0; */
  box-sizing: border-box;
}
a {
  color: rgb(217, 179, 0);
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
  #header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    z-index: 2;
    background-color: white;
    .logo {
      height: 100%;
      padding: 10px 0 10px 20px;
      img {
        max-height: 100%;
        cursor: pointer;
      }
    }
  }

  h2.title {
    font-weight: 400;
    font-size: 28px;
  }
  h3 {
    font-weight: 400;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .keyword {
    color: #3182bd;
  }
  .path {
    color: #756bb1;
  }
  .retract {
    padding-left: 2em;
  }
}
</style>
