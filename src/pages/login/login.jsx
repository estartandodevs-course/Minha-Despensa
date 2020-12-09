import React, { useState } from "react";

import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
import { Button } from "../../components/Button/Button";
import { ProductName } from "../../components/inputs-form/product-name/product-name";
import logo from "../../assets/img/img-logo.svg";
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
      <Header />
      <main className="login-container">
        <img src={logo} alt="" />
        <ProductName
          label="Usuário"
          placeholder="E-mail"
          name="username"
          onChange={handleChange}
        />
        <ProductName
          label="Senha"
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button onClick={() => console.log(form)} value="Enviar" />
      </main>
      <Navbar />
    </>
  );
}
