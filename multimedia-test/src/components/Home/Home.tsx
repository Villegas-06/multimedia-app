import React from 'react';
import { Category } from '../../types/types';
import '../../styles/home.css'

interface Props {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

const Home: React.FC<Props> = ({ categories, onCategoryClick }) => {
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
    </div>
  );
};

export default Home;
