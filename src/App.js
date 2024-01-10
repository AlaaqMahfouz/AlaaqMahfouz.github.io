import logo from './logo.svg';
import './App.css';
import BasicDropDown from './BasicDropDown';
import { Dropdown } from 'react-bootstrap';
import {Routes , Route} from 'react-router-dom';


function App() {


  return (
    <div>
      <Routes>
        <Route exact path="/"element={<BasicDropDown/>}/>
      </Routes>
    </div>
  );





  
}

export default App;
