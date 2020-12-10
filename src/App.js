import "./App.css";
import { HomePage } from "./pages/home/home";
import { Layout } from "./components/layout/layout";

import { MinhaDespensa } from "./pages/despensa/despensa";
import { FormPage } from "./pages/Form/form";
import { DespensaVazia } from "./pages/despensa-vazia/despensa-vazia";

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
