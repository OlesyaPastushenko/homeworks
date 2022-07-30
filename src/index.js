import './styles/all.scss' 
import List from './components/List/list';
import Button from './components/Button/button';
const li = async () => {
    await List()
    await Button()
}
li()
