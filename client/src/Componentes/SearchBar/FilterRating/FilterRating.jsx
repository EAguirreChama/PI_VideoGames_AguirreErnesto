import style from "../Filtros.module.css"
import { useDispatch } from "react-redux"

import { getVideoGames } from "../../../redux/ActionsGames/getVideoGames"
import { ratingVideoGames } from "../../../redux/ActionsGames/filterRatingGames"

const Rating = () => {
    const dispatch = useDispatch()

    const handleid = (e) => {
        const index = e.target.selectedIndex
        const optionElement = e.target.childNodes[index]
        const optionElementId = optionElement.getAttribute('id')

        if(optionElementId === "All") {
            dispatch(getVideoGames())
        } else {
            dispatch(ratingVideoGames(optionElementId))
        }
    }

    return (
        <div className={style.SelectContainer}>
            <select className={style.Select} onChange={(e) => handleid(e)}>
                <option key = "All" id = "All" >Rating</option>
                <option key = "Asc" id = "Asc" >Asc</option>
                <option key = "Desc" id = "Desc" >Desc</option>
            </select>
        </div>
    )
}

export default Rating
