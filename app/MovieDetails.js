import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du film :', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (!film) return <div>Film introuvable.</div>;

  return (
    <div className="container mt-5">
      <h1>{film.title}</h1>
      <img src={film.image} alt={film.title} className="img-fluid" />
      <p>{film.description}</p>
    </div>
  );
};

export default MovieDetails;
