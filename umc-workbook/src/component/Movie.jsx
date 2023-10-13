import React, { useState } from "react";

const domain = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, vote_average, poster_path, overview }) {

  const t = { display: "block" };
  const f = { display: "none" };

  const [tf, setTf] = useState(false);
  const MouseOut = () => {
    setTf(false);
  };

  const MouseIn = () => {
    setTf(true);
  };

    return (
      <div className="component" onMouseOver={MouseIn} onMouseOut={MouseOut}>
        <div className="movie_img"> 
          <img src={domain + poster_path} className="img" alt={title} />
          <div className="movie_info">
            <b>{title}</b>
            <span>{vote_average}</span>
          </div>
          <div className="hide_info" style={tf ? t : f}>
            <b>{title}</b>
            <span>{overview}</span>
          </div>
        </div>
      </div>
  );
}

export default Movie;