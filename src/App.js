
import { HomePage } from './pages/home/home'
import { MinhaDespensa } from './pages/despensa/despensa'
import { DespensaVazia } from './pages/despensa-vazia/despensa-vazia';
import "./App.css";
import { Layout } from "./components/layout/layout";
import { FormPage } from "./pages/Form/form";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/despensavazia">
            <Layout>
              <DespensaVazia />
            </Layout>
          </Route>
          <Route exact path="/inserir-item">
            <Layout>
              <FormPage />
            </Layout>
          </Route>
          <Route exact path="/despensa">
            <Layout>
              <MinhaDespensa />
            </Layout>
          </Route>
          <Route exact path="/">
            <Layout>
              <HomePage />
            </Layout>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
