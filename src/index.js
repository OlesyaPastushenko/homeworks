import './styles/all.scss' 
import Header from './components/header/header'
import { helperCreateId } from './helper/helperCreate'
import { onLocation } from './helper/route'
const root = document.getElementById('root')
root.append(Header())
root.append(helperCreateId('div', 'main'))
onLocation()