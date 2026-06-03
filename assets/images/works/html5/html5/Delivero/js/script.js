

function animate(){
	tl = gsap.timeline();
	tl.to("#mainContainer", 0, { autoAlpha: 1 }, "start");
	tl.to("#raincircle", 0.1, { opacity:1 }, "start+=0.75");
	// tl.to('.circles', { duration:0.5, scale:2, y:0, opacity:0, stagger:0.1, repeat:-1, ease:Linear.easeNone});
	tl.to("#introLogo", .3, { scale:.6,opacity:0,  ease: Power1.easeOut }, "start+=.5")
	tl.to("#copy1", .5, { opacity:1,  ease: Power1.easeOut }, "start+=.75")
	
	tl.to("#logo", .25, {opacity:1,  ease: Power2.easeOut }, "start+=1.3")
	tl.from("#bgTable", .2, {x:-250,y:200, opacity:0,  ease: Power2.easeOut }, "start+=1.3")
	tl.from("#bag", .5, {y:600,  ease: Power2.easeOut }, "start+=1.5")
	
	tl.to("#copy1", .5,{opacity:0, ease: Power2.easeOut}, "start+=3.25")
	tl.from("#copy2", .5,{opacity:0, ease: Power2.easeOut}, "start+=3.75")
	tl.to("#bag", .3,{y:265, ease: Power2.easeIn}, "start+=3.5")
	tl.from("#bottle", .5,{y:600,ease: "expo.out",}, "start+=4")
	
	tl.to("#copy2", .5,{opacity:0, ease: Power2.easeOut}, "start+=5.5")
	tl.to("#copy3", .5,{opacity:1,ease: Power2.easeOut}, "start+=6")

	// tl.to("#bottle", .5,{scale:1.1, ease:Bounce.easeOut}, "start+=5.5")
	// tl.to("#bottle", .2,{scale:1}, "start+=6")

	
	tl.to("#logoWhite", .25, {opacity:0,  ease: Power2.easeOut }, "start+=6")
	tl.to("#logo", .25, {opacity:1,  ease: Power2.easeOut }, "start+=6")
	

	tl.to("#bottle", .3,{y:600,ease: Power2.easeIn}, "start+=9")
	tl.to("#copy3", .5,{opacity:0,ease: Power2.easeOut}, "start+=9")
	tl.to("#bgTable", .4, {x:250,y:200, opacity:0,  ease: Power2.easeOut }, "start+=9.2")
	tl.to("#rain-container, #raincircle", .4, {opacity:0,  ease: Power2.easeOut, onComplete: function(){ stopani();} }, "start+=9.2")


	tl.from("#deviverooLogo", .75, {y:-150, opacity:0,  ease: Power2.easeOut }, "start+=9.2")
	tl.to("#deviverooLogo", .75, {y:42, opacity:1,  ease: Power2.easeOut }, "start+=9.3")
	tl.from("#logos", .5, {y:-75, opacity:0,  ease: Power2.easeOut }, "start+=9.3")
	tl.to("#legal,#cta", .5, {opacity:1,  ease: Power2.easeOut }, "start+=9.5")

	tl.to("#cta", .5,{scale:1.1, ease:Bounce.easeOut}, "start+=9.7")
	tl.to("#cta", .2,{scale:1}, "start+=10.2");
	
	
	
	
	console.log(tl.totalDuration());
}

function stopani(){
    document.getElementById('rain-container').innerHTML = " ";
    document.getElementById('raincircle').innerHTML = " ";
}



function rain(){

	var dropletQuantity = 20;
	var circleQuantity = 20;

	for (var i = dropletQuantity - 1; i >= 0; i--) {
		var posX = Math.floor((Math.random() * 100) + 1);
		var posY = Math.floor((Math.random() * 100) + 1);
		var delay = Math.random();
		var speed = (Math.random() * 0.5) + 1;
		
		droplet = document.createElement("div");
		droplet.className = "droplet";
		droplet.style.left = posX + "%";
		gsap.to(droplet, speed, { y :520, x:-200, delay : delay, repeat:-1,ease:Linear.easeNone});
		document.getElementById('rain-container').appendChild(droplet);
	}
	for (var i = circleQuantity - 1; i >= 0; i--) {
		var delay = range(.5, 1.4);
		var speed = (Math.random() * 0.5) + 1;
		circles = document.createElement("div");
		circles.className = "circles";
		circles.setAttribute('id', 'circle'+i);
	//   circles.style.left = posX/1.5 + "%";
	//   circles.style.top = posY + "%";
	//   console.log(posX);
	//   console.log(posY);
		
		// gsap.to(circles, .1, {x:Math.round(range(20, 500))});
		gsap.to(circles, .6, {scale:Math.round(range(2, 4)), delay : delay, repeat:-1,ease:Linear.easeNone});
		document.getElementById('raincircle').appendChild(circles);
	}
}

/** Called on the window load event. **/
function init() {
	animate();
	rain();
}

/** Main onload handler **/
window.addEventListener('load', init);


// RANDOM NUMBER 
function range(min, max) {
    return Math.random() * (max - min) + min;
}