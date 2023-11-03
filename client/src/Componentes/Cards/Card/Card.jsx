import React, { useState } from "react";
import { Link } from "react-router-dom"
import GenresButton from "../BotonGenres/GenresButton";
import style from "./Card.module.css"

const Card = ({ image, name, genres, id , rating}) => {

    const [mostrarGenres, setMostrarGenres] = useState(false);

    const expandir = () => {
        setMostrarGenres(!mostrarGenres);
    }

    return (
        <div className={style.Card}>
            <Link to={`/detailVideoGame/${id}`}>
                <img src={image} alt=""/>
            </Link>
            
            <div>
                <p className={style.Name}>{name}</p>
            </div>

            <div className={style.boton}>
                <GenresButton onClick={expandir} mostrarGenres={mostrarGenres}/>
            </div>

            {mostrarGenres && (
                <ul>
                    {genres.map((genero => (
                        <li key={genero.id}>{genero.name}</li>
                    )))}
                </ul>
            )}

            <p className={style.Name}> Rating: {rating}</p>
        </div>
    )
}

export default Card;