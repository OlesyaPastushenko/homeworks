function animOnScroll() {
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    const allCards = document.querySelectorAll("._card")
    for (let i=0;i<allCards.length; i++){
        const animItem = allCards[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        
        let animItemPoint = window.innerHeight - animItemHeight/animStart;
        if((pageYOffset>animItemOffset - animItemPoint) && pageYOffset<(animItemOffset + animItemHeight)) {
            animItem.classList.add("_active");
        } else {
            if (!animItem.classList.contains("_noanim")) {
            animItem.classList.remove("_active")}
        }
    }
}
export default animOnScroll