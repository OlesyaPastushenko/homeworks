// // $(document).ready(function(){
// //     var title = $("h1")
// //     $("h1").css({
// //         color: "red"
// //     })
// //     $("h1").addClass("test")
// //     console.log($(".btn"))
// //     $(".btn").on("click",function(e){
// //         $(".btn").removeClass("active")
// //         $(this).addClass("active")
// //         $(this).animate({
// //             marginLeft: 100
// //         },{
// //             duration: 3000,
// //             comlete: function(){
// //                 $(this).css({
// //                     background: "red"
// //                 })
// //             }
// //         })
// //     })

// // })
// $(document).ready(function () {
//     const opt = {
//       rot: 0,
//       section: 12,
//       item: 360 / this.section,
//     };
//     var but = $(".press");
//     console.log();
//     $(".desk img").animate();
//     but.on("click", function (e) {
//       e.preventDefault();
//       opt.rot = Math.floor(Math.random() * opt.section + 1);
//       console.log(opt.rot);
//     });
//   });
const  myDino = document.querySelector(".dino")
const fig = document.querySelector(".fig")
const dis = document.querySelector(".var")
const h1 = document.querySelector("h1")
const dinoBody = document.querySelector(".dinoBody")
const dinoEyes = document.querySelector(".dinoEyes")
const dinoMouth = document.querySelector(".dinoMouth")
const dinoHat = document.querySelector(".hat")
const dinoScale = document.querySelector(".scale")
const dinoSpots = document.querySelector(".spots")
var dino = [
    {
        name: "body_color",
        icon: "./source/icons/1.png",
        items: ["./source/body_color/1.png",
                "./source/body_color/2.png",
                "./source/body_color/3.png",
                "./source/body_color/4.png",
                "./source/body_color/5.png",
                "./source/body_color/6.png"]

    },
    {
        nmyDinoame: "eyes",
        icon: "./source/icons/2.png",
        items: ["./source/eyes/1.png",
                "./source/eyes/2.png",
                "./source/eyes/3.png",
                "./source/eyes/4.png",]
    },
    {
        name: "head",
        icon: "./source/icons/3.png",
        items: ["./source/head/1.png",
        "./source/head/2.png",
        "./source/head/3.png",]
    },
    {
        name: "mouth",
        icon: "./source/icons/4.png",
        items: ["./source/mouth/1.png",
        "./source/mouth/2.png",
        "./source/mouth/3.png"]
    },
    {
        name: "scale",
        icon: "./source/icons/6.png",
        items: ["./source/scale/1.png",
        "./source/scale/2.png",
        "./source/scale/3.png"]
    },
    {
        name: "spots",
        icon: "./source/icons/5.png",
        items: ["./source/spots/1.png",
        "./source/spots/2.png",
        "./source/spots/3.png",
        "./source/spots/4.png",]

    }


] 
let nodes = [];
dino.forEach(element => {
    let fig_el = document.createElement("div");
    fig_el.className = "fig_el" ;
    fig.append(fig_el)
    let pic = document.createElement("div")
    pic.className = "pic";
    pic.style.backgroundImage = `url(${element.icon})`
    fig_el.append(pic)
    fig_el.addEventListener("click", ()=>{
        nodes.forEach((el) => {el.remove()})
        element.items.forEach((el) => {
            const design = document.createElement("div")
            nodes.push(design)
            design.className = "fig_el";
            const image = document.createElement("img")
            image.setAttribute("src", el)
            if(!el.includes("eyes")){
            image.className = "pic"
            }
            design.append(image)
            dis.append(design)
        })
        nodes.forEach((el) => {
            if (el.firstChild.getAttribute("src").includes("body_color")){
            el.addEventListener("click",()=>{
                console.log(el.firstChild)
                console.log(el.firstChild.getAttribute("src"))
                let source = el.firstChild.getAttribute("src")
                h1.innerHTML = ""
                dinoBody.style.backgroundImage = `url(${source})`
            })
            }
            else if (el.firstChild.getAttribute("src").includes("eyes")){
                el.addEventListener("click",()=>{
                    console.log(el.firstChild)
                    console.log(el.firstChild.getAttribute("src"))
                    let source = el.firstChild.getAttribute("src")
                    h1.innerHTML = ""
                    dinoEyes.style.backgroundImage = `url(${source})`
                })
                }
            else if (el.firstChild.getAttribute("src").includes("mouth")){
                el.addEventListener("click",()=>{
                    console.log(el.firstChild)
                    console.log(el.firstChild.getAttribute("src"))
                    let source = el.firstChild.getAttribute("src")
                    h1.innerHTML = ""
                    dinoMouth.style.backgroundImage = `url(${source})`
                })
                } 
            else if (el.firstChild.getAttribute("src").includes("head")){
                el.addEventListener("click",()=>{
                    console.log(el.firstChild)
                    console.log(el.firstChild.getAttribute("src"))
                    let source = el.firstChild.getAttribute("src")
                    h1.innerHTML = ""
                    dinoHat.style.backgroundImage = `url(${source})`
                })
                } 
            else if (el.firstChild.getAttribute("src").includes("scale")){
                el.addEventListener("click",()=>{
                    console.log(el.firstChild)
                    console.log(el.firstChild.getAttribute("src"))
                    let source = el.firstChild.getAttribute("src")
                    h1.innerHTML = ""
                    dinoScale.style.backgroundImage = `url(${source})`
                })
                }
            else if (el.firstChild.getAttribute("src").includes("spots")){
                el.addEventListener("click",()=>{
                    console.log(el.firstChild)
                    console.log(el.firstChild.getAttribute("src"))
                    let source = el.firstChild.getAttribute("src")
                    h1.innerHTML = ""
                    dinoSpots.style.backgroundImage = `url(${source})`
                })
                }    
        })
    })
})