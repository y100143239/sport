let
    Ring
;

Ring = {
    timerId: null,
    ratio: null,
    ctx: null,
    grd: null
};


Ring.init = function () {
    this.ratio = wx.getSystemInfoSync().windowWidth / 375;

    this.ctx = wx.createCanvasContext( "outerRingProgressCanvas" );

    this.grd = this.ctx.createLinearGradient( 0, 0, 200, 0 );
    this.grd.addColorStop( 0, "#ff9500" );
    this.grd.addColorStop( 1, "#ffd400" );
    this.createBackground();
};

Ring.createBackground = function () {
    let
        ratio = this.ratio,
        ctx = wx.createCanvasContext( "innerRingProgressCanvas" )
    ;
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
    let
        ctx = this.ctx,
        grd = this.grd,
        ratio = this.ratio
    ;

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
        timerId = this.timerId,
        now = 0,
        interval = percent / 50
    ;
    if ( timerId ) {
        clearInterval( timerId );
        this.timerId = null;
    }
    timerId = setInterval( function () {
        now += interval;
        Ring.draw( now );
        if ( now >= percent ) {
            clearInterval( timerId );
        }
    }, 20 );
};


module.exports = Ring;