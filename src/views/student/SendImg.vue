<template>
<div class="send">
  <el-row>
    <el-col :span="8">
      <!-- <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <template #tip>
    <div class="el-upload__tip">
      只能上传 jpg/png 文件，且不超过 500kb
    </div>
  </template>
</el-upload> -->

      　　　　　　　　　<div class="pdt15 pdb15">
        <div id="preview" class="preview" v-for="(Img, index) in files" :key="index">
          <img src="../../assets/logo.png" alt="叉" class="delimg" @click="delimg(index)">
          <img :src="Img.path" alt="" class="addimg">
        </div>
        <label for="browse" class="browse">
          <input class="hidden" id="browse" type="file" accept="image/*" @change="previewFiles($event)" multiple>
          <img src="../../assets/logo.png" width="100" height="100" alt="照相机">
        </label>
      </div>
    </el-col>
  </el-row>

  <!-- 图片选择校验 -->
  <el-row style="margin-top:20px;margin-bottom:30px">
    <el-col :span="12">
      <el-select size="mini" style="width:600px" v-model="form.filePath" placeholder="==请选择图片所属项目==">
        <el-option v-for="(item,index) in project" :key="index" :label="item.projectName" :value="item.id"></el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-button type="primary" size="mini">确定发布</el-button>
    </el-col>
    <el-col :pull="1" :span="3">
      <el-button type="primary" size="mini">取消发布</el-button>
    </el-col>
  </el-row>
  <project-item>
    <template v-slot:rem>
      <div class="fab">移除</div>
    </template>
  </project-item>
</div>
</template>

<script>
import ProjectItem from '@/components/project/children/ProjectItem'
export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      project: [],
      form: {
        filePath: ''
      },
      files: [],
      rules: {
        roleID: [{
          required: true,
          message: "请选择角色",
          trigger: "blur"
        }],
      }
    };
  },
  created() {
    this.getProjectCate()
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //获取项目分类
    async getProjectCate() {
      const res = await this.$http.get("/getProject")
      //  console.log(res);
      this.project = res.data
    },
    previewFiles(e) {
      let files = e.target.files
      for (let i = 0; i < files.length; i++) {
        if (files[i].size / 1024 / 1024 > 2) { //限制每张上传图片的大小
          alert('第' + (i + 1) + '张图片大于2M,请上传小于2M的图片');
          return;
        }
      }
      // console.log(files[0].size/1024/1024);
      let formData = new FormData();
      formData.append("action", "upresumefile"); //调用它的append()方法来添加字段
      for (let i = 0; i < files.length; i++) {
        formData.append("file[]", files[i]);
      }
      this.$http.post('/API/app/infointerface.ashx', formData)
        .then((res) => {
          if (res.data.Result) {
            console.log(res);
            // this.files = this.files.concat(res.data.Data); //把服务器返回的图片路径获取下来，在页面显示
            // console.log(this.files);
          }
        })
    },
    //删除图片
    delimg(ind) {
      this.files.splice(ind, 1);
    },
  }
}
</script>

<style lang="less" scoped>
.el-form {
  padding: 0;
  text-align: left;
  margin: 0;
}

.fab {
  line-height: 25px;
  font-size: 13px;
  padding: 0 4px 0 4px;
  box-sizing: border-box;
  color: white;
  border: 1px solid gainsboro;
  border-radius: 5px;
  background-color: #A4ADB3;
}
</style>
