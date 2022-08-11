const helperCreateId = (tag, id) => {
    const elem = document.createElement(tag)
    elem.id = id
    return elem
}
const helperCreateClass = (tag = "h2", classes = "test",text = "", style = {}) => {
    const strStyle = JSON.stringify(style)
    .replace(/"/g,"")
    .replace(/,/g,";")
    .replace(/{/g,"")
    .replace(/}/g,";")
    const elem = document.createElement(tag)
    elem.className = classes
    elem.innerHTML = text
    elem.style.cssText =strStyle
    return elem
}

export { helperCreateClass, helperCreateId };