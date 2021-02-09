import React, { useEffect, useState } from "react";
import { authConfig } from "./config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();


  useEffect((user) => {
    authConfig.auth().onAuthStateChanged(setCurrentUser);
  }, []);


  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  );
};
