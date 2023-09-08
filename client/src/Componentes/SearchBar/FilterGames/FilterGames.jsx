import { useDispatch } from "react-redux"
import style from "../Filtros.module.css";

import { getVideoGames } from "../../../redux/ActionsGames/getVideoGames";
import { videoGamesOrder } from "../../../redux/ActionsGames/filterVideoGames";

const OrderAlf = () => {
    const dispatch = useDispatch();

    const handleid = (e) => {
        const index = e.target.selectedIndex;
        const optionElement = e.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');

        if (optionElementId === "All") {
            dispatch(getVideoGames())
        } else {
            dispatch(videoGamesOrder(optionElementId))
        }
    };
    
    return (
        <div className={style.SelectContainer}>
            <select className={style.Select} onChange={(e) => handleid(e)}>
                <option key = "All" id = "All" >Orden</option>
                <option key = "Asc" id = "Asc" >A - Z</option>
                <option key = "Des" id = "Des" >Z - A</option>
            </select>
        </div>
    )
};
export default OrderAlf;
