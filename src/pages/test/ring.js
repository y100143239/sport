//获取应用实例
var app = getApp()

var interval;
var varName;
var ctx = wx.createCanvasContext('canvasArcCir');

Page({
    data: {
    },
    drawCircle: function () {
        clearInterval(varName);
        function drawArc(s, e) {
            ctx.setFillStyle('white');
            ctx.clearRect(0, 0, 200, 200);
            ctx.draw();
            var x = 100, y = 100, radius = 96;
            ctx.setLineWidth(12);
            ctx.setStrokeStyle('#ffac00');
            ctx.setLineCap('round');
            ctx.beginPath();
            ctx.arc(x, y, radius, s, e, false);
            ctx.stroke()
            ctx.draw()
        }
        var step = 1, startAngle = 1.5 * Math.PI, endAngle = 0;
        var animation_interval = 16, n = 60;
        var animation = function () {
            if (step <= n) {
                endAngle = step * 2 * Math.PI / n + 1.5 * Math.PI;
                drawArc(startAngle, endAngle);
                step++;
            } else {
                clearInterval(varName);
            }
        };
        varName = setInterval(animation, animation_interval);
    },
    onReady: function () {
        //创建并返回绘图上下文context对象。
        var cxt_arc = wx.createCanvasContext('canvasCircle');
        cxt_arc.setLineWidth(12);
        cxt_arc.setStrokeStyle('rgba(255,255,255,0.2)');
        cxt_arc.setLineCap('round');
        cxt_arc.beginPath();
        cxt_arc.arc(100, 100, 96, 0, 2 * Math.PI, false);
        cxt_arc.stroke();
        cxt_arc.draw();
    },
    onLoad: function (options) {

    }
})
