import './styles/all.scss' 
import Header from './components/header/header'
import { helperCreateId } from './Helper/helperCreate'
import { onLocation } from './Helper/route'
const root = document.getElementById('root')
root.append(Header())
root.append(helperCreateId('div', 'main'))
onLocation()