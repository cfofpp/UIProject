<template>
<div class="mePic">
  <!-- 我的图片列表 -->
  <ProjectItem :imgarr="imgArr" v-if="imgArr.length>0">
    <!-- <template v-slot:fab>
      <div class="fab">点赞 {}赞</div>
    </template>
    <template v-slot:com>
      <div class="fab">点赞 4赞</div>
    </template>
    <template v-slot:rem>
      <div class="fab">删除</div>
    </template> -->
    <!-- <div class="fab">点赞 4赞</div> -->
  </ProjectItem>
</div>
</template>

<script>
import ProjectItem from '@/components/project/children/ProjectItem'
export default {
  components: {
    ProjectItem
  },
  data(){
    return{
      imgArr:[]
    }
  },
  created(){
    
    const user = JSON.parse(sessionStorage.getItem("user"))
    console.log(user);

    this.getMeImg(user.id)
  },
  methods:{
    //获取我的图片
    getMeImg(id){
      this.$http.get(`/getImage?id=${id}`).then(res=>{
        console.log(res);
        this.imgArr=res.data
      })
    }
  }
}
</script>

<style scoped>
.fab {
  box-sizing: border-box;
  line-height: 25px;
  font-size: 13px;
  padding: 0 4px 0 4px;
  color: white;
  border: 1px solid gainsboro;
  border-radius: 5px;
  background-color: #A4ADB3;
}
</style>
