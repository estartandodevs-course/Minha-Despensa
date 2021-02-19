import React, { createContext, useState, useContext, useEffect} from "react"
import firebaseDb from '../auth/config'
 const CountContext = createContext();

export default function CountProvaider({ children }) {
  const [productsObjects, setProductsObjects] = useState(false);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("products").on("value", (snapshot) => {
      if (snapshot.val() != null)
      setProductsObjects({
          ...snapshot.val(),
        });
        else
        setProductsObjects(false)
    });
  }, []);

  return (
    <CountContext.Provider 
    value={{
      productsObjects,
      setProductsObjects,
      currentId,
      setCurrentId
      }}
        >
      {children}
    </CountContext.Provider>
  )
}

export function useCount() {
  const context = useContext(CountContext)
  const { productsObjects, setProductsObjects } = context
  const { currentId, setCurrentId } = context
  return { productsObjects, setProductsObjects, currentId, setCurrentId };
}