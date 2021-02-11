import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { authConfig } from "../../auth/config";
import { AuthContext } from "../../auth/auth";
import { Button } from "../../components/Button/Button";
import logo from "../../assets/img/login.svg";
import "./login.scss";
import { Input } from "../../components/inputs-form/components/input/input";

const Login = ({ history }) => {
  const [form, setForm] = useState()

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  function handleChange(name, value) {
    if (value !== undefined) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }
  // console.log(form.value)

  return (
    <>
      <main className="login-container">
        <img src={logo} alt="" />
        <form onSubmit={handleLogin}>
          <Input
            title="Nome:"
            label="Usuário"
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={({ target }) => handleChange(target.name, target.value)}
            style={{ marginBottom: "20px" }}
          />
          <Input
            title="Senha:"
            label="Senha"
            placeholder="Senha"
            type="password"
            name="password"
            onChange={({ target }) => handleChange(target.name, target.value)}
          />
          <Button
            value="Enviar"
            style={{
              background: "#437056",
              width: "250px",
              alignSelf: "center",
              margin: "12px auto 0",
            }}
          />
        </form>
      </main>
    </>
  );
}

export default withRouter(Login);

