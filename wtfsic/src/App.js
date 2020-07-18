import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import RecipeLister from './components/Recipe/RecipeLister';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiUrl = '/api/recipes';
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        console.log(jsonData);
        setRecipeList(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <>
        <RecipeLister recipes={recipeList} />
      </>
    </div>
  );
}

export default App;