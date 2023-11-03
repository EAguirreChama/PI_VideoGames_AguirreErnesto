import { getVideoGameId } from "../../../../redux/ActionsGames/getVideoGameId"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect} from "react"
import style from "../../DetailVideoGame.module.css"

const BotonPlatforms = () => {

    const dispatch = useDispatch()

    const detail = useSelector(state => state.videoGameDetail)

    const { id } = useParams()

    const [showPlatforms, setShowPlatforms] = useState(false) 

    const botonPlatforms = () => {
        setShowPlatforms(!showPlatforms)
    }

    useEffect(() => {
        dispatch(getVideoGameId(id))
    }, [dispatch, id])

    return (
        <div>
            <div className={style.ButtonsContainer}>
                <button onClick={botonPlatforms} className={style.Button}>
                    {showPlatforms ? "Plataformas" : "Mostrar Plataformas"}
                    {showPlatforms && (
                        <div>
                            {detail.platforms && detail.platforms.map((p) => (
                                <p key={p.id}>{p.platform.name}</p>
                            ))}
                        </div> 
                    )}
                </button>
            </div>
        </div>
    )
}

export default BotonPlatforms;
