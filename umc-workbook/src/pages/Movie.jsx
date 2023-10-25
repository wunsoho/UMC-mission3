import React, { useState } from "react";
import * as A from './Movie.style';

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
      <A.component onMouseOver={MouseIn} onMouseOut={MouseOut}>
        <A.movie_img> 
          <A.img src={domain + poster_path} alt={title} />
          <A.movie_info>
            <b>{title}</b>
            <span>{vote_average}</span>
          </A.movie_info>
        </A.movie_img>
          <A.hide_info style={tf ? t : f}>
            <b>{title}</b>
            <span>{overview}</span>
          </A.hide_info>
      </A.component>
  );
}

export default Movie;