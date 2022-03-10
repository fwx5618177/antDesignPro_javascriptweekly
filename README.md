# 自建产品-基于`Ant Design Pro`

# 产品的意义

## 产品的定位

1. 满足时间和规划的使用
2. 学习新技术的笔记和在线阅读器

## 功能

2020/03/10 15:10

1. 时间刻度表-任务的添加、提醒和修改
2. 新建任务后,自动分配时间
3. 自动提醒学习新的技术(javascriptWeekly)等

# TODO LIST

- [ ] 时刻表
- [ ] 时间计量

# 0. 使用步骤

- 安装: `npm install`
  - 如果下载失败，请使用阿里的源
- 开启项目: `npm start`
  - `npm run start: umi dev`: 启动本地开发服务器进行项目的开发调试
- 打包: `npm run build`
- 检测代码样式: `npm run lint`
- 自动修复样式错误: `npm run lint:fix`
- 测试代码: `npm test`

# 1. 目录

- 结构

```shell
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

- 规范

```shell
src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── user           // 一系列页面推荐通过小写的单一字母做 group 目录
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码
```

# 附录

- [Ant Design Pro doc](https://pro.ant.design)
- [Ant Design Pro github](https://github.com/ant-design/ant-design-pro)
- [umi generate doc](https://umijs.org/zh-CN/docs/cli#umi-build)
