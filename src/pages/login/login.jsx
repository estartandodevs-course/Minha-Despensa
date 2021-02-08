// import React, { useState } from "react";
// import { Button } from "../../components/Button/Button";
// import { ProdutcName } from "../../components/inputs-form/components/input/input";
// import logo from "../../assets/img/login.svg";
// import "./login.scss";

// export function LoginPage() {
//   const [form, setForm] = useState({});

//   function handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   }

//   return (
//     <>
//       <main className="login-container">
//         <img src={logo} alt="" />

//         <ProdutcName
//           title="Nome:"
//           label="Usuário"
//           placeholder="E-mail"
//           name="username"
//           onChange={handleChange}
//           style={{ marginBottom: "20px" }}
//         />
//         <ProdutcName
//           title="Senha:"
//           label="Senha"
//           placeholder="Senha"
//           type="password"
//           name="password"
//           onChange={handleChange}
//         />
//         <Button
//           onClick={() => console.log(form)}
//           value="Enviar"
//           style={{
//             background: "#437056",
//             width: "100%",
//             alignSelf: "center",
//             marginTop: "36px",
//           }}
//         />
//       </main>
//     </>
//   );
// }
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {authConfig} from "../../auth/config";
import { AuthContext } from "../../auth/auth";

const Login = ({ history }) => {
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

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);