<!---  --->
<template>
  <div class="tab-bar">
      <slot></slot> 
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  methods: {},
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {}
};
</script>
<style  scoped>
/* left为0 和 right为0 可以保证元素宽度为100% */
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 14px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.027);
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.014);
}

</style>
