
const createSelect = (variants) => {
    const elem = document.createElement("select")
    if (Array.isArray(variants)){
       variants.forEach(el => {
        let opt = document.createElement("option")
        opt.setAttribute("value",el)
        opt.innerHTML = el
        elem.append(opt)       
        });
    }
    else {
    if(typeof variants ==="object"){
        let options = Object.keys(variants)
        options.forEach(el => {
            let opt = document.createElement("option")
            opt.setAttribute("value",el)
            opt.innerHTML = el
            elem.append(opt)       
        });
    }
    else {
        let option = document.createElement("option")
        option.setAttribute("value", variants)
        option.innerHTML = variants
        elem.append(option)
    }
    }

    return elem
}
export default createSelect