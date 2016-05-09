## r-chat

使用react.js, mongodb 和 koa 的一个聊天室应用

## Install
1. cloen项目 git clone https://github.com/Joursion/r-chat.git
2. 进入目录 cd r-chat 
3. 安装依赖 npm install4. 设置参数 setting the mongoose in config/default , router/sendmail.js , qiniu 等.
4. 运行测试 npm run

## 目录
```
├── package.json
├── README.md
└── src
    ├── app.js
    ├── bundle.js
    ├── bundle.js.map
    ├── config.js
    ├── css
    │   └── r-chat.css
    ├── gulpfile.js
    ├── img
    │   ├── favicon1.ico
    │   └── favicon.ico
    ├── index.html  //主页
    ├── js   // react 相关
    │   ├── action.js
    │   ├── components
    │   │   ├── avatar.jsx
    │   │   ├── footer.jsx
    │   │   ├── header.jsx
    │   │   ├── inputBox.jsx
    │   │   ├── messageBox.jsx
    │   │   ├── message.jsx
    │   │   └── user.jsx
    │   ├── default.js
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── about.jsx
    │   │   ├── index.jsx
    │   │   ├── login.jsx
    │   │   ├── register.jsx
    │   │   └── test.jsx
    │   ├── reducer.js
    │   └── store.js
    ├── lib  
    │   ├── message.js
    │   ├── token.js
    │   └── user.js
    ├── models  //mongodb module
    │   ├── index.js
    │   ├── message.js
    │   ├── token.js
    │   └── user.js
    ├── router  // router
    │   ├── app.js
    │   └── src
    │       └── md5.js
    └── webpack.config.js

```