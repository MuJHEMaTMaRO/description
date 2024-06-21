var initialPath = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")
var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var image = document.querySelector("#image")


var tl = gsap.timeline()

string.addEventListener("mousemove", function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr: {d: initialPath},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0,2)"
    })
})

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5
    })
})

image.addEventListener("mouseenter", function(dets){
    cursor.innerHTML = "Lets Go"
    gsap.to(cursor,{
        scale: 4,
        duration: 0.3,
        backgroundColor: "#ffffff8c"
    })
})

image.addEventListener("mouseleave", function(dets){
    cursor.innerHTML = " "
    gsap.to(cursor,{
        scale: 1,
        duration: 0.3,
        backgroundColor: "#fff"
    })
})


var open = document.querySelector("#nav i")
var close = document.querySelector("#full i")

tl.to("#full", {
        right: 0,
        duration: 0.2
})

tl.from("#full h1", {
    x:100,
    duration: 0.3,
    stagger: 0.1,
    opacity: 0
})

tl.from("#full i", {
    opacity: 0,
    duration: 0.2
})

tl.pause()
// default navbar is closed 

open.addEventListener("click", function(){
    tl.play()
})

close.addEventListener("click", function(){
    tl.reverse()
})


