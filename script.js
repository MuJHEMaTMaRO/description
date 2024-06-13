var t1 = gsap.timeline()

t1.from("h3",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:1,
})

t1.from("h2",{
    y:-20,
    opacity:0,
    duration:0.3,
    stagger:0.3
})

t1.from("h1",{
    y:-20,
    opacity:0,
    duration:0.3,
})