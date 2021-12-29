// This is a Hidden menu btn and the function makes animation to show inner content with Native Js===========
let menuBtn=document.querySelector('#menuBtn')
let hiddenNav=document.querySelector('.hidden-nav')
menuBtn.addEventListener('click',function(){
    hiddenNav.setAttribute('class','showNav')
})
menuBtn.addEventListener('mouseover',function(){
    menuBtn.style.transform='rotate(180deg)'
})
menuBtn.addEventListener('mouseout',function(){
    menuBtn.style.transform='rotate(0deg)'
})
let closeBtn=document.querySelector('#closeBtn')
closeBtn.addEventListener('click',function(){
    hiddenNav.setAttribute('class','hidden-nav')
})
closeBtn.addEventListener('mouseover',function(){
    closeBtn.style.transform='rotate(180deg)'
})
closeBtn.addEventListener('mouseout',function(){
    closeBtn.style.transform='rotate(0deg)'
})

// This is a hidden menu a tag hovers with Native Js=============================
let hiddenNavA=document.querySelector('.a1')
let hiddenNavA2=document.querySelector('.a2')
let hiddenNavA3=document.querySelector('.a3')
let hiddenNavA4=document.querySelector('.a4')
hiddenNavA.addEventListener('mouseover',function(){
    hiddenNavA.style.color='#244D4D'
})
hiddenNavA.addEventListener('mouseout',function(){
    hiddenNavA.style.color='rgb(219, 219, 219)'
})
hiddenNavA2.addEventListener('mouseover',function(){
    hiddenNavA2.style.color='#244D4D'
})
hiddenNavA2.addEventListener('mouseout',function(){
    hiddenNavA2.style.color='rgb(219, 219, 219)'
})
hiddenNavA3.addEventListener('mouseover',function(){
    hiddenNavA3.style.color='#244D4D'
})
hiddenNavA3.addEventListener('mouseout',function(){
    hiddenNavA3.style.color='rgb(219, 219, 219)'
})
hiddenNavA4.addEventListener('mouseover',function(){
    hiddenNavA4.style.color='#244D4D'
})
hiddenNavA4.addEventListener('mouseout',function(){
    hiddenNavA4.style.color='rgb(219, 219, 219)'
})

// Onscroll animation with Jquerty=====================================
$(function(){
    // this is scroll function for 'Header'======
       $(window).scroll(function(){
           if($(window).scrollTop()>25){
               $('#header').addClass('onScrollHeader')
               $('.logo').addClass('onScrollLogo')
               $('.navA').addClass('onScrollNav')
               $('.menu-searchDiv').addClass('onScrollMenuIcon')
           }else{
               $('#header').removeClass('onScrollHeader')
               $('.logo').removeClass('onScrollLogo')
               $('.navA').removeClass('onScrollNav')
               $('.menu-searchDiv').removeClass('onScrollMenuIcon')  
           }
       })
    // this is scroll animation for Body elements======   
       $(window).scroll(function() {
        // this is an animation from left to right
            $(".animateLeft").each(function() {
                var t = $(this).offset().top
                , o = $(window).scrollTop();
                t < o + 650 && $(this).addClass("animate__fadeInLeft")
            })
        }),
        // this is a Animaten from right to left
        $(window).scroll(function() {
            $(".animateRight").each(function() {
                var t = $(this).offset().top
                , o = $(window).scrollTop();
                t < o + 650 && $(this).addClass("animate__fadeInRight")
            })
        }),
        // this is an animation from down to up 
        $(window).scroll(function() {
            $(".animateUp").each(function() {
                var t = $(this).offset().top
                , o = $(window).scrollTop();
                t < o + 650 && $(this).addClass("animate__fadeInUp")
            })
        })
    })
// this is a Footer buttons animation with Native Js=====================================
let getStartedButton=document.querySelector('#getStartedButton')
let ContactSales=document.querySelector('#ContactSales')

ContactSales.addEventListener('mouseover',()=>{
    getStartedButton.setAttribute('class','ContactSales')
    ContactSales.setAttribute('class','getStartedButton')
})
ContactSales.addEventListener('mouseout',()=>{
    getStartedButton.setAttribute('class','getStartedButton')
    ContactSales.setAttribute('class','ContactSales')
})
// this is a back to top buttons function with Native Js==============================
let backBtn=document.querySelector('#backBtn')
window.onscroll=function() {onScrollBtn()};
let backBtnTm=gsap.timeline({defaults:{duration: 1.5, ease: "power2.out", }});
backBtnTm.fromTo('#backBtn',{y:0,opacity:1},{y:10,opacity:1,yoyo:true,repeat:-1})
function onScrollBtn(){
    if(document.body.scrollTop > 25  || document.documentElement.scrollTop > 20){
        backBtn.style.display='block'
    }else{
        backBtn.style.display='none'
    }
}
function scrollBack(){
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
}


// LocalStorage


