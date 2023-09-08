import style from "./Landing.module.css"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.Titulo}>Bienvenidos a VideoGames</h1>
            </div>
                <Link to="/home" className={style.Link}>
                    <button Link to="/home" className={style.Boton}>
                        Página Principal
                    </button>
                </Link>
                <h5 className={style.miniTitulo}>Presiona para ir</h5>
        </div>
    );
};
export default Landing;
