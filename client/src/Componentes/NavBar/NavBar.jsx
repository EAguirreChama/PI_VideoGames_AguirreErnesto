import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {

    const location = useLocation();

    return (
        <div className={styles.NavBarStyle}>
            <Link to="/">Volver a Inicio</Link>
            {location.pathname !== "/home" && (<Link to="/home">Ir a Home</Link>)}
            {location.pathname !== "/createVideoGame" && (<Link to="/createVideoGame">Ir a Crear un Juego</Link>)}
        </div>
    )
}

export default NavBar;