import React from "react";
import { HomePage } from "./pages/home/home";
import { MinhaDespensa } from "./pages/pantry/pantry";
import { Layout } from "./components/layout/layout";
import { FormPage } from "./pages/Form/form";
import Login from "./pages/login/login";
import SignUp from "./pages/register/register";
import { AuthProvider } from "./auth/auth";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CountProvaider from './context/count'

export function App() {
  // const [user, setUser] = useState({ isLogged: false });
  return (
    <>
    <CountProvaider>
    <AuthProvider>
        <Router>
          <Switch>
                <Route exact path="/despensavazia">
                  <Layout></Layout>
                </Route>
                <Route exact path="/inserir-item">
                  <FormPage />
                </Route>
                <Route exact path="/despensa">
                  <Layout>
                    <MinhaDespensa />
                  </Layout>
                </Route>
                <Route exact path="/cadastro">
                  <Layout>
                    <SignUp />
                  </Layout>
                </Route>
                <Route exact path="/login">
                  <Layout>
                    <Login />
                  </Layout>
                </Route>
                <Route exact path="/">
                  <Layout>
                    <HomePage />
                  </Layout>
                </Route>
                <Redirect to="/" />
                {/* <Redirect to="/login" /> */}
          </Switch>
        </Router>
        </AuthProvider>
        </CountProvaider>
    </>
  );
}
