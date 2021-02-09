import React, { useCallback,useState } from "react";
import { withRouter } from "react-router";
import {Input} from "../../components/inputs-form/components/input/input";
import {authConfig} from "../../auth/config";
import { Button } from "../../components/Button/Button";
import logo from "../../assets/img/login.svg";
import "../login/login.scss";



const SignUp = ({ history }) => {
  const [form, setForm] = useState()
  const handleSignUp = useCallback(async event => {

    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await authConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  function handleChange(name, value) {
    if (value !== undefined) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }
  return (
    <main className="login-container">
      <img src={logo} alt="" />
      <form onSubmit={handleSignUp}>
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
            value="Cadastra-se"
            style={{
              background: "#437056",
              width: "250px",
              alignSelf: "center",
              margin: "12px auto 0",
            }}
          />
        </form>
    </main>
  );
};

export default withRouter(SignUp);