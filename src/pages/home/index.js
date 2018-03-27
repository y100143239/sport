const ENV_VARS = require( "../../public/config/env.vars" );
const Steps = require( "./view/_steps" );

Page( {

    data: {
        ENV_VARS: ENV_VARS,
        backgroundImage: ENV_VARS.webImagesDir + "/home/page_bg.png",
        weather: {
            icon: ENV_VARS.webImagesDir + "/home/weather_sunny.png",
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
            match: ENV_VARS.webImagesDir + "/home/entrance_match.png",
            reward: ENV_VARS.webImagesDir + "/home/entrance_reward.png",
            gym: ENV_VARS.webImagesDir + "/home/entrance_gym.png"
        },
        map: {
            ground: ENV_VARS.webImagesDir + "/home/map_ground.png",
            reward: ENV_VARS.webImagesDir + "/home/map_reward.png",
            habit: ENV_VARS.webImagesDir + "/home/map_habit.png",
            road: ENV_VARS.webImagesDir + "/home/map_road.png",
            plan: ENV_VARS.webImagesDir + "/home/map_plan.png"
        },
        sidebar: {
            visible: false
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
        Steps.dynamicDraw( .75 );
    },
    /**
     * @description 处理侧边栏的显示与隐藏
     */
    toggleSidebar: function () {
        let visible = this.data.sidebar.visible;
        this.setData( {
            sidebar: {
                visible: !visible
            }
        } )
    },
} );