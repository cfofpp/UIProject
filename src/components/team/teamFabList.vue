<template>
  <div class="box">
    <div class="item" v-for="item in 13" :key="item">
      <div class="teamName">某某团队</div>
      <div class="fab">4赞</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right:-10px;
}
.item{
  text-align: center;
  border: 2px solid gainsboro;
  font-size: 15px;
  line-height: 23px;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.box:nth-child(3n){
  margin-right: 0;
}
</style>