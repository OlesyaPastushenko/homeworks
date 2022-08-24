// Необходимо сделать форму товара с валидацией.

// 1. Название - текст, до 25 символов

// 2. Цена - число не больше 2 десятичных знаков.
// Разделитель точка или запятая.

// 3. Единица измерения - принимаем "шт", "кг", "л", "ед" 
// - и больше ничего

// 3. Описание - текст, до 150 символов.

// Для полей название и описание создать функцию,
// проверяющую на капс лок. Если используется капс 
// - исправить текст по сценарию:

// БЛЮДА ОТ ШЕФА -> Блюда От Шефа

// ЛЮБИМЫЕ блюда ВАСИ -> Любимые блюда Васи

// КАБАРДИНО-БАЛКАРСКАЯ КУХНЯ -> Кабардино-Балкарская Кухня

// 4 . Добавить поле для ввода поле со ссылкой на 
// товар - валидировать ссылку, если не хватает 
// https:// вначале ссылки - то добавить



const goodName = testForm.elements.text_name
const goodPrice = testForm.elements.text_price
const select = testForm.elements.select
const desciption = testForm.elements.textarea
const link = testForm.elements.link
const userError = document.getElementsByClassName("msg")[0]
let arrError = []


const Correction = (val) => {
   let newArray = val.split(/\b/|| "-")
   let reg1 = /[A-ZА-Я]{2,}/
   let newString = []
   newArray.forEach(el => {
    if(reg1.test(el)) {
        let firstLetter = el[0]
        el = el.toLowerCase()
        el = el.replace(el[0],firstLetter) 
        newString.push(el)
    }
    else {
        newString.push(el)
    }
   })
   let reg2 = /\,/gm
   return CorrectedStr = newString.join().replace(reg2,'')
}

testForm.addEventListener('change', (e)=>{
    if (e.target == goodName) {
        goodName.value = Correction(goodName.value)
        if (goodName.value.length > 25) {
            arrError.push("Название - до 25 символов!")
            userError.innerHTML = ''
            userError.innerHTML = arrError.join('')
        }
        else
        {
            arrError.forEach((el) => {
                if(el.includes('Название')) {
                    arrError = arrError.filter((f)=> {return f !== el})
                    userError.innerHTML = ''
                    userError.innerHTML = arrError.join('')
                }
            })
        }
    }
    if (e.target == goodPrice) {
        let check = /^[0-9]+$/gm.test(goodPrice.value)
        if (goodPrice.value.length > 2 || !check) {
            arrError.push("Цена - цифры до 2 символов!")
            userError.innerHTML = ''
            userError.innerHTML = arrError.join('')
        }
        else
        {
            arrError.forEach((el) => {
                if(el.includes('Цена')) {
                    arrError = arrError.filter((f)=> {return f !== el})
                    userError.innerHTML = ''
                    userError.innerHTML = arrError.join('')
                }
            })
        }
    }

    if (e.target == desciption) {
        desciption.value = Correction(desciption.value)
        if (desciption.value.length > 150) {
            arrError.push("Описание - до 150 символов!")
            userError.innerHTML = ''
            userError.innerHTML = arrError.join('')
        }
        else
        {
            arrError.forEach((el) => {
                if(el.includes('Описание')) {
                    arrError = arrError.filter((f)=> {return f !== el})
                    userError.innerHTML = ''
                    userError.innerHTML = arrError.join('')
                }
            })
        }
    }

    if (e.target == link) {
        let reg3 = /https:\/\//
        if (!reg3.test(desciption.value)) {
            link.value = 'https://'+ link.value
        }
    }

})