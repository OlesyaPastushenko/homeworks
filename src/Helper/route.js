import Home from "../views/home";
import ErrorPage from "../views/Error";
import About from "../views/About";
import Product from "../views/Product";

const OnHandleRoute = (e) => {
    e = e || e.window;
    e.preventDefault()
    window.history.pushState({},'', e.target.href)
    onLocation()
}

const routes = {
    '/': Home(),
    '404' : ErrorPage(),
    '/about' : About(),
    '/product' : Product()
}
const onLocation = () => {
    const  pathname  = window.location.pathname
    const route = routes[pathname] || routes[404]
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.append(route)
}
window.onpopstate = onLocation
window.route = OnHandleRoute

export { OnHandleRoute, onLocation }