/*
功能：图片轮播
日期：2017-11-22

*/
/****************************/
/*全局变量，对象定义*/
/***************************/
var imgUrl_list=[
    'img/zhuye/1.jpg',
    'img/zhuye/lunbotu/1.jpg',
    'img/zhuye/lunbotu/2.jpg',
    'img/zhuye/lunbotu/3.jpg',
    'img/zhuye/lunbotu/4.jpg',
    'img/zhuye/lunbotu/5.jpg',
    'img/zhuye/lunbotu/6.jpg',
];


/****************************/
/*页面加载完成统一执行函数*/
/***************************/
window.onload=function(){
    //实例化“图片轮播构造函数”，并配置参数
    var carous = new Imgcarousel('imglayout',2400,false);
    //调用“生成控制点和图片的函数”
    carous.createImageAndPoint();
    //调用“点击控制点生成图片”
    carous.tabImagesShow();
    //调用“上一张，下一张”翻页按钮函数
    carous.flip();
    //调用“自动播放效果”
    carous.imageCarousInterval();
    
}
/****************************/
/*函数定义部分*/
/***************************/
/*

功能：图片轮播构造函数
参数1：图片轮播的主容器ID(String)
参数2：图片轮播的毫秒时间间隔（Number）
参数3：是否反向播放（Boolean:true：反向播放，false:正向播放，默认值）

*/
function Imgcarousel(ident,timeInterval,reverse){
    //图片轮播主容器
    this.container=document.getElementById(ident);
    //图片列表
    this.imageList=this.container.getElementsByClassName('imageList')[0];
    //控制点列表
    this.pointList=this.container.getElementsByClassName('pointList')[0];
    //获取图片url的个数
    this.imageLen=imgUrl_list.length;
    /*
    功能：生成图片和控制点列表
    
    */
    this.createImageAndPoint=function(){
        //定义临时字符串
        var imgStr='';
        var pointStr='';
        //循环生成
        for(var i=0;i<this.imageLen;i++){
            //新增图片
            imgStr+=`<img src="${imgUrl_list[i]}">`;
            //新增控制点
            pointStr+="<i>"+(i+1)+"</i>";

        }
        //将图片和控制点渲染到视图
        this.imageList.innerHTML=imgStr;
        this.pointList.innerHTML=pointStr;
        //设置默认显示第一张图片和第一个控制点选中
        this.imageList.firstElementChild.className='show';
        this.pointList.firstElementChild.className='checked';
        
        
        
        
        
    }
     /*
    功能：点击控制点切换图片
    
    */
    this.tabImagesShow=function(){
        //图片元素集合和控制点元素集合
        var img=this.imageList.children;
        var point=this.pointList.children;
        //存储imageList对象和pointList对象
        //在点击事件中的this不再指向当前构造函数被实例化的对象
        var thisImageList=this.imageList;
        var thisPointList=this.pointList;
        //循环添加点击事件，切换图片
        for(var k=0;k<this.imageLen;k++){
            //自定义索引属性，存储元素index.
            point[k].index=k;
            point[k].onclick=function(){
                //清空索引图片的class和控制点的class
                thisImageList.getElementsByClassName('show')[0].className='';
                thisPointList.getElementsByClassName('checked')[0].className='';
                //给当前点击的控制点添加上选中效果和控制点索引对应的图片添加class
                this.className='checked';
                img[this.index].className='show';
            }
        }
        
        
    }
    /*
    左右翻页按钮功能
    */
    
    this.flip=function(){
        //存储控制点列表和图片列表对象
        var thisPoint=this.pointList;
        var thisImage=this.imageList;
        //翻页控件
        var filpCtrl=this.container.getElementsByClassName('filp')[0];
        //上一张和下一张图片的方法
        var toPrev=this.prevImagesShow;
        var toNext=this.nextImageShow;
        //上一页按钮事件
        filpCtrl.firstElementChild.onclick = function(){
            toPrev(thisPoint,thisImage);
        }
        //下一页按钮事件
        filpCtrl.lastElementChild.onclick = function(){
            toNext(thisPoint,thisImage);
        }
    }
    /*
    功能：显示下一张图片
    参数1：当前控制点列表（Element）
    参数2：当前图片列表（Element）
    */
    this.nextImageShow=function(point,image){
        //获取当前选中的图片和控制点
        var cdkPoint=point.getElementsByClassName('checked')[0];
        var showImg=image.getElementsByClassName('show')[0];
        //清除当前控制点和图片选中效果
        cdkPoint.className='';
        showImg.className='';
        //获取当前控制点和图片的下一个同级元素
        var nextPoint=cdkPoint.nextElementSibling;
        var nextImage=showImg.nextElementSibling;
        //如果后方仍然存在元素节点，就给这个元素设置样式
        if(nextPoint){
            //获取最新控制点和图片设置选中效果
            nextPoint.className='checked';
            nextImage.className='show';
        }
        //否则设置首个控制点和图片选中效果
        else{
            point.firstElementChild.className='checked';
            image.firstElementChild.className='show';
        }
    }
    
    /*
    功能：显示上一张图片
    参数1：控制点列表（Element）
    参数2：当前图片列表（Element）
    */
    this.prevImagesShow=function(point,image){
        //获取当前选中的图片和控制点
        var cdkPoint=point.getElementsByClassName('checked')[0];
        var showImg=image.getElementsByClassName('show')[0];
        //清除当前控制点和图片选中效果
        cdkPoint.className='';
        showImg.className='';
        //获取当前控制点和图片的上一个同级元素
        var prevPoint=cdkPoint.previousElementSibling;
        var prevImage=showImg.previousElementSibling;
        //如果前方仍然存在元素节点，就给这个元素设置样式
        if(prevPoint){
            //获取最新控制点和图片设置选中效果
            prevPoint.className='checked';
            prevImage.className='show';
        }
        //否则设置最后一个控制点和图片选中效果
        else{
            point.lastElementChild.className='checked';
            image.lastElementChild.className='show';
        }
    }
    
    /*
    功能：设置图片自动播放函数
    */
    this.imageCarousInterval=function(){
        //存储控制点和图片列表
        var thisPoint = this.pointList;
        var thisImage = this.imageList;
        //声明定时执行方法
        var carousel;
        //通过传入的第三个参数决定使用哪一种播放方式
        if(reverse===true){
            //调用方向函数上一张函数
            carousel=this.prevImagesShow;
        }
        else{
            carousel=this.nextImageShow;
        }
        //声明定时器，开始执行自动播放
        var timer=setInterval(function(){
            carousel(thisPoint,thisImage);
        },timeInterval);
        //鼠标的移出移出事件
        this.container.onmouseenter=function(){
            //清除定时器
            clearInterval(timer);
        }
        //鼠标的移入事件
        this.container.onmouseleave=function(){
            //重新启动定时器
           timer=setInterval(function(){
            carousel(thisPoint,thisImage);
        },timeInterval);
        }
        
        
    }
    
      
      
      
      
    
    
}
