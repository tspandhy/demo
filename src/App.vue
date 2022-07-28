<template>
  <div id="app">
    <!-- 有下级路由就用这个 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 2.注册组件

export default {
  name: "App",
  components: {},
  // es6的简写方式 本来users:Users 简写就是上方的形式 使用时用的是users 属性名
  // 有-的等特殊符号符号需要用""引起来 用时也是直接用 不用引号
  data() {
    // 只能父组件传值给子组件
    return {
      component: "menu",
    };
  },
  methods: {},
};
</script>

<style>
</style>
