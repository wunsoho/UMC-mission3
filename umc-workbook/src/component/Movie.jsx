const domain = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, vote_average, poster_path }) {
    return (
    <div className="movie_img">
      <img src={domain + poster_path} className="img" alt={title} />
      <div className="movie_info">
        <b>{title}</b>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}

export default Movie;