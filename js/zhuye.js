/*
动态显示分会场第一行的数据
功能：显示雅诗兰黛，宝丽，兰蔻，韩后
*/
//获取data里（goods-rowOfFour）的数据(goods_rowOfFour)
var rowOfFour = goods_rowOfFour;
//实例化构造函数，传入参数
var row=new DataFour(rowOfFour);
row.fun1();
/*
设置构造函数动态显示分会场第一行的数据
参数：数据(Object)
*/
function DataFour(data){
    this.data=data;
    /*设置子函数，加载数据*/
    this.fun1=function(){
        //获取数据表里数据条数
        var data_len=this.data.length;
        //获取显示的容器
        var act_module=document.getElementsByClassName('act-module');
        for(var i=0;i<act_module.length;i++){
            //act-module这个class里第一个，第三个，。。。显示的是分会场的第一行，偶数显示的第二部分，商品列表，所有判断一下如果为偶数就调用函数fun获取数据。
            if(i%2==0){
                var str=fun(this.data);
                //渲染数据到页面
                act_module[i].innerHTML=str;
            }
        }
        /*获取数据值并存入字符串*/
        function fun(data){
            this.data=data;
            var actStr1=` <article class="m-brandarea m-brandarea1">
                        <section class="rowOfFour brandSec clearfix">
                            <section class="brandBox clearfix">`;
            for(var i=0;i<data_len;i++){
                actStr1+=`<div class="brandWrap clearfix">
                        <a href="#" class="brandImgLink">
                            <img src="${this.data[i].brandImg}" alt=""  title="${this.data[i].brandName}">
                        </a>
                        <a href="#" class="brandDesc">
                            <img src="${this.data[i].brandLogo}" title="${this.data[i].brandName}" alt="" class="brandLogo">
                        <p class="brandName" title="${this.data[i].brandName}">${this.data[i].brandName}</p>
                        <p class="brandBenefit" title="${this.data[i].brandBenefit}">${this.data[i].brandBenefit}</p>
                        <span class="brandBtn">进入品牌</span>
                        </a>
                        </div>`;
            }
            actStr1+=`</section></section></article>  `;
            return actStr1;
        }
    }
}

/*
功能：显示分会场第二部分商品列表***********************


*/

//获取data里的数据（goods_lineOfFour）
var lineOfFour = goods_lineOfFour;
//实例化构造函数，传入参数
var line=new LineOFour(lineOfFour);
line.fun2();

/*

设置构造函数动态显示分会场第二部分商品列表
参数：数据(Object)

*/
function LineOFour(data){
    this.data=data;
    /*创建子函数实现显示数据*/
    this.fun2=function(){
        //获取数据条数
        var data_len=this.data.length;
        //获取显示数据的容器
        var act_module1=document.getElementsByClassName('act-module');
        for(var i=0;i<act_module1.length;i++){
            //值为偶数时调用函数
            if(i%2==1){
                var str=fun(this.data);
                act_module1[i].innerHTML=str;
            }
        }
        function fun(data){
            this.data=data;
            var str=`<article class="m-goodsarea m-goodsarea1">
                    <section class="lineOfFour">
                        <div class="goodsWrap clearfix">`;
            for(var i=0;i<data_len;i++){
                str+=`<div class="detailWrap clearfix"><a href="#" title="${this.data[i].proInfotitLink}" class="pic"><img src="${this.data[i].picProImg}" alt="${this.data[i].proInfotitLink}"     title="${this.data[i].proInfotitLink}" class="proImg"><img src="${this.data[i].picBrandImg}" alt="原产国国旗" class="w-brand-img"></a><div class="proinfo"> <h3 class="tit"><a href="#" class="titLink" title="${this.data[i].proInfotitLink}">${this.data[i].proInfotitLink}</a>
        <a href="#" title="${this.data[i].proInfotit}">${this.data[i].proInfotit}</a></h3>
        <ul class="tags clearfix"><li class="tagItem">${this.data[i].tagsItem}</li></ul>
         <p class="w-price"><strong><span class="symbol"><b>黑五价&nbsp;</b>￥
        </span>${this.data[i].priceSymbol}</strong><i class="tl">
        ￥<del>${this.data[i].priceT1Del}</del>
        </i></p> <a href="#" class="cart-btn" title="立即购买">立即购买</a></div></div>`;
            
            }
            str+=`</div></section></article>`;
            return str;
        }
    }
}


/**************
功能：设置构造函数显示分会场的标题图片
*/
//获取数据
var ImgWrapALL=ImgWrapALL;
//实例化构造函数
var Img=new ImgAll(ImgWrapALL);
Img.fun3();

/*构造函数显示分会场的标题图片*/
function ImgAll(data){
    this.data=data;
    this.fun3=function(){
        //获取显示数据的容器
        var imgWrapALL=document.getElementsByClassName('imgWrapALL');
        //获取容器的个数
        var imgAll_len=imgWrapALL.length;
        for(var i=0;i<imgAll_len;i++){
            imgWrapALL[i].innerHTML=`<section class="imglayoutall imglayout11">
                            <div class="oneimgall oneimg${i+1}"></div>
                                <a href="" class="oneimg11-a1"></a>
                                </section>`;
        }
    }
}

//获取微博，微信，。。图标,移入显示二维码
fun1133();
function fun1133(){
    var tubiao=document.getElementsByClassName('tubiao');
var m_notice=document.getElementsByClassName('m-notice');
for(var i=0;i<tubiao.length;i++){
    tubiao[i].index=i;
    tubiao[i].onmouseenter=function(){
        m_notice[this.index+1].classList.add("notice-1m");
    }
    tubiao[i].onmouseleave=function(){
        m_notice[this.index+1].classList.remove("notice-1m");
    }
}
}


/*********顶部导航栏手机考拉海购的移入移出事件*/
fun1122();
function fun1122(){
 var topNavLeft2App=document.getElementById('topNavLeft2').getElementsByClassName('app')[0];
var m_notice=topNavLeft2App.getElementsByClassName('m-notice')[0];
topNavLeft2App.addEventListener('mouseenter',function(e){
    e.preventDefault();
    m_notice.classList.add('noticehover');
},false);
topNavLeft2App.addEventListener('mouseleave',function(e){
    e.preventDefault();
    m_notice.classList.remove('noticehover');
},false);   
}




/*
***********右边导航的显示与隐藏
*/
//获取导航信息
var m_qsideslip=document.getElementById('m-qsideslip');
/*window 滚动事件*/
window.onscroll=function(){
    //获取滚动条距离
    var scrollH=document.documentElement.scrollTop||document.pageYoffset||document.body.scrollTop||0;
    if(scrollH>100){
        m_qsideslip.style.display="block";
    }
    else{
        m_qsideslip.style.display="none";
    }
}


var goTopt=null;
//绑定回到顶部按钮的点击事件
var bottomPart=document.getElementById('bottomPart');
bottomPart.onclick=goTop;
function goTop(){
    goTopt=setInterval(goTopTrans,100);
}
function goTopTrans(){
    //获取滚动条滚动距离
    var scrollH=document.documentElement.scrollTop || document.pageYoffset ||document.body.scrollTop || 0;
    goSpeed=scrollH-scrollH/10;
    if(scrollH===0){clearInterval(goTopt);return;}
    document.documentElement.scrollTop=document.body.scrollTop=goSpeed;
}


//获取右边菜单按钮
var mainPart=document.getElementById('mainPart').getElementsByTagName('a');
//右边菜单栏对应的位置距离顶部的距离
var arr=['800','1960','2740','3540','4640','5980','7285','8613','9946','11279','12586','13926','15249','16589','17889','19210','20550','21861','23201','24513'];
for(var i=0;i<mainPart.length;i++){
    mainPart[i].index=i;
    //菜单栏点击时将对应的滚动条的距离设置为对应的高度
    mainPart[i].addEventListener('click',function(e){
        e.preventDefault();
        document.documentElement.scrollTop=document.body.scrollTop=arr[this.index];
    },false)
}

//获取导航栏左边登录，登录页面点击登录后记录用户名，显示用户名
var topNavLeft=document.getElementById('topNavLeft').getElementsByTagName('a')[0];
//获取本地存储中的用户名
var gettopNavLeft=localStorage.getItem('name');
//显示到指定位置，字体为红色
topNavLeft.textContent=gettopNavLeft;
topNavLeft.style.color="red";
//点击用户名跳转到登录界面
topNavLeft.addEventListener('click',function(){
    window.location.href="dl.html";
    localStorage.setItem('useName','dl');
},false)
/* 
点击免费注册跳转到注册界面
*/
var topNavLeft1=document.getElementById('topNavLeft').getElementsByTagName('a')[1];
topNavLeft1.addEventListener('click',function(){
    window.location.href="dl.html";
    localStorage.setItem('useName','mfzc');
},false)

/*  点击今日限购跳转到今日限时购页面*/
var funcTabLi=document.getElementById('funcTab').getElementsByTagName('li')[1];
funcTabLi.addEventListener('click',function(){
    window.location.href="jrxsgou.html";
},false)






/*
功能：导航右边的二级菜单移入移出三角形旋转180deg
*/
//获取满足条件的li
var dropmenuLi=document.getElementById('topNavRight').getElementsByClassName('dropmenu-i');
for(var i=0;i<dropmenuLi.length;i++){
   
    dropmenuLi[i].index=i;
    dropmenuLi[i].onmouseenter=function(){
        //li下面的i标签
        var dropmenuLi_i=this.firstElementChild.firstElementChild;
        //添加class
        dropmenuLi_i.classList.add('ihover');
    }
    dropmenuLi[i].onmouseleave=function(){
        var dropmenuLi_i=this.firstElementChild.firstElementChild;
    console.log(dropmenuLi_i);
        dropmenuLi_i.classList.remove('ihover');
    }


}


