<template>
<div class="loginPage">
  <!-- 登录的盒子 -->
  <div class="loginBox">
    <div class="title">注册</div>
    <el-form :model="user" :rules="rules" ref="ruleForm">
      <!-- 用户名 -->
      <el-form-item prop="userName">
        <el-input prefix-icon="el-icon-s-custom" placeholder="请输入用户名..." v-model="user.userName"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="userPwd">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码..." v-model="user.userPwd"></el-input>
      </el-form-item>
      <el-form-item prop="realName">
        <el-input type="text" prefix-icon="el-icon-lock" placeholder="请输入姓名..." v-model="user.realName"></el-input>
      </el-form-item>
      <el-form-item prop="mobile">
        <el-input type="text" prefix-icon="el-icon-lock" placeholder="请输入手机号码..." v-model="user.mobile"></el-input>
      </el-form-item>
      <el-form-item prop="teamID">
        <el-select  v-model="user.teamID" placeholder="==请选择团队==">
          <el-option v-for="(item,index) in teamArr" :key="index" :label="item.teamName" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="classID">
        <el-select  v-model="user.classID" placeholder="==请选择班级==">
          <el-option v-for="(item,index) in classArr" :key="index" :label="item.className" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="roleID">
        <el-select disabled v-model="user.roleID" placeholder="==请选择角色==">
          <el-option v-for="(item,index) in roleArr" :key="index" :label="item.value" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="addSubmitForm('ruleForm')">注册提交</el-button>
        <el-button @click="back('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import reg from '../reg/reg'
export default {
  data() {
    return {
      user: {
        userName: "",
        userPwd: "",
        mobile: "",
        roleID:1,
        teamID:null,
        realName:"",
        classID:null
      },
      roleArr:[
        {
          value:'学生',
          id:1
        }
      ],
      teamArr:[],
      classArr:[],
      rules:{
         userName: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur"
      },
      {
          min: 4,
          max: 15,
          message: "长度在 4 到 15 个字符构成。",
          trigger: "blur"
      }
  ],
  userPwd: [{
          required: true,
          message: "请输入密码",
          trigger: "blur"
      },
      {
          min: 3,
          max: 16,
          message: "长度在 3 到 16 个字符构成。",
          trigger: "blur"
      }
  ],
  mobile: [{
          required: true,
          message: "请输入手机号",
          trigger: "blur"
      },
      {
          min: 3,
          max: 16,
          message: "长度在 3 到 16 个字符构成。",
          trigger: "blur"
      }
  ],
  roleID: [{
          required: true,
          message: "请选择角色",
          trigger: "blur"
      },
      
  ],
  teamID: [{
          required: true,
          message: "请输入真实姓名",
          trigger: "blur"
      }
  ],
   classID: [{
          required: true,
          message: "请输入真实姓名",
          trigger: "blur"
      }
  ],
  realName: [{
      required: true,
      message: "请选择性别",
      trigger: "click"
  }]
      }
     
    };
  },
  created(){
    this.getTeam()
    this.getClass()
  },
  methods: {
    // 提交注册
    //提交添加用户
    addSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("/adduser", this.user).then(res => {
            console.log(res);
            if (res.data.code === 'ok') {
              this.$message.success("添加成功")
              //获取用户列表
             this.$router.push("/login")
            } else {
              this.$message.error("添加失败")
            }
          })
        }
      })
    },
    // 获取所有团队
    async getTeam(){
      const res = await this.$http.get("/getteam")
      // console.log(res);
      this.teamArr=res.data
    },
     // 获取所有班级
    async getClass(){
      const res = await this.$http.get("/allClass")
      // console.log(res);
      this.classArr=res.data
    },
    back(formName) {
      this.$refs[formName].resetFields();
      this.$router.go(-1)
    },
    keyDown(e) {
      //如果是回车则执行登录方法
      if (e.keyCode == 13) {
        this.submitForm('ruleForm');
      }
    }
  },
  mounted() {
    //绑定事件
    window.addEventListener('keydown', this.keyDown);
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyDown, false);
  }
};
</script>

<style lang="less" scoped>
.loginPage {
  height: 100%;
  // background: #2b4b6b;

  .loginBox {
    position: relative;
    width: 460px;
    height: 280px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    // box-shadow: 0 15px 20px rgba(0, 0, 0, 0.8);
    .title {
      font-size: 27px;
    }

    .el-form {
      margin-top: 30px;
      width: 100%;
      padding: 0px 20px;
      text-align: center;
      box-sizing: border-box;

      .el-form-item {
        height: 40px;
        .el-select{
          width: 100%;
        }
      }
    }

  }
}
</style>
