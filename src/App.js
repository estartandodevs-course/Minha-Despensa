import './App.css';
import { HomePage } from './pages/home/home'
import { MinhaDespensa } from './pages/despensa/despensa'
import { FormItens } from './pages/Form/form';
import { DespensaVazia } from './pages/despensa-vazia/despensa-vazia';
import { LoginPage } from './pages/login/login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export function App(){
  return (
    <>
    <Router>
      <Switch>
        <Route path="/despensavazia">
          <DespensaVazia />
        </Route>
      <Route path="/form">
          <FormItens />
        </Route>
        <Route path="/despensa">
          <MinhaDespensa />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

 
