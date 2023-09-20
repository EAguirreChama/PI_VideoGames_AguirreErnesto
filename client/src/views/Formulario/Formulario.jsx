import FormularioComp from "../../Componentes/Formulario/FormularioComp"
import style from "./Formulario.module.css"

const Formulario = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.Titulo}>Crea un VideoGame</h1>
            </div>
            <FormularioComp/>
        </div>
    )
}

export default Formulario
