import style from "../Filtros.module.css"
import { useDispatch, useSelector } from "react-redux"

import { genresFilter } from "../../../redux/ActionsGenres/filterGenres"
import { getVideoGames } from "../../../redux/ActionsGames/getVideoGames"

const FilterGenres = () => {

    const genres = useSelector(state => state.allGenres)
    const dispatch = useDispatch()

    const handleid = (e) => {
        const index = e.target.selectedIndex
        const optionElement = e.target.childNodes[index]
        const optionElementId = optionElement.getAttribute('id')
        
        if (optionElementId === "all") {
            dispatch(getVideoGames())
         } else {
            dispatch(genresFilter(optionElementId))
        }
    }

    return (
        <div className={style.SelectContiner}>
            <select className={style.Select} onChange={(e) => handleid(e)}>
                <option key="all" id="all">Generos</option>
                {genres?.map(g => {
                    return (
                        <option key={g.id} id={g.id} value={g.id}>{g.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterGenres
