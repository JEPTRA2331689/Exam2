'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);

  useEffect(() => {
    if (film) {
      // Sauvegarde dans le localStorage
      localStorage.setItem('lastConsultedMovie', JSON.stringify(film));
    }
  }, [film]);
  

  if (!film) return <p>Chargement...</p>;

  return (
    <div className="container mt-5">
      <h1>{film.title}</h1>
      <img src={film.image} alt={film.title} className="img-fluid" />
      <p>{film.description}</p>
    </div>
  );
}
