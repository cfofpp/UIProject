 let formRules={
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
          message: "请输入邮箱",
          trigger: "blur"
      },
      {
          min: 3,
          max: 16,
          message: "长度在 3 到 16 个字符构成。",
          trigger: "blur"
      }
  ],
  teamID: [{
          required: true,
          message: "请输入真实姓名",
          trigger: "blur"
      },
      {
          min: 2,
          max: 10,
          message: "长度在 两 到 十 个字构成。",
          trigger: "blur"
      }
  ],
  realName: [{
      required: true,
      message: "请选择性别",
      trigger: "click"
  }]
}
let addCate={
    goodsDetailName: [{
        required: true,
        message: "请输入分区名",
        trigger: "blur"
    }]
}
export  {formRules,addCate}