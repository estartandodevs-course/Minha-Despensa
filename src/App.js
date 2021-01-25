
import { HomePage } from "./pages/home/home";
import { MinhaDespensa } from "./pages/pantry/pantry";
import { Layout } from "./components/layout/layout";
import { FormPage } from "./pages/Form/form";
import { LoginPage } from "./pages/login/login";
import "./App.css";

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
            </Layout>
          </Route>
          <Route exact path="/inserir-item">
            <FormPage />
          </Route>
          <Route exact path="/despensa">
            <Layout>
              <MinhaDespensa />
            </Layout>
          </Route>
          <Route exact path="/login">
            <Layout>
              <LoginPage />
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
