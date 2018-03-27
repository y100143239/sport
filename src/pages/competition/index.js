/**
 * @fileOverview 脚本
 * @author 吴钦飞（wuqinfei@qq.com）
 */

const ENV_VARS = require( "../../public/config/env.vars" );

Page( {
    data: {
        ENV_VARS: ENV_VARS,

        currentTab: 0,

        recommend: {
            kinds: {
                habit: `${ENV_VARS.webImagesDir}/competition/recommend/icon_habit.png`,
                city: `${ENV_VARS.webImagesDir}/competition/recommend/icon_city.png`,
                reward: `${ENV_VARS.webImagesDir}/competition/recommend/icon_reward.png`
            }
        },
        list: {}
    },
    switchNav: function ( e ) {
        let
            current = parseInt( e.target.dataset.current )
        ;

        if ( this.data.currentTab === current ) {
            return false;
        }
        this.setData( {
            currentTab: current
        } );
    },
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