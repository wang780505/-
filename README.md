# 校园论坛微信小程序

一个完整的校园论坛微信小程序项目，基于微信云开发模式，包含首页论坛、二手交易、社交交流、学习资料、个人中心五大模块。

## 项目结构

```
campus-forum/
├── miniprogram/                 # 小程序主目录
│   ├── pages/                   # 页面文件
│   │   ├── login/               # 登录页面
│   │   ├── index/               # 首页论坛
│   │   ├── second/              # 二手交易
│   │   ├── social/              # 社交交流
│   │   ├── study/               # 学习资料
│   │   └── mine/                # 个人中心
│   ├── images/                  # 图标资源（10个TabBar图标）
│   └── utils/                   # 工具类
│       └── util.js
├── cloudfunctions/              # 云函数目录
│   ├── login/                   # 用户登录
│   ├── getPosts/                # 获取帖子列表
│   ├── addPost/                 # 发布帖子
│   ├── deletePost/              # 删除帖子
│   ├── addComment/              # 添加评论
│   ├── getUserInfo/             # 获取用户信息
│   └── updateUserInfo/          # 更新用户信息
├── app.js                       # 小程序入口文件
├── app.json                     # 小程序配置文件
├── app.wxss                     # 全局样式文件
├── project.config.json          # 项目配置文件
├── sitemap.json                 # 站点地图配置
└── README.md                    # 说明文档
```

##  快速开始

### 1. 环境准备

- 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 注册微信小程序账号，获取 AppID
- 开通微信云开发服务

### 2. 导入项目

1. 解压项目压缩包
2. 打开微信开发者工具
3. 选择「导入项目」
4. 选择解压后的 `campus-forum` 文件夹
5. 填写项目名称和 AppID

### 3. 配置修改

#### 3.1 修改 AppID

打开 `project.config.json`，修改 `appid` 字段：

```json
{
  "appid": "your-appid-here"
}
```

#### 3.2 配置云环境 ID

打开 `app.js`，修改云环境 ID：

```javascript
wx.cloud.init({
  env: 'your-env-id-here',  // 替换为你的云环境ID
  traceUser: true,
})
```

### 4. 创建数据库集合

在微信云开发控制台创建以下集合：

- `users` - 用户信息表
- `posts` - 帖子表
- `comments` - 评论表

**建议设置数据库权限为：**
- users: 仅创建者可读写
- posts: 所有人可读，仅创建者可写
- comments: 所有人可读，仅创建者可写

### 5. 部署云函数

1. 在微信开发者工具中，右键点击 `cloudfunctions` 目录
2. 选择「当前环境」，选择你的云环境
3. 分别右键每个云函数文件夹，选择「上传并部署：云端安装依赖」
4. 等待所有云函数部署完成

### 6. 编译运行

点击微信开发者工具的「编译」按钮，项目即可正常运行。

## 功能模块

### 1. 登录页面 (login)
- 微信授权一键登录
- 用户信息自动获取和保存
- 新用户自动注册

### 2. 首页论坛 (index)
- 帖子列表展示
- 分类筛选（全部、热门、校园生活、求助问答、活动通知、兼职招聘）
- 关键词搜索
- 点赞、评论、浏览统计
- 下拉刷新

### 3. 二手交易 (second)
- 二手商品网格展示
- 分类筛选（数码电子、教材书籍、生活用品、服饰鞋包、运动健身）
- 商品搜索
- 发布闲置功能入口

### 4. 社交交流 (social)
- 功能入口：找搭子、脱单墙、兴趣群、线下活动
- 推荐用户展示
- 热门话题排行

### 5. 学习资料 (study)
- 资料分类：公共课、专业课、四六级、考研、考证资料
- 快捷入口：课程资料、历年真题、学霸笔记、教学视频
- 热门资料列表
- 资料上传功能入口

### 6. 个人中心 (mine)
- 用户信息展示
- 数据统计：发帖数、收藏数、获赞数
- 功能菜单：我的发布、我的评论、我的收藏、消息通知、设置、意见反馈、关于我们
- 退出登录

##  云函数说明

### login
- 用户登录/注册
- 自动识别新老用户
- 更新登录时间

### getPosts
- 获取帖子列表
- 支持分类筛选和关键词搜索
- 分页查询

### addPost
- 发布新帖子
- 自动关联用户信息
- 更新用户发帖数

### deletePost
- 删除帖子（软删除）
- 权限验证
- 更新用户发帖数

### addComment
- 添加评论
- 支持回复功能
- 更新帖子评论数

### getUserInfo
- 获取用户详细信息
- 支持查询其他用户信息

### updateUserInfo
- 更新用户个人资料
- 支持昵称、头像、签名、性别、学院、专业等字段

##  技术栈

- **前端框架**: 微信小程序原生开发
- **后端服务**: 微信云开发 (CloudBase)
- **数据库**: 云开发数据库 (NoSQL)
- **存储**: 云开发存储
- **图标**: SVG 矢量图标

##  开发说明

### 新增页面
1. 在 `miniprogram/pages/` 下创建页面文件夹
2. 创建页面的 4 个文件 (.wxml, .wxss, .js, .json)
3. 在 `app.json` 的 `pages` 数组中添加页面路径

### 新增云函数
1. 在 `cloudfunctions/` 下创建云函数文件夹
2. 创建 `index.js` 和 `package.json`
3. 右键云函数文件夹，选择「上传并部署」

### 数据库设计参考

**users 表字段：**
```
- _id: 主键
- openid: 用户openid
- userInfo: 微信用户信息
- nickName: 昵称
- avatarUrl: 头像
- signature: 个性签名
- gender: 性别
- college: 学院
- major: 专业
- postCount: 发帖数
- likeCount: 获赞数
- createTime: 创建时间
- lastLoginTime: 最后登录时间
```

**posts 表字段：**
```
- _id: 主键
- openid: 发布者openid
- title: 标题
- content: 内容
- category: 分类标识
- categoryName: 分类名称
- images: 图片数组
- likeCount: 点赞数
- commentCount: 评论数
- viewCount: 浏览数
- status: 状态(1正常 0删除)
- createTime: 创建时间
- updateTime: 更新时间
```

**comments 表字段：**
```
- _id: 主键
- openid: 评论者openid
- postId: 帖子ID
- content: 评论内容
- replyTo: 回复的评论ID
- replyUser: 回复的用户
- likeCount: 点赞数
- status: 状态
- createTime: 创建时间
```

##  注意事项

1. **云环境ID**：必须替换为自己的云环境ID，否则云函数无法正常工作
2. **AppID**：必须使用自己的小程序AppID，测试号可能无法使用云开发
3. **数据库权限**：请正确设置数据库权限，避免数据安全问题
4. **云函数部署**：所有云函数必须部署后才能正常调用
5. **域名配置**：如需使用外部接口，请在小程序后台配置合法域名

##  版本信息

- **版本号**: v1.0.0
- **基础库版本**: 2.19.4
- **云开发SDK**: wx-server-sdk@2.6.3
- **更新时间**: 2024-01-15
