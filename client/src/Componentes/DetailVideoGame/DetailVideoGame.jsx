import { getVideoGameId } from "../../redux/ActionsGames/getVideoGameId";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import style from "./DetailVideoGame.module.css"
import BotonPlatforms from "./Botones/Platforms/Platforms";
import BotonGenres from "./Botones/Genres/Genres";
import { stripHtmlTags } from "./Helper";

const DetailVideoGame = () => {

    const dispatch = useDispatch();

    const detail = useSelector(state => state.videoGameDetail);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getVideoGameId(id))
    }, [dispatch, id])

    const strippedDescription = stripHtmlTags(detail.description);
    return (
        <div>
            <div>
                <h2 className={style.Name}>{detail.name}</h2>
                <img src={detail.background_image} className={style.Imagen} alt=""></img>
                <div>
                    <div className={style.Info}>
                        <h3 className={style.Rating}>Rating: {detail.rating}</h3>
                        <h3 className={style.Released}>Fecha de Estreno: {detail.released}</h3>
                    </div>
                </div>
                <div className={style.Container2}>
                    <div className={style.TextContainer}>
                        <div className={style.Text}>{strippedDescription}</div>
                    </div>
                </div>
                <div className={style.Container}>
                    <BotonPlatforms/>
                    <BotonGenres/>
                </div>
            </div>
        </div>
    )
}

export default DetailVideoGame