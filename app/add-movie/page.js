'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddMoviePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      description,
      image,
      deleted: false,
    };

    const res = await fetch('http://localhost:3002/films', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });

    if (res.ok) {
      alert('Film ajouté avec succès !');
      router.push('/');
    } else {
      alert('Erreur lors de l’ajout du film.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="url" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-success">Ajouter</button>
      </form>
    </div>
  );
}
