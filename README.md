# 使用vue-admin 构建手机端应用

1. 下载模板：git clone https://github.com/PanJiaChen/vue-admin-template.git

2. 使用的UI框架是vant，可以查看官方下载地址：
    https://youzan.github.io/vant/#/zh-CN/quickstart
3. 引入组件(这里使用的是推荐的自动按需引入组件方法)
   a. 安装插件：npm i babel-plugin-import -D
   b.// 在.babelrc 中添加配置
    // 注意：webpack 1 无需设置 libraryDirectory
    {
    "plugins": [
        ["import", {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
        }]
    ]
    }

    // 对于使用 babel7 的用户，可以在 babel.config.js 中配置
    module.exports = {
    plugins: [
        ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
        }, 'vant']
    ]
    };
    // 接着你可以在代码中直接引入 Vant 组件
    // 插件会自动将代码转化为方式二中的按需引入形式
    import { Button } from 'vant';
4. Rem 适配
   使用postcss-px-to-viewport 是一款 postcss 插件
   安装: npm install postcss-px-to-viewport
   配置：
   module.exports = {
        'plugins': {
            // to edit target browsers: use "browserslist" field in package.json
            'autoprefixer': {},
            'postcss-px-to-viewport': {
                viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数
                viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
                selectorBlackList: ['.ignore','.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                mediaQuery: false     // 允许在媒体查询中转换`px`
            }
        }
    };
5. 底部安全区适配
    iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。Vant 中部分组件提供了safe-area-inset-bottom属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

    <!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
    <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
    />

    <!-- 开启 safe-area-inset-bottom 属性 -->
    <van-number-keyboard safe-area-inset-bottom />