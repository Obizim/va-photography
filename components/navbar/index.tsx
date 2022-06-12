import Link from "next/link";
import styles from "./nav.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/"><a className={styles.logo}><h1>V/A</h1></a></Link>

        <ul className={styles.nav_list}>
          <li>About</li>
          <Link href="/contact">Contact</Link>
        </ul>

        <ul className={styles.nav_socials}>
          <li>Tw</li>
          <li>Fb</li>
          <li>Li</li>
        </ul>
      </nav>
    </header>
  );
};
