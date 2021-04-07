# @m78/style
> 一个样式库，包含normalize、grid、以及常用的sass混合、原子类等，旨在简化css的书写

💥 需要使用支持sass/scss的打包器加载此项目
💥 为了工具类名称简短，很多原子类都直接使用了无前缀的语义化名称，本库假设你会主动避免业务类名和本库中原子类名的冲突

## 安装

```shell
yarn add @m78/style
```

## 全量引入

最简单的方式，自动包含`normalize`、布局模块、原子类、sass变量、混合等

```js
import '@m78/style'; // 包含css-var、normalize、layout、atomic四个最基础的模块
```


## 按需引入

```sass
// 内置的css变量(此项必须引入)
@import "~@78/style/base/css-var";

// 引入sass变量、混合等
@import "~@78/style/var/index.scss";

// 重置模块
@import "~@78/style/base/normalize.scss";

// 布局模块
@import "~@78/style/base/layout.scss";

// 原子类
@import "~@78/style/base/atomic.scss";

// 网格
@import "~@78/style/base/grid.scss";

// 移动端配置
@import "~@78/style/base/mobile.scss";

// 内置样式组件(暂无)
@import "~@78/style/base/components";

// 小程序环境的normalize
@import "~@78/style/base/normalize-for-mini-program.scss";
```


### 生成自己的主题色

```
# 执行createCustomVar.js
node node_modules/@lxjx/sass-base/script/createCustomVar.js

# 输入主题色，复制打印到自定义的scss文件中并引入`var/index.scss`
? 请输入主题色: red
$color-1: #ffeae6;
$color-2: #ffafa3;
$color-3: #ff887a;
$color-4: #ff5d52;
$color-5: #ff3029;
$color-6: #ff0000;
$color-7: #d90007;
$color-8: #b3000c;
$color-9: #8c000e;
$color-10: #66000e;
$color: #ff0000;
```

