import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Photo from './components/Photo/photo'
function App() {
   const getName = (e, color) => {
       console.log(e.target)
       e.target.style.color = color
   }
  return (
    <div className="App">
      <Header 
      title="Olesia Pastushenko"
      components={()=><p>Vasya</p>}
      click = {(e) => getName (e,'orange')}
      clName = "header"
      > 
      <div className="burger"></div>
      </Header>
      <Nav
      clName = "menuOn" 
      a1 = "About me"
      a2 = "Certificates"
      a3 = "GitHub Portfolio"
      >  
      </Nav>
      <Photo
       clName = "fotowrap">
        <div className = "foto"></div>
      </Photo>
    </div>
  );
}

export default App;
