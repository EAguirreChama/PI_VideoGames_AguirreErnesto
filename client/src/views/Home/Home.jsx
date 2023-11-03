import style from "./Home.module.css"
import CardsContainer from "../../Componentes/Cards/CardsContainer/CardsContainer"
import SearchBar from "../../Componentes/SearchBar/SearchBar/SearchBar"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getVideoGames } from "../../redux/ActionsGames/getVideoGames"
import { getGenres } from "../../redux/ActionsGenres/getGenres"

const Home = () => {

    const dispatch = useDispatch()
    const allVideoGames = useSelector(state => state.allVideoGames)

    useEffect(() => {
        !allVideoGames?.length && dispatch(getVideoGames())
        dispatch(getGenres())
    }, [dispatch, allVideoGames?.length])
    
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.Titulo}>Presentación de Juegos</h1>
            </div>
            <SearchBar/>
            <CardsContainer/>
        </div>
    )
}

export default Home