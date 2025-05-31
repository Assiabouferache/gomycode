import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import { Container } from "react-bootstrap";

const initialMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through use of dream-sharing technology...",
    posterURL: "https://m.media-amazon.com/images/I/51oD-nzDcpL._AC_.jpg",
    rating: 5,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "Stranger Things",
    description:
      "A group of kids uncover supernatural mysteries in their small town.",
    posterURL:
      "https://m.media-amazon.com/images/I/81aG2OJGHxL._AC_SL1500_.jpg",
    rating: 4,
    trailerURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker in this intense action thriller.",
    posterURL: "https://m.media-amazon.com/images/I/51k0qa8plXL._AC_.jpg",
    rating: 5,
    trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddMovie addMovie={addMovie} />
                <Filter
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRating={filterRating}
                  setFilterRating={setFilterRating}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
