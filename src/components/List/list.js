import { MDCDataTable } from '@material/data-table';
import { createElem } from "../../helper/createElem";
import { Octokit } from 'octokit'
// let url = "https://github.com/login/oauth/authorize"
// let client_id = "Iv1.1a1312a076c437ea"
// let api = `${url}?client_id=${client_id}`

// let url1 = "https://github.com/login/oauth/access_token"
// let client_secret = "39b6b2e6311d6b6d74f64348833135b07a5d78b0"
// let code = "1f1c3c415107cd99f359"
// let redirect_uri = "https://github.com/OlesyaPastushenko"

// let api1 = `${url1}?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`

// fetch(api).then(res=> console.log(res.url))
// fetch(api1).then(res=>console.log(res.url))

//   https://github.com/login/oauth/authorize?client_id=Iv1.1a1312a076c437ea&allow_signup=false
//   https://github.com/login/oauth/access_token?client_id=Iv1.1a1312a076c437ea&client_secret=39b6b2e6311d6b6d74f64348833135b07a5d78b0&code=6e3b05a799ef75dcf36a&redirect_url=https://github.com/OlesyaPastushenko"

const getUsers = async () => {
    const octokit = new Octokit({
        auth: "ghu_dEv7TuxGUrOtcZSQW6xcYVnJ4LSNFt3oGh56"
    });
    const  users = await octokit.request('GET /users', {username: 'USERNAME'})
    const {data} = users
    console.log(data.length)
    let user_json = []
    for(let i=0;i<data.length;i++){
        console.log(i)
        let obj = data[i]
        await fetch(obj.url)
        .then(res => res.json())
        .then(json => {
            user_json.push(json)
        })
    };
    console.log(user_json)
    return  user_json
}

const List = async () => {
    let users = await getUsers()
    
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
        <th class="mdc-data-table__cell" scope="row">${el.login}</th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${el.followers}</td>`, 'mdc-data-table__row')
    });
}

export default List;