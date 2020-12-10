import React from "react";
import { Header } from "../header/header";
import { Navbar } from "../navbar/navbar";

export function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Navbar />
    </>
  );
}
