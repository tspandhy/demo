<template>
    <div class="main">
        为什么不行啊
    </div>
</template>
<script>
export default {
  name:"CreateDemo",
    data(){
        return{

        }
    },
  render(createElement){
    return createElement('el-form-item',{
      props:{
        label:"活动名称"
      }
    },[
      createElement('el-input')
    ])
  }
}
</script>
<style lang="sass" scoped>

</style>>
