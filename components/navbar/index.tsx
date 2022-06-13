import Link from "next/link";
import styles from "./nav.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/"><a className={styles.logo}><h1>V/A</h1></a></Link>

        <ul className={styles.nav_list}>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
};
