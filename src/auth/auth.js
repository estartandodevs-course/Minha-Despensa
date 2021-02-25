import React, { useEffect, useState } from "react";
import { authConfig } from "./config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();


  useEffect(() => {
    authConfig.auth().onAuthStateChanged(setCurrentUser);
  }, []);


 function IsLoggedIn () {
    
     authConfig.auth().onAuthStateChanged((setCurrentUser) => {

        if (setCurrentUser) {
            console.log("user logado :: ", setCurrentUser);
        }else {
            console.log("user não logado");
            }
        })

}

IsLoggedIn ();
  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  );
};
