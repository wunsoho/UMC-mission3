import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Celebirity from "./pages/Celebirity";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={
            <div className="app-container">
                  {
                    movies.results.map((item) => {
                      return (
                        <Movie 
                        poster_path={item.poster_path}
                        title={item.title}
                        vote_average={item.vote_average}  
                        overview={item.overview}
                        />
                      )
                    })
                  }
            </div>
          }/>
          <Route to="/celebrity" element={<Celebirity/>}/>
          <Route to="/tv" element={<TV/>}/>
          <Route to="*" element={<NotFound/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
