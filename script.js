let cursor = document.querySelector(".cursor")
document.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursor.style.display = "block"
})
document.addEventListener("mouseleave",()=>{
    cursor.style.display = "none"
})

let h4all = document.querySelectorAll("#Navbar h4")
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
        cursor.style.width = "40px"
        cursor.style.height = "40px"
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "1px solid #fff"
        cursor.style.boxShadow = "0px 0px 50px 15px #95c11e"
        elem.style.color = "#95c11e"
    })
    elem.addEventListener("mouseleave", ()=>{
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.backgroundColor = "#95c11e"
        cursor.style.border = "0px solid #95c11e"
        cursor.style.boxShadow = "0px 0px 200px 100px #95c11e"
        elem.style.color = "#fff"
    })
})

gsap.to("#Navbar",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"100px",
    scrollTrigger: {
        trigger: "#Navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1.5,
    },
});

gsap.to(".Main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".Main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

document.querySelectorAll('.Card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelector('.Card-Container').classList.add('rotate');
    });

    card.addEventListener('mouseleave', () => {
        document.querySelector('.Card-Container').classList.remove('rotate');
    });
});