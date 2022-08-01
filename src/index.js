import './styles/all.scss' 
import Table from './components/Table/index';
import createChart from './components/Chart/index' 
const  li = async ()=> {
  await Table()
  await createChart()
}
li()


