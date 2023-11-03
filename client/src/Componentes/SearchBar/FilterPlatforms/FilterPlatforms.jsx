import style from "../Filtros.module.css"

import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"

import { getPlatforms } from "../../../redux/ActionsPlatforms/getPlatforms"
import { getVideoGames } from "../../../redux/ActionsGames/getVideoGames"
import { platformsFilter } from "../../../redux/ActionsPlatforms/filterPlatforms"

const FilterPlatforms = () => {

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getPlatforms())
          }, [dispatch])
    
    const platforms = useSelector(state => state.allPlatforms)
    const videoGames = useSelector(state => state.allVideoGames)

    function idCoincidentes(arr) {
            if(arr.length === 0) {
                return [];
            }

            const primerElemento = arr[0]
            const idsCoincidentes = primerElemento?.platforms?.map((plat) => plat.id)
    
            const idsFiltrados = idsCoincidentes?.filter((id) => {
                return arr.every((elemento) => {
                    return elemento?.platforms?.some((plat) => plat.id === id);
                })
            })
    
            return idsFiltrados || [];
    }

    const handleid = (e) => {
        const index = e.target.selectedIndex;
        const optionElement = e.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');

        if (optionElementId === "all") {
            dispatch(getVideoGames())
        } else {
            dispatch(platformsFilter(optionElementId))
        }
    }

    return (
        <div className={style.SelectContiner}>
            <select className={style.Select} onChange={(e) => handleid(e)}>
                <option key = "all" id = "all">Plataformas</option>
                {platforms?.map(p => {
                    return (
                        <option selected = {idCoincidentes(videoGames)[0] === p.id} key = {p.id} id = {p.id}>{p.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterPlatforms;
