import './style.scss'
import { helperCreateClass } from '../../helper/helperCreate'
const root = document.getElementById('root')
const style = {
background: 'gray',
color: 'blue'
}
const Home = () => helperCreateClass('h1', '', 'Home page', style)
export default Home;

