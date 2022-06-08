import styles from "./nav.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>V/A</h1>

        <ul className={styles.nav_list}>
          <li>About</li>
          <li>Contact</li>
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
