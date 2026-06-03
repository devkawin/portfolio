var tl;

var repCount = 0;

var ctaTransformOrigin = "32px 222px";

const val = { distance: 0 };

const val2 = { distance: 0 };

document.addEventListener("DOMContentLoaded", function(event) {
    tl = gsap.timeline({ repeat: 1, repeatDelay: 0.5, onComplete: checkTime });
    tl_line = gsap.timeline({});
    tl_black_line = gsap.timeline({});
    tl_zoom = gsap.timeline({});
    tl_sparkle = gsap.timeline({});
    tl_steam = gsap.timeline({});

    document.getElementById('outer_wrapper').addEventListener('mouseover', function() {
        gsap.to([cta_circle, cta_arrow], 0.3, { scale: 1.05, transformOrigin: ctaTransformOrigin, rotationZ: 0.01, force3D: true })
        gsap.to([cta_circle, cta_arrow], 0.3, { scale: 1, transformOrigin: ctaTransformOrigin, delay: 0.3, rotationZ: 0.01, force3D: true })
    })
    iconList = document.getElementsByClassName("icons");
    playMainAnimation();
});

playMainAnimation = function() {
    gsap.set(inner_wrapper, { display: "block" })
    gsap.to(inner_wrapper, 0.5, { opacity: 1, ease: "sine.inOut" }, "+=0.25")


    tl.set(line, { strokeDashoffset: 537 })
        .set(line, { strokeDasharray: 537 })

        .set(black_line_svg, { strokeDashoffset: 140 })
        .set(black_line_svg, { strokeDasharray: 140 })

        .set(cta_arrow_container, { left: 18, width: 26 })
        .set(cta_arrow, { left: -18, x: 0 })

        .set(black_line, { scale: 1.4, x: 164, y: 982 })

        .set(line_svg, { x: 57, y: 123, scale: 1.5 })
        .set([bg02, bg02_copy], { x: -4, y: -42, scale: 2.75, transformOrigin: "160px center" })
        .set(color_line, { x: -4, y: -54, scale: 2.75, transformOrigin: "160px center" })
        .set([bg01, bg02], { top: -180 })

        .set([steam01, steam02], { x: 0, y: 150 })

    tl.addLabel("frame01")
        .to([black_bg, logo], 0.5, { opacity: 0, ease: "sine.inOut" }, "+=1")
        .add(tl_black_line)

        .set([steam01, steam02], { opacity: 0.8 })

    tl.addLabel("frame02")
        .add(tl_steam)
        .to([copy01, fr1_vector, black_line], 0.5, { opacity: 0, ease: "sine.inOut" }, "fr2+=4")
        .to([fr1_vector, black_line, white_bg], 0.5, { opacity: 0, ease: "sine.inOut" }, "fr2+=4.35")
        .to([copy02], 0.5, { opacity: 1, ease: "sine.inOut" }, "fr2+=4.35")
        .add(tl_line,"+=1")


    tl.addLabel("frame03")
        .to([bg01, copy02, steam01, steam02], 0.5, { opacity: 0, ease: "sine.inOut" }, "fr3+=1.35")
        .add(tl_zoom, "zoom")
        .to([copy03], 0.5, { opacity: 1, ease: "sine.inOut" }, "zoom")

    tl.addLabel("frame04")
        .to([bg02, copy03, color_line, line_container, bg02_copy], 0.5, { opacity: 0, ease: "sine.inOut" }, "fr4+=3")
        .to([bg03, copy04], 0.5, { opacity: 1, ease: "sine.inOut" })

        .to([copy04, cta_container, cta_copy], 0.5, { opacity: 1, ease: "sine.inOut" }, "bg4")

        .to(iconList, 0.35, { stagger: 0.25, opacity: 1, ease: "sine.inOut" })

        .to(cta_arrow, 0.5, { x: 22, ease: "sine.inOut" })
        .set(cta_arrow, { x: -22 })
        .to(cta_arrow, 0.5, { x: 0, ease: "sine.inOut" })

    tl_steam.addLabel("frame01")
        .to([steam01, steam02], 10, { y: -35, ease: "sine.inOut" }, "steam")
    // .to([steam01, steam02], 1, { opacity: 0, ease: "sine.inOut" }, "steam+=1.5")


    tl_line.addLabel("frame01")
        .to(line, 4, { strokeDashoffset: 0, ease: "none" }, "line")
        .to(val, 4.6, {
            distance: line.getTotalLength(),
            onUpdate: () => {
                const point = line.getPointAtLength(val.distance);
                if (point.x <= 365) {
                    circle.setAttribute('cx', point.x);
                }
                circle.setAttribute('cy', point.y);
            },
            ease: "none"
        }, "line")

        .set(circle, { fill: "#fffb00" }, "line")
        .to(circle, 0.5, { fill: "#ff6600", ease: "sine.inOut" }, "line+=0.2")
        .to(circle, 0.5, { fill: "#fffb00", ease: "sine.inOut" }, "line+=1.9")
        .to(circle, 0.5, { fill: "#00ff00", ease: "sine.inOut" }, "line+=2.45")

    tl_black_line.addLabel("frame01")
        .to(black_line_svg, 4, { strokeDashoffset: 0, ease: "steps(4)" }, "black_line")
        .to(val2, 4, {
            distance: black_line_svg.getTotalLength(),
            onUpdate: () => {
                const point2 = black_line_svg.getPointAtLength(val2.distance);
                black_circle_svg.setAttribute('cx', point2.x);
                black_circle_svg.setAttribute('cy', point2.y);
            },
            ease: "steps(4)"
        }, "black_line")
        .set([black_circle_svg, black_line_svg], { opacity: 1 }, "black_line+=1")

    tl_zoom.addLabel("frame01")
        .to(line_container, 1.25, { x: 99, rotationZ: 0.01, force3D: true, ease: "sine.inOut" }, "zoom")
        .to([bg02, bg02_copy, color_line], 1.25, { x: 0, y: 0, scale: 1, rotationZ: 0.01, force3D: true, ease: "sine.inOut" }, "zoom")
        .to(line_svg, 1.25, { y: 69, scale: 0.625, rotationZ: 0.01, force3D: true, ease: "sine.inOut" }, "zoom")
        .to(bg02_copy, 0.5, { opacity: 1, ease: "sine.inOut" }, "zoom")
        .to(line_svg, 2.25, { x: -127, ease: "sine.inOut" }, "zoom-=1")

    //    tl.seek("frame02")
    // GSDevTools.create({});

    //looping code
    tl.to(logo, 0.15, { onComplete: checkRep }, "+=0.5")
    tl.to([logo, black_bg], 0.5, { opacity: 1, ease: "sine.inOut" }, "loop+=1.5")

}

function checkTime() {
    console.log("Time at this point is " + tl.totalTime().toFixed(2));
}


function checkRep() {

    checkTime();
    repCount += 1;

    if (repCount > 1) {
        tl.pause();
    }

}