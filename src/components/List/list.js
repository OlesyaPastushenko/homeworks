import { MDCDataTable } from '@material/data-table';
import { createElem } from "../../helper/createElem";

const List = () => {
    let users = [{
        "id": 1,
        "name": "Jonalisa octocat",
        "followers": 20,
    }, {
        "id": 2,
        "name": "Pona Uctoge",
        "followers": 9,
    }, {
        "id": 3,
        "name": "Lonare Petose",
        "followers": 2,
    }, {
        "id": 4,
        "name": "Joanona Poancto",
        "followers": 1,
    }];
    
    const root = document.getElementById('root');

    createElem('div', root, `
    <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" aria-label="Students">
        <thead>
            <tr class="mdc-data-table__header-row">
            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th>
            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Followers</th>
            </tr>
        </thead>
        <tbody class="mdc-data-table__content"></tbody>
        </table>
    </div>
    </div>
    `, 'wrapper');

    const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    const { content } = dataTable;

    users.forEach(el => {
        createElem('tr', content, `
        <th class="mdc-data-table__cell" scope="row">${el.name}</th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${el.followers}</td>`, 'mdc-data-table__row')
    });
}

export default List;