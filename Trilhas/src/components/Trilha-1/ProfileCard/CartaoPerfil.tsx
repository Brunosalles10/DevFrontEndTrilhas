import brs1 from "../../../assets/brs1.jpg";
import styles from "./CartaoPerfil.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <img src={brs1} alt="Profile" className={styles.photo} />
      <h2 className={styles.name}>Bruno Salles</h2>
      <p className={styles.description}>
        Desenvolvedor Front-end apaixonado por React e CSS.
      </p>
    </div>
  );
};

export default ProfileCard;
