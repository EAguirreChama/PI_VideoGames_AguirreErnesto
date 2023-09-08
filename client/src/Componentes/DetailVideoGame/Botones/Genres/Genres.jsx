import { getVideoGameId } from "../../../../redux/ActionsGames/getVideoGameId";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect} from "react";
import style from "../../DetailVideoGame.module.css"

const BotonGenres = () => {
    const dispatch = useDispatch();

    const detail = useSelector(state => state.videoGameDetail);

    const { id } = useParams();

    const [showGenres, setShowGenres] = useState(false);

    const botonGenres = () => {
        setShowGenres(!showGenres)
    };

    useEffect(() => {
        dispatch(getVideoGameId(id))
    }, [dispatch, id])

    return (
        <div>
            <div className={style.ButtonsContainer}>
                <button onClick={botonGenres} className={style.Button}>
                    {showGenres ? "Generos" : "Mostrar Generos"}
                    {showGenres && (
                        <div>
                            {detail.genres && detail.genres.map((g) => (
                                <p key={g.id}>{g.name}</p>
                            ))}
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}
export default BotonGenres
