<template>
  <div>
    <div class="pdt15 pdb15">
                    <div id="preview" class="preview" v-for="(Img, index) in files" :key="index">
                        <img src="../assets/logo.png" alt="叉" class="delimg" @click="delimg(index)">
                        <img :src="Img.path" alt="" class="addimg">
                    </div>
                    <label for="browse" class="browse">
                        <input class="hidden" id="browse" type="file" accept="image/*" @change="previewFiles($event)" multiple>
                        <img src="../assets/logo.png" width="100" height="100" alt="照相机">
                    </label>
                </div>
  </div>
</template>

<script>
export default {
  methods:{
  //上传图片
        previewFiles(e){
          console.log(e);
            let files = e.target.files
            for (let i = 0; i < files.length; i++) {
               if (files[i].size/1024/1024 > 2) { //限制每张上传图片的大小
                    alert('第'+(i+1)+'张图片大于2M,请上传小于2M的图片');
                    return; 
              }
            }
            // console.log(files[0].size/1024/1024);
            let formData = new FormData();
             formData.append("action","upresumefile");//调用它的append()方法来添加字段
            for (let i = 0; i < files.length; i++) {
                formData.append("file[]",files[i]);
             }
             this.$http.post("/API/app/infointerface.ashx",formData)
            .then((res) => {
              console.log(res);
                 if (res.data.Result) {

                    // console.log(this.files);
                 }
            })
        },
       //删除图片
         delimg(ind){
             this.files.splice(ind, 1);   
        },
  }
}
</script>

<style>

</style>