
$(document).ready(function() {

    //配置
    var configure = {
        color : ["#1BBC9B","#4BBFC3","#2C3E50","#FF9900"]  //每屏的颜色
    };

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
        },

        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            if(anchorLink == 'page2'){
                $(".about img").animate({
                    top: "10%"
                }, 700);
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