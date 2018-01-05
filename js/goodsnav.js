/**
 * 功能：二级导航菜单
 */
/**
 * 实例化构造函数
 * 传入参数
 */
var goods=goods;
var menus = new NavMenus(goods);
var toplevelspan=document.getElementsByClassName('toplevelspan')[0];
var topCats=document.getElementById('topCats');
var count=0;
toplevelspan.onclick=function(){
    // 调用生成一级菜单函数
    if(count++%2==1){
        var lv2=document.getElementsByClassName('lv2')[0];
        var lv1=document.getElementsByClassName('lv1')[0];
        lv1.style.display="none";
        if(lv2.style.display=="block"){
            lv2.style.display="none";
        }
    }
    else{
        menus.setSubNavMenu();
        menus.setSubNavMenu_lv2();
    }



}
var lv1=document.getElementsByClassName('lv1')[0];
var lv2=document.getElementsByClassName('lv2')[0];

lv2.onmouseleave=function(){
    lv2.style.display="none";
}

/******************
**设置导航构造函数
*参数：数据(object)
*/
function NavMenus(navData){
    this.menuData = navData;

    /**
	 * 功能：设置子函数，加载一级导航数据
	 */
    this.setSubNavMenu = function(){
        // 获取一级导航列表容器
        var goodsNavUl = document.getElementById('goodsNav').getElementsByTagName('ul')[0];
        goodsNavUl.style.display="block";
        // 获取一级导航数据长度
        var data_len = this.menuData.length;
        // 声明空变量用来拼接HTML内容(节省DOM操作性能开销)
        var liStr = '';
        // 循环数据显示
        for (var i = 0; i < data_len; i++) {
            liStr +='<li><img class="icon" src="'+this.menuData[i].imgName+'"><a class="t"  href="javascript:void(0);">'+
                this.menuData[i].classfiy + '</a>'+'<i class="fa fa-angle-right arr"></i></li>';
        }
        // 为一级导航列表容器写入导航列表数据项
        goodsNavUl.innerHTML = liStr;
    }
    /**
		 * 功能：设置二级菜单导航
		 */
    this.setSubNavMenu_lv2 = function(){
        var data = this.menuData
        // 获取一级菜单列表项集合
        var goodsNav = document.getElementById('goodsNav');
        var goodsNavList = goodsNav.getElementsByTagName('ul')[0]
        .getElementsByTagName('li'),
            goodsNavList_len = goodsNavList.length;
        // 获取二级导航容器
        var goodsNavList_lv2 = goodsNav.getElementsByTagName("ul")[1];
        // 循环绑定鼠标移入事件，和存储属性
        for (var k = 0; k < goodsNavList_len; k++) {
            // 自定义列表索引属性
            goodsNavList[k].index = k;
            // 绑定鼠标移入事件(mouseenter不冒泡，mouseover会冒泡)
            goodsNavList[k].onmouseenter = function(){
                // 获取二级导航数据及长度
                var navData_lv2 = data[this.index].goodsNav;
                var navData_lv2_len= navData_lv2.length;
                // 声明空变量来存储HTML内容
                var liStr_lv2 = '';
                // 循环拼接二级导航数据
                for (var j = 0; j < navData_lv2_len; j++) {
                    var variety_len=navData_lv2[j].variety.length;
                    var listr_variety='';
                    for(var i=0;i<variety_len;i++){
                        listr_variety+='<a href="">'+navData_lv2[j].variety[i]+'</a>';
                    }
                    if(j%2===1){liStr_lv2 += '<li><p class="title">'+
                        navData_lv2[j].name + '</p>'+listr_variety+'</li></div>';}
                    else{
                        liStr_lv2 += '<div class="clearfix"><li><p class="title">'+
                            navData_lv2[j].name + '</p>'+listr_variety+'</li>';
                    }

                }
                // 将二级导航 数据写入列表容器
                goodsNavList_lv2.innerHTML = liStr_lv2;
                var lv2=document.getElementsByClassName('lv2')[0];

                lv2.style.display="block";
            }

        }
    }
}



