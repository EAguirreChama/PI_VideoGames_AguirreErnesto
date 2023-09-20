import style from "../Filtros.module.css"
import React, { useState} from "react"
import { useDispatch, useSelector} from "react-redux"

import { originVideoGames } from "../../../redux/ActionsGames/originVideoGames"

const OriginGame = () => {

    const[selectedOrigin, setSelectedOrigin] = useState("ALL")
    const dispatch = useDispatch();
    const originGames = useSelector(state => state.allVideoGames)

    const handleOriginChange = (event) => {
        const selectedOrigin = event.target.value
        setSelectedOrigin(selectedOrigin)
        dispatch(originVideoGames(selectedOrigin))
      }
    
    return (
        <div className={style.SelectContainer}>
            <select value = {selectedOrigin} className={style.Select} onChange={handleOriginChange}>
                <option key= "All" id= "All" value="ALL">Todos los juegos</option>
                <option key= "API" id= "API" value="API">Juegos de la API</option>
                <option key= "BD" id= "BD" value="BD">Juegos de la BD</option>
            </select>
            {(selectedOrigin === "BD" && originGames.length === 0) && <p>No hay juegos disponibles en la base de datos.</p>}
        </div>
    )
}

export default OriginGame
