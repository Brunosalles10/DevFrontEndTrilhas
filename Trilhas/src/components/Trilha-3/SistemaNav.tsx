import { Link } from "react-router-dom";
import styles from "./SistemaNav.module.css";

function Navegar() {
  return (
    <nav className={styles.navegar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">Sobre</Link>
        </li>
        <li>
          <Link to="/Contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navegar;
