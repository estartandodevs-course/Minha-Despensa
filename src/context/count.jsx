import React, { createContext, useState, useContext, useEffect} from "react"
import firebaseDb from '../auth/config'
 const CountContext = createContext();

export default function CountProvaider({ children }) {
  const [contactObjects, setContacObjects] = useState(false);

  useEffect(() => {
    firebaseDb.child("produtos").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContacObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  return (
    <CountContext.Provider 
    value={{
        contactObjects,
        setContacObjects
      }}
        >
      {children}
    </CountContext.Provider>
  )
}

export function useCount() {
  const context = useContext(CountContext)
  const { contactObjects, setContacObjects } = context
  return { contactObjects, setContacObjects };
}