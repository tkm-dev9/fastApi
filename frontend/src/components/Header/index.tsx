import styles from './header.module.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;