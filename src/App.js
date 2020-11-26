import './App.css';
import { HomePage } from './pages/home'
import { MinhaDespensa } from './pages/despensa/despensa'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export function App(){
  return (
    <Router>
      <Switch>
        <Route path="/despensa">
          <MinhaDespensa />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

 
