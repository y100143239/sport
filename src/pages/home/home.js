let
    Ring = {},
    ratio,
    ctx,
    grd,
    timerId
;


Ring.createBackground = function () {
    let ctx = wx.createCanvasContext( "innerRingProgressCanvas" );
    // 白色圆环
    ctx.setLineWidth( 10 * ratio );
    ctx.setLineCap( "round" );
    ctx.setStrokeStyle( "rgba(255,255,255,.3)" );
    ctx.beginPath();
    ctx.arc( 178 / 2 * ratio, 178 / 2 * ratio, (178 / 2 - 5) * ratio, 0, 2 * Math.PI, false );
    ctx.stroke();

    // 圆形背景
    // ctx.setLineWidth( 20 * ratio );
    // ctx.setStrokeStyle( "rgba(0,0,0,.0)" );
    // ctx.setLineCap( "round" );
    // ctx.setFillStyle( "rgba(0,0,0,.3)" );
    // ctx.beginPath();
    // ctx.arc( 178 / 2 * ratio, 178 / 2 * ratio, (178 / 2 - 10) * ratio, 0, 2 * Math.PI, false );
    // ctx.stroke();
    // ctx.fill();

    ctx.draw();
};

/**
 * @description 绘制圆环
 * @param percent {number} 0% ~ 100%
 */
Ring.draw = function ( percent ) {

    // 清除
    ctx.clearRect( 0, 0, 400, 400 );

    ctx.setLineWidth( 10 * ratio );
    ctx.setStrokeStyle( grd );
    ctx.setLineCap( "round" );
    ctx.beginPath();
    ctx.arc( 178 / 2 * ratio, 178 / 2 * ratio, (178 / 2 - 5) * ratio, Math.PI / 2, 2 * Math.PI * percent + Math.PI / 2, false );
    ctx.stroke();
    ctx.draw();
};

/**
 * @description 慢慢绘制圆环
 * @param percent {number} 0% ~ 100%
 */
Ring.dynamicDraw = function ( percent ) {
    let
        now = 0,
        interval = percent / 50
    ;
    if ( timerId ) {
        clearInterval( timerId );
    }
    timerId = setInterval( function () {
        now += interval;
        Ring.draw( now );
        if ( now >= percent ) {
            clearInterval( timerId );
        }
    }, 20 );
};

function init() {
    ratio = wx.getSystemInfoSync().windowWidth / 375;

    ctx = wx.createCanvasContext( "outerRingProgressCanvas" );

    grd = ctx.createLinearGradient( 0, 0, 200, 0 );
    grd.addColorStop( 0, "#ff9500" );
    grd.addColorStop( 1, "#ffd400" );
}

Page( {

    onReady: function () {

        init();

        Ring.createBackground();
        Ring.dynamicDraw( .5 );
    }
} );
