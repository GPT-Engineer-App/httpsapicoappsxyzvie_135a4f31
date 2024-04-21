import React, { createContext, useState, useEffect } from 'react';

export const MockAPIContext = createContext();

export const MockAPIProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [playedGames, setPlayedGames] = useState([]);
  const [gameOutcome, setGameOutcome] = useState(null);
  const [favoriteGames, setFavoriteGames] = useState([]);
  


  const fetchGames = () => {
    // Simulate fetching data from a database
    return games;
  };

  const markGameAsPlayed = (gameName) => {
    // Simulate updating the database by adding the game to the played games list
    if (!playedGames.includes(gameName)) {
      setPlayedGames([...playedGames, gameName]);
    }
  };

  const resetGameOutcome = () => {
    setGameOutcome(null);
  };

  useEffect(() => {
    // Simulate database change effect if needed
  }, [games, playedGames, gameOutcome]);

  const playGame = (gameName) => {
    // Simulate a game play outcome
    const outcome = Math.random() < 0.5 ? 'won' : 'lost';
    setGameOutcome(outcome);
    
    // Mark the game as played
    markGameAsPlayed(gameName);
  };

  const addGameToFavorites = (gameName) => {
    if (!favoriteGames.includes(gameName)) {
      setFavoriteGames([...favoriteGames, gameName]);
    }
  };

  const removeGameFromFavorites = (gameName) => {
    setFavoriteGames(favoriteGames.filter(game => game !== gameName));
  };

  return (
    <MockAPIContext.Provider value={{ games, fetchGames, playedGames, markGameAsPlayed, playGame, gameOutcome, resetGameOutcome, favoriteGames, addGameToFavorites, removeGameFromFavorites }}>
      {children}
    </MockAPIContext.Provider>
  );
};