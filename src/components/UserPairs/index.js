import { createElem } from "../../helper/createElem";

const UserPairs = (users = []) => {
  const wrapper = document.querySelector(".wrapper");
  const wrapUser = createElem("div", wrapper, null, "user-wrap");
  const btnGenerate = document.querySelector(".btn");

  const compareUsersFollowers = (firstUser, secondUser) => {
    if (firstUser.followers > secondUser.followers) {
      return `Winner is ${firstUser.name} with ${firstUser.followers} followers!`;
    } else if (firstUser.followers === secondUser.followers) {
      return `${firstUser.name} and ${secondUser.name} have the same number of followers!`;
    } else {
      return `Winner is ${secondUser.name} with ${secondUser.followers} followers!`;
    }
  };

  btnGenerate.addEventListener("click", () => {
    const shuffledUsers = users.sort(() => {
      let random = 0.5 - Math.random();
      return random;
    });

    const pairUsers = [];
    for (let i = 0; i < shuffledUsers.length; i += 2) {
      pairUsers.push([shuffledUsers[i], shuffledUsers[i + 1]]);
    }

    pairUsers.forEach((pairUser) => {
      const userWrap = createElem("div", wrapUser, null, "user-wrap");

      userWrap.innerHTML = `
            <div class="user user-first">
                <p class="user-name">${pairUser[0].login}</p>
                <span class="user-followers">Followers: ${
                  pairUser[0].followers
                }</span>
            </div>
            <div class="user user-second">
                <p class="user-name">${pairUser[1].login}</p>
                <span class="user-followers">Followers: ${
                  pairUser[1].followers
                }</span>
            </div>
            <div class="user user-result">${compareUsersFollowers(
              pairUser[0],
              pairUser[1]
            )}</div>
        `;
    });
  });
};

export default UserPairs;
