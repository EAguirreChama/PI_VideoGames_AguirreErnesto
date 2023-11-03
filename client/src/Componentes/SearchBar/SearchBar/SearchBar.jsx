import OrderAlf from "../FilterGames/FilterGames"
import FilterGenres from "../FilterGenres/FilterGenres"
import OriginGame from "../FilterOrigin/FilterOrigin"
import Rating from "../FilterRating/FilterRating"
import FilterPlatforms from "../FilterPlatforms/FilterPlatforms"
import Search from "./Search"
import style from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <div className={style.Container}>
            <div className={style.Container2}>
                <OrderAlf/>
                <Rating/>
                <OriginGame/>
                <FilterPlatforms/>
                <FilterGenres/>
            </div>
            <Search/>
        </div>
    )
}

export default SearchBar
