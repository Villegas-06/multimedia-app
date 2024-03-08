import React from 'react';
import { Category, Movie } from '../../types/types';
import ContentCategory from '../ContentCategory/ContentCategory';
import ContentDetails from '../ContentDetails/ContentDetails';
import { Navigate } from 'react-router-dom';

import '../../styles/home.css';

interface Props {
  categories: Category[];
  selectedCategory: Category | null;
  selectedMovie: Movie | null;
  onCategoryClick: (category: Category) => void;
  onMovieClick: (movie: Movie) => void;
  isLoggedIn: boolean;
}

const Home: React.FC<Props> = ({ categories, selectedCategory, selectedMovie, onCategoryClick, onMovieClick, isLoggedIn }) => {

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home-container">
      <h2>Explora nuestras categorías</h2>
      <div className="category-cards">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            onClick={() => onCategoryClick(category)}
          >
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <ContentCategory isLoggedIn={isLoggedIn} selectedCategory={selectedCategory} onMovieClick={onMovieClick} />
      )}
      {selectedMovie && (
        <ContentDetails isLoggedIn={isLoggedIn} movie={selectedMovie} />
      )}
    </div>
  );
};

export default Home;
