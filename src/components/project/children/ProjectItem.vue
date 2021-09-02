<template>
<div class="itemBox">
  <div class="nav" v-if="$route.name=='图片广场'||$route.name=='待评评价'">
    项目：
    <el-radio-group v-model="radio" @change="change()">
      <el-radio :label="1">APP</el-radio>
      <el-radio :label="2">WEB</el-radio>
      <el-radio :label="3">管理后台</el-radio>
    </el-radio-group>
  </div>
  <!-- 团队作品 -->
 <div class="itemlist">
    <div class="item" v-for="(item,index) in imgarr" :key="index">
    <img :src="item.imgPath" alt="">
    <div class="nameBox">
      <div class="teacherName" v-for="(items,index) in user" :key="index" >
        {{items.uploadUserID}}</div>
      <div class="proName">{{item.projectID}}</div>
    </div>
    <div class="time">{{item.uploadTime}}</div>
    <div class="btn">
       <!-- <slot name="fab" class="fab"></slot>
       <slot name="com" class="fab"></slot>
       <slot name="del" class="fab"></slot>
      <slot name="rem" class="fab"></slot> -->
      <div class="fab">点赞 {{item.imgFabTotal}}赞</div>
      <div class="fab">评论 {{item.imgCommentTotal}}条</div>
      <div class="fab delete" @click="deleteClick(item.id)" v-if="$route.name=='我的图片'">删除</div>
       <div class="fab" v-if="$route.name=='发布图片'">移出</div>
    </div>
  </div>
 </div>
</div>
</template>

<script>
export default {
  props:{
    imgarr:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      radio: 1,
      user:[],

    }
  },
  created(){
    this.user=JSON.parse(sessionStorage.getItem("user"))
    console.log(this.$route.name);
    this.getAllUser()
  },
 methods:{
   countUserName(val){
     this.user.map(i=>{
       if(i.id==val){
         return i.realName
       }
     })
   },
    //根据id删除图片
  deleteClick(id){
    console.log(id);
  },
  //选择项目
  change(){
    // console.log(this.radio);
    this.$emit("ridioClick",this.radio)
  },
  //获取所有用户
  getAllUser(){
    this.$http.get('/getAllUser').then(res=>{
      console.log(res);
      this.user=res.data
    })
  }
 }
}
</script>

<style lang="less" scoped>
.nav {
  margin-bottom: 20px;
}
.itemlist{
  // width: 1090px;
  width: calc(100% + 10px);
  display: flex;
  flex-wrap: wrap;
}
.item {
  font-size: 14px;
  width: 180px;
  margin-bottom: 10px;
  margin-right: 30px;
.btn{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .fab{
    line-height: 25px;
    font-size: 13px;
    padding: 0 4px 0 4px;
     box-sizing: border-box;
    color: white;
    border: 1px solid gainsboro;
    border-radius: 5px;
    background-color: #A4ADB3;
  }
  .delete:hover{
    cursor: pointer;
  }
}
  .time {
    line-height: 25px;
  }

  .nameBox {
    display: flex;
    align-items: center;

    .proName {
      margin-left: 20px;
    }
  }

  img {
    height: 250px;
    width: 100%;
  }
}
</style>
