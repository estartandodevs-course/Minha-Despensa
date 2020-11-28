import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {
  return(
    <>
      <div className="container">
          <div className="mock">
            <h1>despensa</h1>
            <Link to="/form">IR PARA form</Link>
          </div>  
      </div>    
      <Navbar />
    </>
  )
}