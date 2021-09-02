<template>
<div class="loginPage">
  <!-- 登录的盒子 -->
  <div class="loginBox">
    <div class="title">UI设计交流</div>
    <div class="reg">没有账号？<div @click="RigClick">立即注册</div>
    </div>
    <!-- 表单 -->
    <el-form :model="user" :rules="rules" ref="ruleForm">
      <!-- 用户名 -->
      <el-form-item prop="userName">
        <el-input prefix-icon="el-icon-s-custom" placeholder="请输入用户名..." v-model="user.userName"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="userPwd">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码..." v-model="user.userPwd"></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        userPwd: ""
      },
      rules: {
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
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post('/dologin',this.user).then(res => {
            console.log(res);
            const user = JSON.stringify(res.data.data)
            sessionStorage.setItem("user",user)
            if (res.data.code === 'ok') {
            //   window.sessionStorage.setItem("token", res.data.data.name)
              this.$router.push("/home/picsquare")
            } else {
              this.$message.error("账号或密码不正确。")
            }
          })
        } else {
          this.$message.error("需要先通过验证!");
        }
      });
    },
    RigClick() {
      this.$router.push("/rigister")
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    // box-shadow: 0 15px 20px rgba(0, 0, 0, 0.8);
    .title {
      font-size: 27px;
    }

    .reg {
      display: flex;
      align-items: center;
      font-size: 15px;
      position: absolute;
      right: 18px;
      top: 60px;

      div {
        color: red;
        font-size: 13px;
        text-decoration: underline;
      }

      div:hover {
        cursor: pointer;
      }
    }

    .el-form {
      margin-top: 60px;
      width: 100%;
      padding: 0px 20px;
      text-align: center;
      box-sizing: border-box;

      .el-form-item {
        height: 40px;
      }
    }

  }
}
</style>
