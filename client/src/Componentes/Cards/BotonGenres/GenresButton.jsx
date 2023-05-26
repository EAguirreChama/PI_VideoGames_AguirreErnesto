import React from "react";
import style from "./GenresButton.module.css";


const GenresButton = ({ onClick, isExpanded }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {isExpanded ? "Todos los géneros" : "Mostrar Géneros"}
    </button>
  );
};

export default GenresButton;