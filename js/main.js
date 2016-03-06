
$(document).ready(function() {

    //配置
    var configure = {
        color : ["#1BBC9B","#BFDA00","#2C3E50","#FF9900"], //每屏的颜色
    };
    var arrow = $("#next");
    //获取屏幕宽度
    var sWidth = $(window).width();
    console.log(sWidth);
    var content1Left = $(".content1-left"),
        content1Right = $(".content1-right"),
        content1LeftF = $(".content1-left-F0"),
        content1LeftE = $(".content1-left-E0"),
        content1RightC = $(".content1-right-c0"),
        content1RightO = $(".content1-right-o0"),
        content1RightD = $(".content1-right-d0"),
        content1RightE = $(".content1-right-e0"),
        content1RightR = $(".content1-right-r0"),
        content1RightS = $(".content1-right-s0");
    content1RightD.click(function(){
        alert("sss")
    })
    //初始化隐藏文字
    hideCon();
    function hideCon(){
        content1Left.css("left",-sWidth/2+"px");
        content1Right.css("right",-sWidth/2+"px");
    }

    $('#fullpage').fullpage({
        //循环演示
        continuousVertical: true,
        //每屏的颜色
        sectionsColor: [configure.color[0],configure.color[1],configure.color[2],configure.color[3]],
        //绑定菜单0
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        // 导航
        'navigation': true,
        //nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index,nextIndex,direction){
            for(var i=0;i<4;i++){
                if(i == nextIndex-1){
                    colorChange(configure.color[i]);
                    break;
                }
            }
            if(nextIndex == 4){
                arrow.css("display","none")
            }
            if(index == 4){
                arrow.css("display","block")
            }
            if(index == 1){
                content1LeftF.removeClass("content1-left-F");
                content1LeftE.removeClass("content1-left-E");
                content1RightC.removeClass("content1-right-c");
                content1RightO.removeClass("content1-right-o");
                content1RightD.removeClass("content1-right-d");
                content1RightE.removeClass("content1-right-e");
                content1RightR.removeClass("content1-right-r");
                content1RightS.removeClass("content1-right-s");
            }
            if(nextIndex == 1){
                content1LeftF.addClass("content1-left-F");
                content1LeftE.addClass("content1-left-E");
                content1RightC.addClass("content1-right-c");
                content1RightO.addClass("content1-right-o");
                content1RightD.addClass("content1-right-d");
                content1RightE.addClass("content1-right-e");
                content1RightR.addClass("content1-right-r");
                content1RightS.addClass("content1-right-s");
            }
        }
    });
    //改变颜色
    function colorChange(col){
        $('.section').animate({
            backgroundColor: col
        }, 700);
    }
});