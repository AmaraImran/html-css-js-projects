function Page1Animation(){
    var tl=gsap.timeline()

tl.from("nav h1 ,nav h4 , nav button",{
    duration:0.5,
        y:-30,
        opacity:0,
        stagger:0.3,
        delay:0.3
    
})
tl.from(".center-part1",{
    x:-500,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 h1",{
    x:-100,
    opacity:0,
    duration0:0.5
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration0:0.5
})
tl.from(".center-part1 button",{
    
    opacity:0,
    duration0:0.5
})
tl.from(".center-part2 img",{
duration:0.5,
opacity:0
},"-=1")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.3
})
}


function Page2Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
    
    scroller :"body",
    start:"top 50%",
    end:"top 0",
   
    scrub:2
    }
})
tl2.from(".services h3",{
   opacity:0,
    x:-100,
    duration:0.2
   
})
tl2.from(".elem.line.left",{
    x:-200,
    opacity:0,
    duration:2
},"anim")
tl2.from(".elem.line.right",{
    x:200,
    opacity:0,
    duration:2
},"anim")
tl2.from(".elem.line2.left",{
        x:-200,
    opacity:0,
    duration:2
},"anim2")
tl2.from(".elem.line2.right",{
        x:200,
    opacity:0,
    duration:2
},"anim2")

}
function page3Animation(){
    var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",  
    
      start: "top 80%",  
      end: "bottom 20%",
    //   scrub: true        
    }
  });

  tl3.from(".section3 h1", {
    x: -300,
    opacity:0,
    duration: 1
  });
  tl3.from(".section3 p",{
    x:-300,
    opacity:0,
    duration:0.5
  })
  tl3.from(".section3 img",{
    x:300,
    opacity:0,
    duration:0.5
  })
    
}
Page1Animation()
Page2Animation()
page3Animation()