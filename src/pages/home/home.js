const ENV_VARS = require( "../../public/config/env.vars" );
const Steps = require( "./view/_steps" );

Page( {

    data: {
        ENV_VARS: ENV_VARS,
        backgroundImage: `${ENV_VARS.webImagesDir}/home/page_bg.png`,
        weather: {
            icon: `${ENV_VARS.webImagesDir}/home/weather_sunny.png`,
            value: 15,
            pm: "2.5",
            desc: "良好"
        },
        broadcast: {
            list: [
                "火爆!辽篮球票销售致网络拥堵 首日卖出5000张",
                "1000万！二岁母马穿走了世界上最贵的“金拖鞋”"
            ]
        },
        entrance: {
            match: `${ENV_VARS.webImagesDir}/home/entrance_match.png`,
            reward: `${ENV_VARS.webImagesDir}/home/entrance_reward.png`,
            gym: `${ENV_VARS.webImagesDir}/home/entrance_gym.png`
        },
        map: {
            ground: `${ENV_VARS.webImagesDir}/home/map_ground.png`,
            reward: `${ENV_VARS.webImagesDir}/home/map_reward.png`,
            habit: `${ENV_VARS.webImagesDir}/home/map_habit.png`,
            road: `${ENV_VARS.webImagesDir}/home/map_road.png`,
            plan: `${ENV_VARS.webImagesDir}/home/map_plan.png`
        },
        sidebar: {
            visible: false,
            image: {
                avatar: `${ENV_VARS.webImagesDir}/_local/avatar_demo.jpg`,
                friends: `${ENV_VARS.webImagesDir}/home/sidebar_friends.png`,
                sociality: `${ENV_VARS.webImagesDir}/home/sidebar_sociality.png`,
                daily_trend: `${ENV_VARS.webImagesDir}/home/sidebar_daily_trend.png`,
                statistics: `${ENV_VARS.webImagesDir}/home/sidebar_statistics.png`,
                wallet: `${ENV_VARS.webImagesDir}/home/sidebar_wallet.png`,
                rank: `${ENV_VARS.webImagesDir}/home/sidebar_rank.png`,
                gratuity: `${ENV_VARS.webImagesDir}/home/sidebar_gratuity.png`,
                about: `${ENV_VARS.webImagesDir}/home/sidebar_about.png`
            }
        },
        steps: {
            percentage: 75,
            total: 14989,
            calories: [
                { category: "apple", text: "苹果", num: 1, imageUrl: `${ENV_VARS.webImagesDir}/home/steps_apple.png` },
                { category: "pear", text: "梨子", num: 2, imageUrl: `${ENV_VARS.webImagesDir}/home/steps_apple.png` }
            ]
        }

    },

    onReady: function () {
        Steps.init();
        this.refreshSteps();
        // console.info( this.data );
    },
    /**
     * @description 处理侧边栏的显示与隐藏
     */
    toggleSidebar: function () {
        let
            visible = this.data.sidebar.visible
        ;

        this.data.sidebar.visible = !visible;

        this.setData( {
            sidebar: this.data.sidebar
        } )
    },

    /**
     * @description 刷新（获取）步数
     */
    refreshSteps: function () {
        let
            steps = {
                percentage: 75,
                total: 14989,
                calories: [
                    { category: "apple", text: "苹果", num: 1, imageUrl: `${ENV_VARS.webImagesDir}/home/steps_apple.png` },
                    { category: "pear", text: "梨子", num: 2, imageUrl: `${ENV_VARS.webImagesDir}/home/steps_apple.png` }
                ]
            }
        ;
        this.setData( {
            steps: steps
        } );
        Steps.dynamicDraw( steps.percentage / 100 );
    },

    /**
     * @description 页面导航
     * @param event
     */
    navigateTo: function ( event ) {
        let
            page = event.currentTarget.dataset.page
        ;
        if ( !page ) {
            throw "data-page 未配置";
        }
        wx.navigateTo( {
            url: page
        } );
    }
} );