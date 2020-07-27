# Rc Tutorial

可视柜台Rc项目使用说明

## 特性

- 支持ES7语法
- 支持装饰器
- 支持打包混淆
- 支持单元测试
- 使用webpack-dev-server进行开发调试
- 使用webpack转发解决调试时的跨域问题
- 支持多种模块引用的自动判断

## 使用方法

安装依赖
```bash
cnpm install --registry=http://99.13.31.146:7001
```

启动测试
```bash
cnpm run test
```

启动应用
```bash
cnpm run demo
```

启动打包
```bash
cnpm run build
```

发布至可视柜台私有NPM
```bash
cnpm publish
```
