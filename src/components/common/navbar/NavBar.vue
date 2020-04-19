<!---  --->
<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
   export default {
       name:"NavBar",
      data() {
          return {

          }
      },
      methods: {


      },
      //生命周期 - 创建完成
     created(){ 
       
     },

     //DOM挂载完毕
     mounted() {

     }
 }
</script>
<style  scoped>
.nav-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    height: 44px;
    line-height: 44px;

}
.left ,.right{
    width: 60px;
   
}
.center{
    text-align: center;
    flex: 1;
}
</style>
