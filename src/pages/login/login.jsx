import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { ProductName } from "../../components/inputs-form/components/product-name/product-name";
import logo from "../../assets/img/login.svg";
import "./login.scss";

export function LoginPage() {
  const [form, setForm] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <>
      <main className="login-container">
        <img src={logo} alt="" />

        <ProductName
          title="Nome:"
          label="Usuário"
          placeholder="E-mail"
          name="username"
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />
        <ProductName
          title="Senha:"
          label="Senha"
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button
          onClick={() => console.log(form)}
          value="Enviar"
          style={{
            background: "#437056",
            width: "100%",
            alignSelf: "center",
            marginTop: "36px",
          }}
        />
      </main>
    </>
  );
}
