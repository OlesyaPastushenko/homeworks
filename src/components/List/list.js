import { MDCDataTable } from "@material/data-table";
import { createElem } from "../../helper/createElem";
import UserPairs from "../UserPairs";
const token = ""; // add link token https://github.com/settings/tokens

const List = () => {
  const root = document.getElementById("root");
  createElem(
    "div",
    root,
    `
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
    `,
    "wrapper"
  );

  const dataTable = new MDCDataTable(document.querySelector(".mdc-data-table"));
  const { content } = dataTable;

  let users = [];
  fetch("https://api.github.com/users", {
    headers: new Headers({
      Authorization: "token " + token,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      Promise.all(
        data.map((el) => {
          return fetch(el.url, {
            headers: new Headers({
              Authorization: "token " + token,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              users.push({
                login: data.login,
                followers: data.followers,
              });

              createElem(
                "tr",
                content,
                `
                <th class="mdc-data-table__cell" scope="row">${data.login}</th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${data.followers}</td>`,
                "mdc-data-table__row"
              );
            });
        })
      ).then(() => {
        UserPairs(users);
      });
    });
};

export default List;
