
$(document).ready(function() {
    $('#fullpage').fullpage({
        continuousVertical: true,  //循环演示
        //绑定菜单
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',

        // 导航
        'navigation': true,
    });
});