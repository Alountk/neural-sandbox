import styles from "./Movies.module.css";
import useFetch from "../../hooks/useFetch";
import { fetchMovies } from "../../services";
import type { MediaItem } from "../../types";

export default function Movies() {
  const { data, loading, error } = useFetch<MediaItem[]>({
    call: async () => {
      return fetchMovies();
    },
  });

  if (loading) return <section>Loading...</section>;
  if (error) return <section>Error loading movies.</section>;

  const movieFiltered = data
    ?.filter((item) => item.releaseYear >= 2010)
    .slice(0, 21);
  console.log({ data, loading, error });
  return (
    <section className={styles["movies-section"]}>
      {movieFiltered?.map((movies: MediaItem) => (
        <div className={styles["movie-wrapper"]}>
          <div key={movies.title} className={styles["movie-card"]}>
            {/* <h2>{movies.title}</h2> */}
            {/* <p>{movies.description}</p> */}
            <img src={movies.images["Poster Art"].url} alt={movies.title} />
          </div>
          <p>{movies.title}</p>
        </div>
      ))}
    </section>
  );
}
