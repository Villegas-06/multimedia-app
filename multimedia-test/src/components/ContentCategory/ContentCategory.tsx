import React from 'react';
import { Category, Movie } from '../../types/types';
import { Navigate } from 'react-router-dom';

import '../../styles/contentCategory.css';

interface Props {
  selectedCategory: Category | null;
  onMovieClick: (movie: Movie) => void;
  isLoggedIn: boolean;
}

const ContentCategory: React.FC<Props> = ({ selectedCategory, onMovieClick, isLoggedIn }) => {

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!selectedCategory) {
    return <div>No hay categoría seleccionada</div>;
  }

  return (
    <div className="content-category">
      <h2 className="category-title">{selectedCategory.name}</h2>
      <div className="content-list">
        {selectedCategory.content.map((movie) => (
          <div key={movie.id} className="content-item" onClick={() => onMovieClick(movie)}>
            <div className="content-item-inner">
              <div className="front">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <h3 className="movie-title">{movie.title}</h3>
              </div>
              <div className="back">
                <p className="movie-synopsis">{movie.sinopsis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCategory;
