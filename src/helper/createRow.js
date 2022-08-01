
import { createElem } from "./createElem"
const createRow = (name,date,rate) => {
    const tbody = document.querySelector("tbody")
    createElem('tr',tbody,`
          <th class="mdc-data-table__cell" scope="row">${name}</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${date}</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${rate}</td>
    `,"mdc-data-table__row" )
}

export default createRow

