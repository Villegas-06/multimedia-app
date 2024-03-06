import React from 'react';
import { Movie } from '../../types/types'; 

import '../../styles/contentCategory.css'

interface Props {
  category: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const ContentCategory: React.FC<Props> = ({ category, movies, onMovieClick }) => {
  return (
    <div className="content-category">
      <h2 className="category-title">{category}</h2>
      <div className="content-list">
        {movies.map((movie) => (
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
