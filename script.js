const btn = document.querySelectorAll(".slider-btn");
const mover = document.querySelector(".slider-wrap ul");
const slides = mover.querySelectorAll("li")
let count = 0
slides[count].classList.add("active")
const onMove = () => {
    const active = mover.querySelector(".active") 
    const next = active.nextElementSibling
    if(next) {
        let {width} = getComputedStyle(next)
        count++;
        mover.style.transform = `translateX(${-parseInt(width)*count}px)`
        active.classList.remove("active")
        next.classList.add("active")
    }
    else {
        mover.style.transform = `translateX(0px)`
        count = 0
        active.classList.remove("active")
        slides[count].classList.add("active")
    }
}
const backMove=()=> { 
    const active = mover.querySelector(".active")
    const prev = active.previousElementSibling
    if(prev) {
        let {width} = getComputedStyle(prev)
        count-- ;
        mover.style.transform = `translateX(${-parseInt(width)*count}px)`
        console.log(mover.style.transform)
        active.classList.remove("active")
        prev.classList.add("active")

    }
    else {
        const arr = Array.from(slides)
        lastindex = arr.length-1
        count = lastindex
        let {width} = getComputedStyle(slides[lastindex])
        mover.style.transform = `translateX(${-parseInt(width)*count}px)`
        active.classList.remove("active")
        slides[count].classList.add("active")
    }
}
btn.forEach(elem => {
    if(elem.classList.contains("slider__next")) {
        elem.addEventListener("click", onMove)
    }
    else if (elem.classList.contains("slider__prev")){
        elem.addEventListener("click", backMove)
    }
})
