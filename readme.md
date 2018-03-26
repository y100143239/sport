 # 微信小程序

## 1. 介绍

编写此文档的目的，便于重构、维护。

## 2. 编撰

吴钦飞（wuqinfei@qq.com）。

## 3. 目录

    ${root}/
        readme.md               # 项目说明
        project.config.json     # 微信小程序开发配置
        assets/                 # 资源目录（与源代码分离）
            font/                   # 字体
                AlternateGothicNo2BT/   
            images/                 # 图片（网络）
                home/                   # 主页
                share/                  # 分享
                stepstatistics/         # 健康数据
                _local/                 # 本地（仅用于调试）
        dist/                   # 发布目录
        src/                    # 源码
            app.js                  # 小程序-脚本
            app.json                # 小程序-配置
            app.scss                # 小程序-样式
            app.wxss
            pages/                  # 页面
                home/                   # 主页
                    api/                    # 调用的API
                    view/                   # 分离出去的界面组件
                    home.wxml               # 主页
                    home.scss               
                    home.js
                competition/            # 赛事
                share/                  # 分享
                stepstatistics/         # 健康数据
            public/                 # 公共
                components/             # 组件
                    ec-canvas/              # echart
                scss/                   # 样式
                utils/                  # 工具
                config/                 # 配置
                    env.vars.js             # 环境变量


## 4. 样式

### 4.1. 采用SCSS样式预处理器

采用SCSS样式预处理器编写微信小程序样式。

home.scss ==> home.wxss

### 4.2. 使用BEM命名规范

**B__E_M，使用“-”作为连词符**

如：competition-kinds__item_habit


示例：

    <view class="page">

        <view class="page__header">
            <view class="nav">
                <view class="nav__item">推荐</view>
                <view class="nav__item">赛历</view>
            </view>
        </view>

        <view class="page__body">
            <view class="competition">
                <view class="competition__heading">
                    <view class="competition-kinds">
                        <view class="competition-kinds__item">
                            <image class="icon"></image>
                            <text class="text">习惯养成赛</text>
                        </view>
                    </view>
                </view>
                <view class="competition-content"></view>
            </view>
        </view>

    </view>

## 5. 模块

按一个页面一个模块的规则来划分，如：

    ${root}/
        src/
            pages/
                competition/        # 赛历
                    index.js
                    index.json
                    index.wxml
                    index.wxss
                home/               # 主页
                    index.js
                    index.json
                    index.wxml
                    index.wxss

## 6. 资源

    ${root}/
        assets/

`assets`目录里包含所有小程序用到的静态资源（图片、字体）。

静态资源不包含在源代码里，而使用URL进行访问。

### 6.1. 图片

    ${root}/
        assets/
            images/

**使用图片的地方：**
 * wxml 结构文件里，如 `<image src=".../1.png">`
 * wxss 样式文件里，如 `background-image: url(.../1.png);`

#### 6.1.1. 在【wxml 结构文件里】里使用图片

1.查看配置文件：

    /* ${root}/src/public/config/env.vars.js */
    module.exports = {
        "webImagesDir": "http://127.0.0.1:8080/assets/images/"
    };

2.引入配置文件（使用相对路径）：

    /* ${root}/src/pages/home/home.js */
    const ENV_VARS = require( "../../public/config/env.vars" );

    Page( {
        data: {
            isSidebarVisible: false,
            ENV_VARS: ENV_VARS
        }
        ....
    })

3.使用

    /* ${root}/src/pages/home/home.wxml */
    <image src="{{ENV_VARS.webImagesDir}}/home/icon_progress_footer.png"></image>

#### 6.1.2. 在【wxss 样式文件里】里使用图片

1.查看配置文件：

    /* ${root}/src/public/scss/_variables.scss */
    // 主机
    $host: "127.0.0.1:8080";
    // 网络图片的目录（开发）
    $dev-web-img-dir: "http://#{$host}/assets/images/";
    // 字体
    $dev-web-font-dir: "http://#{$host}/assets/font";
    $web-img-dir : $dev-web-img-dir;
    $web-font-dir : $dev-web-font-dir;

2.引入并使用

    /* ${root}/src/pages/home/_home_images.scss */
    @import "../../public/scss/variables";
    .icon-map {
        background-image: url(#{$web-img-dir}/home/icon_map.png);
    }

### 6.2. 字体

    ${root}/
        assets/
            font/

0.将xxx.ttf转换冲网页可识别的字体

1.配置 `@font-face`

    /* ${root}/assets/font/AlternateGothicNo2BT/_font_AlternateGothicNo2BT.scss */
    @import "../../../src/public/scss/variables";
    @font-face {
        font-family: 'AlternateGothic2 BT';
        src: url('#{$web-font-dir}/AlternateGothicNo2BT-Regular.eot');
        font-weight: normal;
        font-style: normal;
        ......
    }

2.在全局样式文件中引入

    /* ${root}/src/app.scss */
    /* 字体*/
    @import "../assets/font/AlternateGothicNo2BT/font_AlternateGothicNo2BT";

3.使用

    样式选择器 {
        font-family: 'AlternateGothic2 BT';
    }




## 7. 数据交换规则

    {
        "status": <number>      #   状态码 
        "desc": <string>        #   状态描述
        "data": <object>
    }

