/***********动态显示商品信息*/

//二级菜单三角形移入移出函数
fun111();
//动态显示商品信息函数
var goodslist=goodsList;
function funItem(goodslist){

    //获取显示商品的盒子
    var goodsList=document.getElementById('goodsList');
    var Strr=`  <section class="goodsWrap f-cb">`;
    for(var i=0;i<goodslist.length;i++){
        Strr+=`<div class="detaiWrap f-cb">
<a href="#" class="pic" title="${goodslist[i].titLink}" >
<img src="${goodslist[i].Img}" alt="${goodslist[i].titLink}" title="${goodslist[i].titLink}" class="proImg">
</a>
<div class="proinfo">
<h3 class="tit">
<a href="#" class="titLink" title="${goodslist[i].titLink}" >${goodslist[i].titLink}</a>
<a href="#" class="titLink intro" title="${goodslist[i].intro}">${goodslist[i].intro}</a>
</h3>
<dl class="dlprogress f-cb act">
<dd class="barWrap">
<b class="bar" style="width: 35%;"></b>
</dd>
<dd class="remain">
剩余<i>${goodslist[i].resdue}</i>件
</dd>
</dl>
</div>
<div class="proaction f-cb act">
<p class="u-price">
￥<b>${goodslist[i].NewPrice}</b><span class="marketprice">￥<del>${goodslist[i].OldPrice}</del></span>
</p>
<a href="#" class="u-action">立即抢购</a>
</div>
</div>`
    }
    for(var i=0;i<goodsList11.length;i++){
        Strr+=`  <div class="brandWrap">
<a href="#" class="img">
<img src="${goodsList11[i].Imgone}" alt="" class="img-lazyloaded">
<div class="goodsListWrap">
<div class="goodsWrap f-cb">
<img src="${goodsList11[i].Imgtwo}" alt="" class="img-lazyloaded">
<p class="u-price">
<span class="sellprice">
￥<b>${goodsList11[i].twoNewPrice}</b>
</span>
<span class="marketprice">
￥<del>${goodsList11[i].twoOldPrice}</del>
</span>
</p>
</div>
<div class="goodsWrap f-cb">
<img src="${goodsList11[i].Imgthree}" alt="" class="img-lazyloaded">
<p class="u-price">
<span class="sellprice">
￥<b>${goodsList11[i].threeNewPrice}</b>
</span>
<span class="marketprice">
￥<del>${goodsList11[i].threeOldPrice}</del>
</span>
</p>
</div>
<div class="goodsWrap f-cb">
<img src="${goodsList11[i].Imgfour}" alt="" class="img-lazyloaded">
<p class="u-price">
<span class="sellprice">
￥<b>${goodsList11[i].fourNewPrice}</b>
</span>
<span class="marketprice">
￥<del>${goodsList11[i].fourOldPrice}</del>
</span>
</p>
</div>
</div>
</a>
<p class="time time-start">
<b class="iconfont icon-clock"></b>
<span class="js-time"></span>
</p>
</div>
`;
    }

    Strr+=` </section>`;
    goodsList.innerHTML=Strr;

}


//倒计时开抢的点击事件
var tabWrap=document.getElementById('tabWrap');
var tabWrap_a=tabWrap.getElementsByTagName('a');
var goodsList_keys=Object.keys(goodsList);
for(var i=0;i<tabWrap_a.length;i++){
    tabWrap_a[i].index=i;
    tabWrap_a[i].addEventListener('click',function(e){
        e.preventDefault();
        funItem(goodsList[goodsList_keys[this.index]]);
        for(var j=0;j<tabWrap_a.length;j++){
            tabWrap_a[j].classList.remove('f-select');
            tabWrap_a[j].classList.remove('clicktab');
        }
        this.classList.add('f-select');
        this.firstElementChild.classList.add('f-started');
        this.lastElementChild.classList.add('f-started');
        this.classList.add('clicktab');
        document.documentElement.scrollTop=document.body.scrollTop=301;
    },false)
}




/*功能：导航右边的二级菜单移入移出三角形旋转180deg*/
function fun111(){
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
            dropmenuLi_i.classList.remove('ihover');
        }
    }
}


/*
*********点击登录和注册按钮跳转到登录，注册页面
*/
//获取登录注册按钮
var topNavLeft=document.getElementById('topNavLeft').getElementsByTagName('a')[0];
var topNavLeft1=document.getElementById('topNavLeft').getElementsByTagName('a')[1];
//点击登录跳转到登录界面
topNavLeft.addEventListener('click',function(){
    window.location.href="dl.html";
    localStorage.setItem('useName','dl');
},false)
//点击注册跳转到注册按钮
topNavLeft1.addEventListener('click',function(){
    window.location.href="dl.html";
    localStorage.setItem('useName','mfzc');
},false)




/*
**************功能：倒计时函数，根据下一阶段的值显示距离下一阶段还剩多少时间
*/

function time(nexttime){
    //获取页面显示倒计时的容器
    var js_cd=document.getElementById('js_cd');
    var js_time=document.getElementsByClassName('js-time');
    //结束时间
    var endTime=new Date();
    //设置结束时间的小时为传进来的数减1
    endTime.setHours(Number(nexttime)-1);
    endTime.setMinutes(59);
    endTime.setSeconds(59);
    //当前时间
    var NowTime=new Date();
    //获取当前时间和结束时间之间相差的毫秒数
    var t=endTime.getTime()-NowTime.getTime();
    //    console.log(t);
    //获取相差的时分秒
    var hour=Math.floor(t/1000/60/60);
    var montion=Math.floor(t%(1000*60*60)/(1000*60));
    var second=Math.floor(t%(1000*60)/1000);
    //转换小于0，表示为0+
    function zero(time){
        return time<10?"0"+time:time;
    }
    hour=zero(hour);
    montion=zero(montion);
    second=zero(second);
    //在页面显示倒计时
    js_cd.textContent=hour+":"+montion+":"+second;
    //商品列表下面的倒计时
    for(var i=0;i<js_time.length;i++){
        js_time[i].textContent="距结束："+hour+":"+montion+":"+second;
    }


}



/*
****************抢购导航栏
*/

var tabWrap=document.getElementById('tabWrap');
var tabWrap_a=tabWrap.getElementsByClassName('tab');
//鼠标的移出改变字体颜色
for(var i=0;i<tabWrap_a.length;i++){
    tabWrap_a[i].index=i;
    tabWrap_a[i].addEventListener('mouseenter',function(e){
        e.preventDefault();
        this.getElementsByTagName('b')[0].classList.add('f-started');
        this.getElementsByTagName('b')[1].classList.add('f-started');
    },false)
    tabWrap_a[i].addEventListener('mouseleave',function(e){
        e.preventDefault();
        this.getElementsByTagName('b')[0].classList.remove('f-started');
        this.getElementsByTagName('b')[1].classList.remove('f-started');
    },false)
}



//如果滚动到一定高度，将导航固定在浏览器首页
//获取main --导航盒子
var m_nav=document.getElementsByClassName('m-nav')[0];
//滚动条发生改变时
window.onscroll=function(){
    //获取滚动条距离顶部的高度
    var scrollH=document.documentElement.scrollTop||document.pageYoffset||document.body.scrollTop||0;
    if(scrollH>280){
        m_nav.style.position="fixed";
        m_nav.style.top="0";
    }
    else{
        m_nav.style.position="absolute";
        m_nav.style.top="100px";
    }
}



//获取导航栏左边登录，登录页面点击登录后记录用户名，显示用户名
var topNavLeft=document.getElementById('topNavLeft').getElementsByTagName('a')[0];
var gettopNavLeft=localStorage.getItem('name');
topNavLeft.textContent=gettopNavLeft;
topNavLeft.style.color="red";

/*  点击今日限购跳转到今日限时购页面*/
var funcTabLi=document.getElementById('funcTab').getElementsByTagName('li')[0];
funcTabLi.addEventListener('click',function(){
    window.location.href="zuye.html";
},false)



/************顶部导航栏的移入移出事件，显示下面的app二维码*/
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


/**************导航栏中的已开抢，，的定时事件*/
//获取 页面元素

time1();
function time1(){
    //保存当前时间的下一个阶段的时间，传入倒计时函数计算本阶段的倒计时
    var SStr;
    for(var i=0;i<tabWrap_a.length;i++){
        //获取每个标签中显示的时间，以及下一个和下面显示的提示信息
        var tabWrap_a_time=tabWrap_a[i].getElementsByClassName('time')[0];
        if(i==5){ }
        else{ var tabWrap_a_timenext=tabWrap_a[i+1].getElementsByClassName('time')[0];}
        var tabWrap_a_status=tabWrap_a[i].getElementsByClassName('status')[0];
        //获取当前时间，提取中的小时
        var NowTime=new Date();
        var Hours=NowTime.getHours();
        //获取开抢时间和下一个时间
        var timeCont=parseInt(tabWrap_a_time.textContent);
        if(i==5){timeContnext=Number(24);}
        else{
            var timeContnext=parseInt(tabWrap_a_timenext.textContent);
        }
        //开抢时间小于等于当前时间并且当前时间小于下一个开抢时间时设置抢购中并设置样式
        if(timeCont<=Hours && Hours<timeContnext){
            tabWrap_a_status.textContent="抢购中";
            tabWrap_a_status.parentElement.classList.add('f-select');
            tabWrap_a_status.classList.add('checkedstatus');
            tabWrap_a_time.classList.add('checkedtime');
            SStr=timeContnext;
            funItem(goodsList[goodsList_keys[i]]);
        }
        //开抢时间小于当前时间显示已开抢
        else if(timeCont<Hours){tabWrap_a_status.textContent="已开抢";}
        //开抢时间大于开抢时间显示敬请期待
        else{tabWrap_a_status.textContent="敬请期待";}



    }
    //调用本阶段的倒计时函数
    setInterval(function(){
        time(SStr);
    },1000);
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
