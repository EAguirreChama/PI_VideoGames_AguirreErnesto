import style from "./Detalle.module.css"
import DetailVideoGame from "../../Componentes/DetailVideoGame/DetailVideoGame"

const Detalle = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h2 className={style.Titulo}>Detalle del VideoGame</h2>
            </div>
            <DetailVideoGame/>
        </div>
    )
}

export default Detalle
