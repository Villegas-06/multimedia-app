import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ContentCategory from './components/ContentCategory/ContentCategory';
import ContentDetails from './components/ContentDetails/ContentDetails';
import Register from './components/Register/Register';
import { Category, Movie } from './types/types'; 
import contentData from './data/content.json'; 
import Navbar from './components/Navbar/Navbar';
import { useAuth } from './authProvider';

const App: React.FC = () => {
  const { isLoggedIn, login, logout, register } = useAuth();
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedMovie(null);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
        <Routes>
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Home
                  isLoggedIn={isLoggedIn}
                  categories={contentData.categories}
                  selectedCategory={selectedCategory}
                  selectedMovie={selectedMovie}
                  onCategoryClick={handleCategoryClick}
                  onMovieClick={handleMovieClick}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/home" /> : <Register onRegister={register} />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={login} />}
          />
          <Route
            path="/category/:category"
            element={
              isLoggedIn ? (
                <ContentCategory isLoggedIn={isLoggedIn} selectedCategory={selectedCategory} onMovieClick={handleMovieClick} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/details/:id"
            element={
              isLoggedIn ? (
                <ContentDetails isLoggedIn={isLoggedIn} movie={selectedMovie} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
