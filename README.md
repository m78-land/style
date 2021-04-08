# @m78/style
> 一个样式库，包含css变量、normalize、grid、以及常用的sass混合、原子类等，旨在简化css的书写

💥 需要使用支持sass/scss的打包器加载此项目
💥 为了工具类名称简短，很多原子类都直接使用了无前缀的语义化名称，本库假设你会主动避免业务类名和本库中原子类名的冲突
💥 此项目大量使用`css properties`, 用户可根据兼容需求使用[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)进行回退处理

## 安装

```shell
yarn add @m78/style
```

## 全量引入

最简单的方式，自动包含`normalize`、布局模块、原子类、sass变量、混合等

```js
import '@m78/style'; // 包含css-var、normalize、layout、atomic、component等基础模块
```


## 按需引入

```sass
// 内置的css变量(此项必须引入)
@import "~@78/style/var";

// 引入sass变量、混合等
@import "~@78/style/var/sass-vars";

// 重置模块
@import "~@78/style/normalize";

// 布局模块
@import "~@78/style/layout";

// 原子类
@import "~@78/style/atomic";

// 网格
@import "~@78/style/grid";

// 移动端配置
@import "~@78/style/mobile";

// 内置样式组件(暂无)
@import "~@78/style/components";

// 小程序环境的normalize
@import "~@78/style/normalize-for-mini-program";
```


### 生成自己的主题色

```
# 执行createCustomVar.js
node node_modules/@lxjx/sass-base/script/createCustomVar.js

# 输入主题色，复制打印到自定义的scss文件中并引入`var/index.scss`
? 请输入主题色: red
--m78-color-1: #ffeae6;
--m78-color-2: #ffafa3;
--m78-color-3: #ff887a;
--m78-color-4: #ff5d52;
--m78-color-5: #ff3029;
--m78-color-6: #ff0000;
--m78-color-7: #d90007;
--m78-color-8: #b3000c;
--m78-color-9: #8c000e;
--m78-color-10: #66000e;
--m78-color: #ff0000;
```

