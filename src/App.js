import './App.css';
import {Button} from './components/Button/Button';
import { HomePage } from './pages/home'

export function App(props){

  return (
    <div className="App">
      <Button value="Vamos lá!"/>
    
      <div className="container" >
        <div className="mock">
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

 
