// About us section Img Hovers (Native Js)=======================
let img1 = document.querySelector(".img1");
img1.addEventListener("mouseover", function() {
    img1.style.opacity = "0.6", img1.style.transform = "scale(1.1)"
}), img1.addEventListener("mouseout", function() {
    img1.style.opacity = "1", img1.style.transform = "scale(1)"
});
let img2 = document.querySelector(".img2");
img2.addEventListener("mouseover", function() {
    img2.style.opacity = "0.6", img2.style.transform = "scale(1.1)"
}), img2.addEventListener("mouseout", function() {
    img2.style.opacity = "1", img2.style.transform = "scale(1)"
});
let img3 = document.querySelector(".img3");
img3.addEventListener("mouseover", function() {
    img3.style.opacity = "0.6", img3.style.transform = "scale(1.1)"
}), img3.addEventListener("mouseout", function() {
    img3.style.opacity = "1", img3.style.transform = "scale(1)"
});
let img4 = document.querySelector(".img4");
img4.addEventListener("mouseover", function() {
    img4.style.opacity = "0.6", img4.style.transform = "scale(1.1)"
}), img4.addEventListener("mouseout", function() {
    img4.style.opacity = "1", img4.style.transform = "scale(1)"
});
// Menu button function to see hidden menu content (Native Js)============
let menuBtn = document.querySelector("#menuBtn"),
    hiddenNav = document.querySelector(".hidden-nav");
menuBtn.addEventListener("click", function() {
    hiddenNav.setAttribute("class", "showNav")
}), menuBtn.addEventListener("mouseover", function() {
    menuBtn.style.transform = "rotate(180deg)"
}), menuBtn.addEventListener("mouseout", function() {
    menuBtn.style.transform = "rotate(0deg)"
});
// Close menu button to hide hidden menu content (Native Js)===========
let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", function() {
    hiddenNav.setAttribute("class", "hidden-nav")
}), closeBtn.addEventListener("mouseover", function() {
    closeBtn.style.transform = "rotate(180deg)"
}), closeBtn.addEventListener("mouseout", function() {
    closeBtn.style.transform = "rotate(0deg)"
});
// Hidden menu content a href hovers (Native Js)===============
let hiddenNavA = document.querySelector(".a1"),
    hiddenNavA2 = document.querySelector(".a2"),
    hiddenNavA3 = document.querySelector(".a3"),
    hiddenNavA4 = document.querySelector(".a4");  
    hiddenNavA.addEventListener("mouseover", function() {
    hiddenNavA.style.color = "#244D4D"
}), hiddenNavA.addEventListener("mouseout", function() {
    hiddenNavA.style.color = "rgb(219, 219, 219)"
}), hiddenNavA2.addEventListener("mouseover", function() {
    hiddenNavA2.style.color = "#244D4D"
}), hiddenNavA2.addEventListener("mouseout", function() {
    hiddenNavA2.style.color = "rgb(219, 219, 219)"
}), hiddenNavA3.addEventListener("mouseover", function() {
    hiddenNavA3.style.color = "#244D4D"
}), hiddenNavA3.addEventListener("mouseout", function() {
    hiddenNavA3.style.color = "rgb(219, 219, 219)"
}), hiddenNavA4.addEventListener("mouseover", function() {
    hiddenNavA4.style.color = "#244D4D"
}), hiddenNavA4.addEventListener("mouseout", function() {
    hiddenNavA4.style.color = "rgb(219, 219, 219)"
});
// on click hidden menu content texts closes menu=============
let hiddenLi=document.querySelectorAll('.hiddenLi')
    hiddenLi.forEach(element =>{
        element.addEventListener('click',function(){
            hiddenNav.style.display='none'
        })
    }) 
// About us section button hover (Native Js)============
let btn = document.querySelector("#btn");
btn.addEventListener("mouseover", function() {
    btn.style.boxShadow = "0px 5px 10px #244D4D", btn.style.transform = "translate(0,3px)"
}), btn.addEventListener("mouseout", function() {
    btn.style.boxShadow = "none", btn.style.transform = "translate(0,0)"
});
// GSAP animation =======================
var tl = gsap.timeline({
    defaults: {
        duration: .75,
        ease: "power2.out"
    }
});
tl.fromTo("#header", {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}), tl.fromTo("#WraperImg", {
    x: 300,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}), tl.fromTo("#wraperDots", {
    y: 400,
    opacity: 0,
    rotation: "200deg"
}, {
    y: -250,
    opacity: 1,
    rotation: "0deg"
}), tl.fromTo("#wraperH1", {
    x: 250,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<"), tl.fromTo("#wraperP", {
    x: 150,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, "<"), tl.fromTo(".dealIcon", {
    y: 0
}, {
    y: -10,
    yoyo: !0,
    repeat: -1
}), tl.fromTo(".h1Img", {
    y: 0
}, {
    y: -10,
    yoyo: !0,
    repeat: -1
}, "<"),

// Scroll animation to Header navigation (jQuery)================
$(function() {
    $(window).scroll(function() {
        $(window).scrollTop() > 25 ? ($("#header").addClass("onScrollHeader"), $(".logo").addClass("onScrollLogo"), $(".navA").addClass("onScrollNav"), $(".menu-searchDiv").addClass("onScrollMenuIcon")) : ($("#header").removeClass("onScrollHeader"), $(".logo").removeClass("onScrollLogo"), $(".navA").removeClass("onScrollNav"), $(".menu-searchDiv").removeClass("onScrollMenuIcon"))
    }), $(window).scroll(function() {
        $(".animateLeft").each(function() {
            $(this).offset().top < $(window).scrollTop() + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }), $(window).scroll(function() {
        $(".animateRight").each(function() {
            $(this).offset().top < $(window).scrollTop() + 650 && $(this).addClass("animate__fadeInRight")
        })
    }), $(window).scroll(function() {
        $(".animateUp").each(function() {
            $(this).offset().top < $(window).scrollTop() + 650 && $(this).addClass("animate__fadeInUp")
        })
    })
});
// Footer buttons hovers (Native Js)==============
let getStartedButton = document.querySelector("#getStartedButton"),
    ContactSales = document.querySelector("#ContactSales");
ContactSales.addEventListener("mouseover", () => {
    getStartedButton.setAttribute("class", "ContactSales"), ContactSales.setAttribute("class", "getStartedButton")
}), ContactSales.addEventListener("mouseout", () => {
    getStartedButton.setAttribute("class", "getStartedButton"), ContactSales.setAttribute("class", "ContactSales")
});
// back to top button show on scroll (Native Js)===============
let backBtn = document.querySelector("#backBtn");
window.onscroll = function() {
    onScrollBtn()
}
function onScrollBtn() {
    document.body.scrollTop > 25 || document.documentElement.scrollTop > 20 ? backBtn.style.display = "block" : backBtn.style.display = "none"
}
function scrollBack() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
// back to top jumping animation (GSAP)================
let backBtnTm = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: "power2.out"
    }
});
backBtnTm.fromTo("#backBtn", {
    y: 0,
    opacity: 1
}, {
    y: 10,
    opacity: 1,
    yoyo: !0,
    repeat: -1
});


