import React from 'react';
import { Link } from "react-router-dom";
import { Header } from '../../components/header/header';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {
  return(
    <>
      <div className="container">
          <div className="mock">
            <Header text="Despensa"/>
            <h1>despensa</h1>
            <Link to="/form">IR PARA form</Link>
            <Navbar />
          </div>  
          
      </div>    
    </>
  )
}