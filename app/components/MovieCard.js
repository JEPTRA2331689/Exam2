import Link from 'next/link';

export default function MovieCard({ id, title, description, image, onDelete }) {
  return (
    <div className="card col-lg-4 col-12">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/movie/${id}`} className="btn btn-primary">📖</Link>
        <button onClick={() => onDelete(id)} className="btn btn-dark ms-2">🗑️</button>
      </div>
    </div>
  );
}
