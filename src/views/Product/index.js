// import "./style.scss";
import { helperCreateClass } from "../../helper/helperCreate";
const wrap = helperCreateClass("div", "pair-wrap");
const Product = () => {
  const userData = [
    {
      id: 1,
      name: "Hudson Klein",
      followers: 38,
    },
    {
      id: 2,
      name: "Little Knapp",
      followers: 42,
    },
    {
      id: 3,
      name: "Janelle Rowe",
      followers: 32,
    },
    {
      id: 4,
      name: "Alyce Hays",
      followers: 32,
    },
    {
      id: 5,
      name: "Mercado Todd",
      followers: 72,
    },
    {
      id: 6,
      name: "Sparks Norris",
      followers: 30,
    },
    {
      id: 7,
      name: "Barrera Strickland",
      followers: 25,
    },
    {
      id: 8,
      name: "Morin Brady",
      followers: 75,
    },
    {
      id: 9,
      name: "Owens Barrera",
      followers: 65,
    },
    {
      id: 10,
      name: "Jeanie Green",
      followers: 64,
    },
    {
      id: 11,
      name: "Bonita Gilmore",
      followers: 62,
    },
    {
      id: 12,
      name: "Vivian Oconnor",
      followers: 38,
    },
    {
      id: 13,
      name: "Watts Elliott",
      followers: 49,
    },
    {
      id: 14,
      name: "Helene Frost",
      followers: 26,
    },
    {
      id: 15,
      name: "Goodwin Pitts",
      followers: 28,
    },
    {
      id: 16,
      name: "Cardenas Cochran",
      followers: 57,
    },
    {
      id: 17,
      name: "Curtis Johnson",
      followers: 75,
    },
    {
      id: 18,
      name: "Lindsey Gay",
      followers: 26,
    },
    {
      id: 19,
      name: "John Trevino",
      followers: 60,
    },
    {
      id: 20,
      name: "Finley Small",
      followers: 27,
    },
  ];

  const compareUsersFollowers = (firstUser, secondUser) => {
    if (firstUser.followers > secondUser.followers) {
      return `Winner is ${firstUser.name} with ${firstUser.followers} followers!`;
    } else if (firstUser.followers === secondUser.followers) {
      return `${firstUser.name} and ${secondUser.name} have the same number of followers!`;
    } else {
      return `Winner is ${secondUser.name} with ${secondUser.followers} followers!`;
    }
  };

  const shuffledUsers = userData.sort(() => {
    let random = 0.5 - Math.random();
    return random;
  });

  const pairUsers = [];
  for (let i = 0; i < shuffledUsers.length; i += 2) {
    pairUsers.push([shuffledUsers[i], shuffledUsers[i + 1]]);
  }

  pairUsers.forEach((pairUser) => {
    const userWrap = helperCreateClass("div", "user-wrap");
    wrap.append(userWrap);

    userWrap.innerHTML = `
        <div class="user user-first">
            <p class="user-name">${pairUser[0].name}</p>
            <span class="user-followers">Followers: ${
              pairUser[0].followers
            }</span>
        </div>
        <div class="user user-second">
            <p class="user-name">${pairUser[1].name}</p>
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

  return wrap;
};
export default Product;
