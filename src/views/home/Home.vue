<!---  --->
<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">
                <h3>我是主页</h3>
            </div>
        </nav-bar>
        
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
   export default {
     name:"Home",
     components:{
         NavBar
     },
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
.home-nav{
    background-color: var(--color-tint);
}
.home-nav h2 {
    color: white;
}
</style>
