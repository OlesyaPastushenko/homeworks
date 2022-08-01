import { MDCDataTable } from '@material/data-table';
import { createElem } from "../../helper/createElem";
import createRow from '../../helper/createRow';
import moment from 'moment';
// import { urlParser } from 'css-loader/dist/plugins';

const Table = async () => {

    const token = "rdhvw0yehud95y3rq2bgtar222xyf830yb1b61e0" 
    const url = "https://api.json-generator.com/templates/Xxx0fa8EuNu9/data"
    const api = `${url}?access_token=${token}`
    
    const root = document.getElementById('root');
    createElem('div', root,`
    <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
    <tr class="mdc-data-table__header-row">
    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Student's name</th>
    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Date of birth</th>
    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Rating</th>
    
    </tr>
    </thead>
    <tbody class="mdc-data-table__content">
    </tbody>
    </table>
    </div>
    </div>
    `, 'wrapper')
    const students = await fetch(api)
    .then(res=>res.json())
      students.forEach(el => {
        let user_date = moment(el.date, "DD.MM.YYYY").format("LL")
        createRow(el.name, user_date, el.rate)
      });

}

export default Table;