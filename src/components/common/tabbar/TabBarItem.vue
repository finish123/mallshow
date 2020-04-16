<!---  --->
<template>
    <div class="tab-bar-item" @click="btnActive">
        <div v-if="!isActive" >
            <slot name="tabbar-icon"></slot>
        </div>
        <div v-else>
             <slot name="tabbar-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="tabbar-text"></slot>
        </div>  
    </div>
</template>

<script>
   export default {
       name:'TabBarItem',
       props :{
           path:String,
           activeColor:{
              type:String,
              default:'red' 
           }
       },
      data() {
          return {
              
          }
      },
      computed: {
          isActive () {
      
             return this.$route.path.indexOf(this.path) !== -1
          },
          activeStyle () {
              return this.isActive ? {color:this.activeColor} : {}
          }
      },
      methods: {
          btnActive () {
              this.$router.replace(this.path).catch( err => err)
          }

      },
      //生命周期 - 创建完成
     created(){ 
       
     },

     //DOM挂载完毕
     mounted() {

     }
 }
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  align-content: center;
  
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

</style>
