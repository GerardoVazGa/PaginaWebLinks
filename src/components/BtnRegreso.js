import React from "react";
import '../styles/BtnRegreso.css'
import { FaArrowLeft } from "react-icons/fa";



export default function BtnRegreso({onGoBack}) {

  return (
    <button
      className="BtnRegresoInicio"
      onClick={onGoBack}
    >
      <FaArrowLeft size={20} color="white"/>
    </button>
  );
}
