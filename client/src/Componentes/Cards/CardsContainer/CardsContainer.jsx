import { useSelector } from "react-redux"
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useState } from "react";
import Pagination from "../../Paginacion/Paginacion";

const CardsContainer = () => {

    const [paginaActual, setPaginaActual] = useState(1)

    const allVideoGames = useSelector(state => state.allVideoGames)

    const gamesPorPag = 15;
    const ultIndex = paginaActual * gamesPorPag;
    const primerIndex = ultIndex - gamesPorPag;

    const actualGames = allVideoGames.slice(
        primerIndex,
        ultIndex
    );

    const clickPag = (numeroPag) => {
        setPaginaActual(numeroPag)
    };

    return (
        <div className={style.container}>
            <div className={style.Paginacion}>
                <Pagination gamesPorPag={gamesPorPag} totalGames={allVideoGames.length} clickPag={clickPag} paginaActual={paginaActual}/>
            </div>

            <div className = {style.CardContainer}>
                {actualGames.map(videoGame => {
                    return <Card
                        key={videoGame.id}
                        id={videoGame.id}
                        name={videoGame.name}
                        image={videoGame.background_image}
                        genres={videoGame.genres}
                        rating={videoGame.rating}
                    />
                })}
            </div>
        </div>
    )
};
export default CardsContainer
