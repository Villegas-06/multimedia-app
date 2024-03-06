import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ContentCategory from './components/ContentCategory/ContentCategory';
import ContentDetails from './components/ContentDetails/ContentDetails';
import { Category, Movie } from './types/types'; // Importa las interfaces Category y Movie
import contentData from './data/content.json'; // Importa el JSON de contenido
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedMovie(null);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <Navbar />
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
          <Home
            categories={contentData.categories}
            onCategoryClick={handleCategoryClick}
          />
          {selectedCategory && (
            <ContentCategory
              category={selectedCategory.name}
              movies={selectedCategory.content as Movie[]}
              onMovieClick={handleMovieClick}
            />
          )}
          {selectedMovie && <ContentDetails movie={selectedMovie} />}
        </>
      )}
    </div>
  );
};

export default App;
