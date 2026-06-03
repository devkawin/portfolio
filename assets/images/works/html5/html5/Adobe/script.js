function initAnimation(){
    const tl = gsap.timeline({ repeat:0, repeatDelay:2.5});
    var intro = 0;
    var frame1 = 1.5;
    var frame2 = 1.9;
    var frame3 = 4;
    var frame4 = 7;
    
    tl

    .set("#mobile", {scale:1.3, opacity: 0})
    .set("#mobileCopyContainer, #spriteContainer", {opacity: 0})
    .set(".frame2Copy, .frame3Copy, .frame4Copy", {y:20, opacity: 0})
    .set("#message1, #message2, #message3, #message4Container", {scale:0.5, opacity: 0})
    
    //Frame1
    .to("#mainContainer", 0, {opacity:1, ease:Power1.easeIn }, intro)
    .to(".frame1Copy",0.3,{y: 0, opacity: 1, stagger:0.2, ease:Power1.easeOut}, intro)
    .to(".frame1Copy",0.3,{opacity: 0, ease:Power1.easeOut}, frame1)
    .to("#modelContainer", 0.3, {scale:0.8, opacity: 0, ease:Power1.easeIn }, frame1)
                 
    .set(".frame1Copy, #cta", {y:20})
    .set("#modelContainer", {scale:1.3})
            
    //Frame2
    .to("#mobile", 0.3, {scale:1, opacity: 1, ease:Power1.easeOut }, frame2-0.1)
    .to("#mobileCopyContainer", 0.4, {opacity: 1, ease:Power1.easeOut }, frame2)
    .to(".frame2Copy",0.3,{y: 0, opacity: 1, stagger:0.2, ease:Power1.easeOut}, frame2)
    .to("#message1", 0.3, {opacity: 1, scale:1, "filter": "blur(0px)", ease:Power1.easeOut }, frame2+0.1)
    .to("#message1", 0.4, {scale:0.48, x: -76, y:-59, ease:Power1.easeOut }, frame2+0.5)
    .to("#message2", 0.4, {opacity: 1, scale:1, "filter": "blur(0px)", ease:Power1.easeOut }, frame2+0.5)
    .to("#message2", 0.4, {scale:0.715, x: -41, y:-22, ease:Power1.easeOut }, frame2+1)
    
    //Frame3
    .to("#message2", 0.2, { opacity: 0, ease:Power1.easeOut }, frame3)
    .to("#message1", 0.35, { opacity: 0, ease:Power1.easeOut }, frame3+0.1)
    .to(".frame2Copy", 0.3, { opacity: 0, ease:Power1.easeOut }, frame3)
    .to("#message3", 0.3, {opacity: 1, scale:1, "filter": "blur(0px)", ease:Power1.easeOut }, frame3)
    .to("#blueBg", 0.3, {width: "100%", ease:Power1.easeOut }, frame3+0.4)
    .to(".frame3Copy",0.3,{y: 0, opacity: 1, stagger:0.2, ease:Power1.easeOut}, frame3+0.15)
    .to("#message3", 0.4, {scale:0.49, x: -74, y:-39, ease:Power1.easeOut }, frame3+0.5)

    //Typing animation starts
    .to("#message4Container", 0.2, { opacity: 1, scale:1, ease:Power1.easeOut }, frame3+0.6)
    
    .to("#message4Container", 0.4, { width: "20px", ease:"steps(10)"} , frame3+1.1)
    .to("#message4Copy1", 0, { "display": "none", ease:"steps(10)"} , frame3+1.5)
    .to("#mobileCopyInnerContainer", 0.5, { width: "10%", ease:"steps(10)"} , frame3+1.1)
    .to("#mobileCopy1", 0, { display: "none", ease:"steps(10)"} , frame3+1.6)
    
    .to("#message4Container", 0.05, { top: "423px", height: "54px", ease:Power1.easeOut }, frame3+1.5)
        
    .to("#message4Container", 0.4, { width: "278px", ease:"steps(10)" }, frame3+1.6)
    .to("#message4Copy2", 0, { opacity: 1, top: "-425px", ease:Power1.easeOut} , frame3+1.6)
    .to("#mobileCopy2", 0, { opacity: 1, ease:"steps(10)"} , frame3+1.6)
    .to("#mobileCopyInnerContainer", 0.5, { width: "100%", ease:"steps(10)"} , frame3+1.6)
    //Typing animation ends
        
    //Frame4
    .to(".frame3Copy, #spriteContainer", 0.3, { opacity: 0, ease:Power1.easeOut }, frame4)
    .to("#mobile, #mobileCopyContainer, #message3, #message4Container", 0.3, { opacity: 0, ease:Power1.easeOut }, frame4)
    .to(".frame4Copy",0.3,{y: 0, opacity: 1, stagger:0.2, ease:Power1.easeOut}, frame4+0.1)
    .to("#f1Copy3",0.3,{y: 0, opacity: 1, ease:Power1.easeOut}, frame4+0.45)
    .to("#cta",0.3,{y: 0, opacity: 1, ease:Power1.easeOut}, frame4+0.6)
    .to("#modelContainer",0.4,{scale: 1, opacity: 1, ease:Power1.easeOut}, frame4+0.1)

}

function startBanner() {
    mainContainer.style.display = "block";
	initAnimation();	
}

window.addEventListener("load", startBanner);