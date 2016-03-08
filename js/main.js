
$(document).ready(function() {
    //配置
    var configure = {
        color : ["#1BBC9B","#BFDA00","#2C3E50","#FF9900"] //每屏的颜色
    };
    var arrow = $("#next");
    //获取屏幕宽度和高度
    var sWidth = $(window).width(),
        sHeight = $(window).height();
    var next = $("#next"),
        FEC1 = $(".section1 .FEC1"),
        FEC2 = $(".section1 .FEC2"),
        content1Left = $(".content1-left"),
        content1Right = $(".content1-right"),
        content1LeftF = $(".content1-left-F0"),
        content1LeftE = $(".content1-left-E0"),
        content1RightC = $(".content1-right-c0"),
        content1RightO = $(".content1-right-o0"),
        content1RightD = $(".content1-right-d0"),
        content1RightE = $(".content1-right-e0"),
        content1RightR = $(".content1-right-r0"),
        content1RightS = $(".content1-right-s0");
    //初始化隐藏文字
    hideCon();
    clickNext();
    //函数部分
    //初始化隐藏文字
    function hideCon(){
        content1Left.css("left",-sWidth/2+"px");
        content1Right.css("right",-sWidth/2-100+"px");
        FEC2.css("top",sHeight/2+"px")
    }
    //移除第一屏文字动画
    function removeClass(){
        content1LeftF.removeClass("content1-left-F");
        content1LeftE.removeClass("content1-left-E");
        content1RightC.removeClass("content1-right-c");
        content1RightO.removeClass("content1-right-o");
        content1RightD.removeClass("content1-right-d");
        content1RightE.removeClass("content1-right-e");
        content1RightR.removeClass("content1-right-r");
        content1RightS.removeClass("content1-right-s");
        FEC2.removeClass("content1-h2-FEC2");
    }
    //添加第一屏文字动画
    function addClass(){
        content1LeftF.addClass("content1-left-F");
        content1LeftE.addClass("content1-left-E");
        content1RightC.addClass("content1-right-c");
        content1RightO.addClass("content1-right-o");
        content1RightD.addClass("content1-right-d");
        content1RightE.addClass("content1-right-e");
        content1RightR.addClass("content1-right-r");
        content1RightS.addClass("content1-right-s");
        FEC2.addClass("content1-h2-FEC2");
    }
    //点击箭头，转到下一页
    function clickNext(){
        next.click(function(){
            var page = window.location.hash;
            if(page == ""){
                page = "#page1"
            }
            var page = parseInt(page.replace(/[^0-9]/ig,""));
            var nextPage = (page==4)?1:page+1;
            location.href="#page"+nextPage;//正则当前锚点数字，点击链接下一锚点
        })
    }

    function animatePlay(next, curr) {
        next.find(".about img").addClass("imgAfter");
        curr.find(".about img").removeClass("imgAfter");

        next.find(".about .info h2,h3").addClass("hAfter");
        curr.find(".about .info h2,h3").removeClass("hAfter");

        next.find(".about .info p").addClass("pAfter");
        curr.find(".about .info p").removeClass("pAfter");

        next.find(".about .social").addClass("socialAfter");
        curr.find(".about .social").removeClass("socialAfter");

        next.find(".about .social a").addClass("aAfter");
        curr.find(".about .social a").removeClass("aAfter");
    }
    $('#fullpage').fullpage({
        //循环演示
        continuousVertical: true,
        //每屏的颜色
        sectionsColor: [configure.color[0],configure.color[1],configure.color[2],configure.color[3]],
        //绑定菜单0
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        
        //nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index,nextIndex,direction){
            for(var i=0;i<4;i++){
                if(i == nextIndex-1){
                    colorChange(configure.color[i]);
                    break;
                }
            }
            if(nextIndex == 4){
                arrow.css("transform","rotate(180deg)")
            }
            if(index == 4){
                arrow.css("transform","rotate(0deg)")
            }
            if(index == 1){
                setTimeout(removeClass,700);
            }
            if(nextIndex == 1){
                addClass();
            }
        },
        
        //about页面初始化动画效果
        afterLoad: function(anchorLink, index){
           if (index == 2) {
                var currSlide = $(".slide1");
                currSlide.find(".about img").addClass("imgAfter");
                currSlide.find(".about .info h2,h3").addClass("hAfter");
                currSlide.find(".about .info p").addClass("pAfter");
                currSlide.find(".about .social").addClass("socialAfter");
                currSlide.find(".about .social a").addClass("aAfter");
            }
        },

        //about页面动画效果
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex){
            var next = $(".slide" + (nextSlideIndex+1)),
                curr = $(".slide" + (slideIndex+1));
            if(anchorLink == 'page2'){
                animatePlay.call(this, next, curr);
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