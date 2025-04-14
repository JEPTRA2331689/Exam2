'use client';

import MovieCard from './MovieCard';

export default function MovieList({ films, refresh }) {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3002/films/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ deleted: true })
    });

    if (refresh) refresh(); // pour forcer le rechargement de la liste
  };

  return (
    <div className="row">
      {films
        .filter((film) => !film.deleted)
        .map((film) => (
          <MovieCard
            key={film.id}
            {...film}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
}
