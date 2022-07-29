// import './style.scss'
let clientid = "Iv1.1a1312a076c437ea"
let secretkey = "39b6b2e6311d6b6d74f64348833135b07a5d78b0"
let login = ""
let code = "51413d9e2eea45c04fc8"
let scope = ""
let state = ""
let allow_signup = ""
import { Octokit } from 'octokit'
import { helperCreateClass } from '../../helper/helperCreate'
const  Product = async () => {
    const wrap = helperCreateClass('div', '', '')
    const octokit = new Octokit({
        auth: "ghu_1Rtg4AYE8MmYXKjymTSd0KqqrqV3Tj488uQ7"
    });
    const  users = await octokit.request('GET /users', {username: 'USERNAME'})
    console.log(users)
    const {data} = users
    console.log(data)
    data.forEach(el => {
        console.log(el)
        // const user1 =  octokit.request(`GET /users/${el.followers_url}`, {
        //     username: 'USERNAME'
        //   })
        //   console.log(user1)
        fetch(el.url)
        .then(res => res.json())
        .then(json => { const user_login = json.login
        const user_followers = json.followers
        console.log(user_login, user_followers)})
    });


//   https://github.com/login/oauth/authorize?client_id=Iv1.1a1312a076c437ea&allow_signup=false
//   https://github.com/login/oauth/access_token?client_id=Iv1.1a1312a076c437ea&client_secret=39b6b2e6311d6b6d74f64348833135b07a5d78b0&code=608bf70fd725a90af4ab&redirect_uri=https://github.com/OlesyaPastushenko"
        return wrap
}
export default Product;