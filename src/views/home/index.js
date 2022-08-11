import './style.scss'
import { helperCreateClass } from '../../Helper/helperCreate'
import { areas, types, prices, rooms, bath } from '../../components/DataBase/data'
import createSelect from '../../Helper/createSelect'
import animOnScroll from '../../Helper/animOnScroll'
const root = document.getElementById('root')
const style = {
color: 'black'
}

const Home = () => { 
    
    const wrap = helperCreateClass('div', '', "", style)
    const cover  = helperCreateClass("div","cover","")
    const wrapForfilter_1 = helperCreateClass("div", "wrapForfilter_1","")
    const wrapForfilter_2 = helperCreateClass("div", "wrapForfilter_2","")

    const areaSelect = createSelect(areas)
    areaSelect.setAttribute("name","areaSelect")
    wrapForfilter_1.append(areaSelect)
    cover.append(wrapForfilter_1)

    const zoneSelect = document.createElement("select")
    zoneSelect.setAttribute("name","zoneSelect")
    const zone = document.createElement("option")
    zone.innerHTML = "Zonas"
    zoneSelect.append(zone)
    wrapForfilter_1.append(zoneSelect)
    cover.append(wrapForfilter_1)

    const typeSelect = createSelect(types)
    typeSelect.setAttribute("name", "typeSelect")
    wrapForfilter_1.append(typeSelect)
    cover.append(wrapForfilter_1)

    const priceSelect = createSelect(prices)
    priceSelect.setAttribute("name","priceSelect")
    wrapForfilter_1.append(priceSelect)
    cover.append(wrapForfilter_1)

    const roomSelect = createSelect(rooms)
    roomSelect.setAttribute("name", "roomSelect")
    wrapForfilter_2.append(roomSelect)
    cover.append(wrapForfilter_2)

    const bathSelect = createSelect(bath)
    bathSelect.setAttribute("name", "bathSelect")
    wrapForfilter_2.append(bathSelect)
    cover.append(wrapForfilter_2)

    const wrapForCheck = helperCreateClass("div","",`
    <div class="chck">
    <input type="checkbox" id="checkPool" name="checkPool">
    <label for="checkPool">Picina</label>
    </div>
    <div class="chck">
    <input type="checkbox" id="checkSeaView" name="checkSeaView">
    <label for="checkPool">Vistas al mar</label>
    </div>
    `) 
    
    wrapForfilter_2.append(wrapForCheck)
    cover.append(wrapForfilter_2)
    
    cover.addEventListener("change", (e)=>{
        let selectName = e.target.getAttribute("name")
        console.log(selectName, "=>", e.target.value)
        if (selectName === "areaSelect") {
            let vol = e.target.value
            zoneSelect.innerHTML = ""
            if (typeof areas[vol] === "object"){
                areas[vol].forEach(el => {
                    const zoneOption = document.createElement("option")
                    zoneOption.setAttribute("value",el)
                    zoneOption.innerHTML = el
                    zoneSelect.append(zoneOption)
                });     
            }
            else if (typeof areas[vol] === "string") {
                const zoneOption = document.createElement("option")
                zoneOption.setAttribute("value", areas[vol])
                zoneOption.innerHTML = areas[vol]
                zoneSelect.append(zoneOption)
            }
        }
        
    })

    wrap.append(cover)

    const h2 = helperCreateClass("div", "h2", `¿COMO QUIERES QUE SEA TU VIDA EN<p>&#160ESPAÑA?</p>`,"")
    wrap.append(h2)

    window.addEventListener('scroll', animOnScroll)

    const block1 = helperCreateClass("div","block",`
    <div class = "col">
    <div class = "_costa _card _noanim">Costa</div>
    <div class = "_interior _card _noanim">Interior</div>
    </div>
    <div class = "col">
    <div class = "_centro _card _noanim">Centro ciudad</div>
    <div class = "_vistas _card _noanim">Vistas al mar</div>
    </div>
    <div class = "col">
    <div class = "_golf _card _noanim">Golf</div>
    `,"")

    wrap.append(block1)

    const h3 = helperCreateClass("div", "h2", `¿DONDE QUIERES <p>&#160VIVIR?</p>`,"")
    wrap.append(h3)     
    
    const block2 = helperCreateClass("div","block",`
    <div class = "col">
    <div class = "_costa _card _noanim">Costa</div>
    <div class = "_interior _card _noanim">Interior</div>
    </div>
    <div class = "col">
    <div class = "_centro _card _noanim">Centro ciudad</div>
    <div class = "_vistas _card _noanim">Vistas al mar</div>
    </div>
    <div class = "col">
    <div class = "_golf _card _noanim">Golf</div>
    `,"")
    
    wrap.append(block2)

    const h4 = helperCreateClass("div", "h2", `¿CUAL ES TU VIVIENDA  <p>&#160IDEAL?</p>`,"")
    wrap.append(h4)     
    
    const block3 = helperCreateClass("div","block",`
    <div class = "col">
    <div class = "_costa _card _noanim">Costa</div>
    <div class = "_interior _card _noanim">Interior</div>
    </div>
    <div class = "col">
    <div class = "_centro _card _noanim">Centro ciudad</div>
    <div class = "_vistas _card _noanim">Vistas al mar</div>
    </div>
    <div class = "col">
    <div class = "_golf _card _noanim">Golf</div>
    `,"")
    
    wrap.append(block3)

    const footer = helperCreateClass("div", "footer", "Adress", "")
    wrap.append(footer)
    return wrap

}
export default Home;

