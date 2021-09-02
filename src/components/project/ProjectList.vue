<template>
  <div class="list">
    <project-item @ridioClick="changeClick" :imgarr="imgArr">
    </project-item>
  </div>
</template>

<script>
import ProjectItem from '@/components/project/children/ProjectItem'
export default {
  components: { ProjectItem },
// props:{
//   imgarr:{
//     type:Array,
//     default(){
//       return []
//     }
//   }
// },
 data(){
    return{
      imgArr:[]
    }
  },
 created(){
    this.getImageByProject(1)
  },
methods:{
   getImageByProject(id){
      this.$http.get(`/getImageByPro?id=${id}`).then(res=>{
        console.log(res);
        this.imgArr=res.data
      })
    },
  changeClick(i){
    console.log(i);
    // this.$emit("endRequest",i)
    this.getImageByProject(i)
  }
}
}
</script>

<style scoped>
.list{
  margin-top: 20px;
}
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