//获取页面元素:手机号登绿界面
var loginbox1=document.getElementById('loginbox1');
//邮箱登录界面
var loginbox2=document.getElementById('loginbox2');
//登录头部
var dltop=document.getElementById('dltop');
//手机登录,邮箱登录的点击按钮
var topDiv=dltop.getElementsByTagName('div');
//获取手机快速注册点击按钮
var gotoreg=document.getElementsByClassName('gotoreg')[0];
//获取注册页面
var regwrap=document.getElementById('regwrap');
//获取登录页面
var loginwrap=document.getElementById('loginwrap');
//获取去登录点击按钮
var godl=document.getElementsByClassName('godl')[0];

//默认注册界面和邮箱登录隐藏
regwrap.classList.add('zc');
loginbox2.classList.add('loginbox2');


//点击手机号登录隐藏邮箱登录,显示手机号登录界面
topDiv[0].onclick=function(){
    loginbox2.classList.add('loginbox2');
    loginbox1.classList.remove('loginbox1');
    topDiv[0].style.color="#e31436";
    topDiv[1].style.color="black";
}
//点击邮箱登录显示邮箱登录,手机号登录界面隐藏
topDiv[1].onclick=function(){
    loginbox1.classList.add('loginbox1');
    loginbox2.classList.remove('loginbox2');
    topDiv[0].style.color="black";
    topDiv[1].style.color="#e31436";
}
//注册按钮的点击事件
gotoreg.onclick=function(){
    loginwrap.classList.add('dl');
    regwrap.classList.remove('zc');
}
//去登录按钮的点击事件
godl.addEventListener('click',function(e){
    e.preventDefault();
    loginwrap.classList.remove('dl');
    regwrap.classList.add('zc');
},false)


/*

功能：登录手机号登录界面验证

*/
//获取手机登录页面的手机号输入框，验证码输入框，获取验证码按钮，登录按钮
//手机号输入框的获取(手机号登录页，注册页)
var telDl1=document.getElementById('telDl1'),telDl1TF=false;
var telDl2=document.getElementById('telDl2'),telDl2TF=false;
//短信验证码的集合(手机号登录页，注册页)
var inpDx1=document.getElementById('inpDx1'),inp1TF=false;
var inpDx2=document.getElementById('inpDx2'),inp2TF=false;
//获取邮箱登录账号(邮箱登录页)
var yxDlId=document.getElementById('yxDlId'),yxIdTF=false;
//获取密码验证框(邮箱登录页，注册页)
var passWord1=document.getElementById('passWord1'),pass1TF=false;
var passWord2=document.getElementById('passWord2'),pass2TF=false;
//获取手机登录页面的登录按钮(手机号登录页登录按钮，邮箱登录页登录按钮，注册页注册按钮)
var box1Btn=document.getElementById('submitBtn1');
var box2Btn=document.getElementById('submitBtn2');
var box3Btn=document.getElementById('submitBtn3');

/*

调用验证函数

*/
//手机号验证
fun1(telDl1);
fun1(telDl2);
//验证码函数调用
fun2(inpDx1);
fun2(inpDx2);
//调用邮箱名验证函数
fun4(yxDlId);
//调用密码验证函数
fun5(passWord1);
fun5(passWord2);
//调用手机登录页面的按钮函数
fun6(box1Btn);
fun7(box2Btn);
fun8(box3Btn);

//手机号输入框验证函数

function fun1(telDl){
    telDl1TF=false;
    telDl2TF=false;
    //输入框值改变
    telDl.oninput=function(){
        //获取输入框值
        var telDlVal=telDl.value;
        //输入框有值时显示后面的清除按钮，没值时隐藏
        if(telDlVal){
            //后面的清除按钮显示
            telDl.nextElementSibling.style.display="inline-block";
        }
        //后面的清除按钮隐藏
        else{
            telDl.nextElementSibling.style.display="none";}
    }
    //清除按钮的点击事件
    telDl.nextElementSibling.onclick=function(){
        //输入框值为空，按钮为隐藏，输入框颜色变为灰色
        telDl.value="";
        telDl.nextElementSibling.style.display="none";
        telDl.parentElement.style.borderColor="#d5d5d5";

    }
    //输入框获得焦点时判断事件
    telDl.addEventListener('focus',function(){
        var telDlVal=telDl.value;
        //没有输入值或者输入的手机号正确时输入框的颜色为蓝色
        if(telDlVal=="" || /^1(3|4|5|7|8)\d{9}$/.test(telDlVal)){
            telDl.parentElement.style.borderColor="#4aafe9";
        }
        //输入的手机号值不正确输入框的颜色变红
        else{telDl.parentElement.style.borderColor="red";}
    },false)
    //输入框失去焦点时判断事件
    telDl.addEventListener('blur',function(){
        var telDlVal=telDl.value;
        //手机号正确时输入框颜色为蓝色
        if(/^1(3|4|5|7|8)\d{9}$/.test(telDlVal)){
            telDl.parentElement.style.borderColor="#d5d5d5";
            //设置判定变量为true（判定是登录页的手机号还是注册页的手机号）
            if(telDl==telDl1){telDl1TF=true;}
            else{telDl2TF=true;}
        }
        //输入框值为空时颜色为灰色
        else if(telDlVal==''){telDl.parentElement.style.borderColor="#d5d5d5";}
        //值错误时颜色为灰色
        else{telDl.parentElement.style.borderColor="red";}

    },false)

}

//随机生成的验证码
function fun3(inpDx){
    var str='';
    //随机生成4位0-9的数字并存入字符串，返回
    for(var i=0;i<4;i++){
        str+=String(Math.round(Math.random()*9));

    }
    alert('验证码为：'+str);
    return str;
}

/*验证码验证函数*/
function fun2(inpDx){
    inp1TF=false;
    inp2TF=false;
    //用于接收随机生成的验证码
    var Str='';
    //随机生成验证码按钮点击事件
    inpDx.nextElementSibling.addEventListener('click',function(e){
        //清除a标签的默认事件
        e.preventDefault();
        //判定手机号正确否
        if(telDl1TF || telDl2TF){
            //调用验证码函数并在控制台显示
            Str= fun3(inpDx);
        }
        //提示输入正确的手机号
        else{alert("请输入正确的手机号");}

    },false)

    //验证码输入框获得焦点事件
    inpDx.addEventListener('focus',function(){
        var inpDx_val=inpDx.value;
        //验证码输入框没有输入获取输入的值等于随机生成的字符串
        if(inpDx_val=="" || inpDx_val==Str){
            //边框颜色为蓝色
            inpDx.parentElement.style.borderColor="#4aafe9";
        }
        else{
            //边框颜色为红色
            inpDx.parentElement.style.borderColor="red";
        }
    },false)
    //验证码输入框失去焦点事件
    inpDx.addEventListener('blur',function(){
        var inpDx_val=inpDx.value;
        //值为空为灰色
        if(inpDx_val=="" ){
            inpDx.parentElement.style.borderColor="#d5d5d5";
        }
        //值正确为灰色
        else if(inpDx_val==Str){
            inpDx.parentElement.style.borderColor="#d5d5d5";
            //输入框判断的值为true
            if(inpDx==inpDx1){inp1TF=true;}
            else{inp2TF=true;}
        }
        //输入框值错误输入框颜色为红色
        else{
            inpDx.parentElement.style.borderColor="red";
        }
    },false)

}
/*邮箱名验证函数*/
function fun4(yxDlId){
    yxIdTF=false;
    //输入框值改变
    yxDlId.oninput=function(){
        var telDlVal=yxDlId.value;

        if(telDlVal){
            //后面的清除按钮显示与隐藏
            yxDlId.nextElementSibling.style.display="inline-block";
        }
        else{yxDlId.nextElementSibling.style.display="none";}
    }
    //清除按钮的点击事件（值为空，按钮不可见，输入框颜色为灰色）
    yxDlId.nextElementSibling.onclick=function(){
        yxDlId.value="";
        yxDlId.nextElementSibling.style.display="none";
        yxDlId.parentElement.style.borderColor="#d5d5d5";

    }
    //输入框获得焦点时判断事件
    yxDlId.addEventListener('focus',function(){
        var telDlVal=yxDlId.value;
        //值为空或者正确，颜色为蓝色，否则为红色
        if(telDlVal=="" ||/^\w+@[a-z0-9]+\.([a-z]){1,3}$/.test(telDlVal)){
            yxDlId.parentElement.style.borderColor="#4aafe9";
        }
        else{yxDlId.parentElement.style.borderColor="red";}
    },false)
    //输入框失去焦点时判断事件
    yxDlId.addEventListener('blur',function(){
        var telDlVal=yxDlId.value;
        //值为空颜色为灰色
        if(telDlVal==""){
            yxDlId.parentElement.style.borderColor="#d5d5d5";
        }
        //值正确时颜色为蓝色，判定位true
        else if(/^\w+@[a-z0-9]+\.([a-z]){1,3}$/.test(telDlVal)){
            yxDlId.parentElement.style.borderColor="#d5d5d5";
            yxIdTF=true;
        }
        //值错误为红色
        else{yxDlId.parentElement.style.borderColor="red";}

    },false)

}

/*密码验证函数*/
function fun5(passWord){
    pass1TF=false;
    pass2TF=false;
    //输入框值改变
    passWord.oninput=function(){
        var telDlVal=passWord.value;
        if(telDlVal){
            //后面的清除按钮显示与隐藏
            passWord.nextElementSibling.style.display="inline-block";
        }
        else{passWord.nextElementSibling.style.display="none";}
    }
    //清除按钮的点击事件
    passWord.nextElementSibling.onclick=function(){
        passWord.value="";
        passWord.nextElementSibling.style.display="none";
        passWord.parentElement.style.borderColor="#d5d5d5";

    }
    //输入框获得焦点时判断事件
    passWord.addEventListener('focus',function(){
        var telDlVal=passWord.value;
        if(telDlVal=="" ||/^[a-zA-Z]\w{5,17}$/.test(telDlVal)){
            passWord.parentElement.style.borderColor="#4aafe9";
        }
        else{passWord.parentElement.style.borderColor="red";}
    },false)
    //输入框失去焦点时判断事件
    passWord.addEventListener('blur',function(){
        var telDlVal=passWord.value;
        if(telDlVal==""){
            passWord.parentElement.style.borderColor="#d5d5d5";
        }
        else if(/^[a-zA-Z]\w{5,17}$/.test(telDlVal)){
            passWord.parentElement.style.borderColor="#d5d5d5";
            if(passWord==passWord1){pass1TF=true;}
            else{pass2TF=true;}
        }
        else{passWord.parentElement.style.borderColor="red";}

    },false)
}
/*手机登录验证函数*/
function fun6(boxBtn){
    boxBtn.addEventListener('click',function(e){
        //清除按钮的默认事件
        e.preventDefault();
        //如果手机号和验证码的判定都为true
        if(telDl1TF && inp1TF){
            //跳转到主页面
            window.location.href="zuye.html";
            var Name=telDl1.value;
            //将手机号存储为本地，主页就可以获取到登录的手机号，并进行显示
            localStorage.setItem('name',Name);

        }
        else{alert("请输入正确的手机号和验证码！");}
    },false)
}
/*邮箱登录验证函数*/
function fun7(boxBtn){
    boxBtn.addEventListener('click',function(e){
        //清除默认事件
        e.preventDefault();
        //邮箱名和密码验证都为true
        if(yxIdTF && pass1TF ){
            //跳转到主页
            window.location.href="zuye.html";
            var Name=yxDlId.value;
            //将邮箱名存储为本地，主页就可以获取到登录的邮箱名，并进行显示
            localStorage.setItem('name',Name);

        }
        else{alert("请输入正确的邮箱名和密码！");}
    },false)
}
/*注册按钮的点击验证函数*/
function fun8(boxBtn){
    boxBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(telDl2TF && inp2TF &&pass2TF){
            alert("注册成功，现在可以去登录辣！");
            fun1111();
            /*跳转到登录页面函数*/
            function fun1111(){
                loginwrap.classList.remove('dl');
                regwrap.classList.add('zc');
            }


        }
        else{alert("注册不成功，格式不对！");}
    },false)
}


//如果点击的注册按钮就跳转到注册页面去
//获取在其他页面存入的按钮名称（mfzu,dl）
var localUse=localStorage.getItem('useName');
if(localUse=='mfzc'){
    /*调用去注册按钮的点击事件跳转到注册页面去*/
    gotoreg.onclick();
}


