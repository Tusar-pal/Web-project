const cursr = document.querySelector('#cursor');
document.addEventListener("mousemove",function(i){
    cursr.style.left = i.x+"px"
    cursr.style.top = i.y+"px" 
    
})

const cursr1 = document.querySelector('#cursor_back');
document.addEventListener("mousemove",function(i){
    cursr1.style.left = i.x-300+"px"
    cursr1.style.top = i.y-300+"px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration : 0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        marker:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1 // it is for repeated the animetion
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -40%",
        end:"top -80%",
        scrub:4
    }
})


