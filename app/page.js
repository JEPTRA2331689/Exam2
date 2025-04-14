'use client';

import { useEffect, useState } from 'react';
import MovieList from './/components/MovieList';
import Header from './/components/Header';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  const loadFilms = () => {
    fetch('http://localhost:3002/films')
      .then((res) => res.json())
      .then((data) => setFilms(data));
  };

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <>
      <Header />
      <MovieList films={films} refresh={loadFilms} />
    </>
  );
}
