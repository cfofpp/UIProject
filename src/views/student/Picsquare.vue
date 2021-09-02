<template>
  <div class="Pictures">
    <!-- 团队图片点赞 -->
    <team-fab-list/>
    <!-- 项目分类 -->
    <project-list />
  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList'
import teamFabList from '@/components/team/teamFabList'
export default {
  components:{teamFabList,ProjectList},
  data(){
    return{
      imgArr:[]
    }
  },
  created(){
    // this.getImageByProject(1)
  },
  methods:{
    // getImageByProject(id){
    //   this.$http.get(`/getImageByPro?id=${id}`).then(res=>{
    //     console.log(res);
    //     this.imgArr=res.data
    //   })
    // }
  }
}
</script>

<style scoped>

</style>