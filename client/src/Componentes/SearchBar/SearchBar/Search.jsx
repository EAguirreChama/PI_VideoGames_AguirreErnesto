import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoGameName } from "../../../redux/ActionsGames/getVideoGameName";
import style from "./Search.module.css"

const Search = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("")

    const handleInput = (event) => {
        event.preventDefault()
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getVideoGameName(name))
        setName("")
    };

    return (
        <div className={style.SearchContainer}>
            <input type="text" onChange={(event) => handleInput(event)} placeholder="Buscar por nombre" value={name} className={style.SearchInput}/>
            <button onClick={(event) => handleSubmit(event)} type="submit" className={style.SearchButton}>Buscar</button>
        </div>
    )
};

export default Search;