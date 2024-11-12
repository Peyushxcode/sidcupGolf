var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursor-b");
var initialPath = `M 10 100 Q 400 100 790 100`

var finalPath=`M 10 100 Q 400 100 790 100`

var string = document.querySelector("#string")

string.addEventListener('mousemove', function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 790 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out" 
    })
})

string.addEventListener('mouseleave',function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5 ,
        ease:"elastic.out(1,0.2)"
    })
})

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrb.style.left = dets.x - 200 + "px";
    crsrb.style.top = dets.y - 200 + "px";
});

gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        scrub:1,
        // markers : true
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger:"#main",
        scroller:"body",
        // markers : true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });
  gsap.to("#pageEx h1",{
    transform: "translateX(-160%)",
    scrollTrigger:{
        trigger:"#pageEx",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });