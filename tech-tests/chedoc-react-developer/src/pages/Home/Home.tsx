import styles from "./Home.module.css";

const SECTIONS = {
  SHOWS: "shows",
  MOVIES: "movies",
};

export default function Home() {
  return (
    <section className={styles["home-section"]}>
      {Object.values(SECTIONS).map((section) => (
        <div key={section}>
          <div className={styles["home-card"]}>
            {section}
          </div>
          <p className={styles["home-description"]}>{`Popular ${section}`}</p>
        </div>
      ))}
    </section>
  );
}
