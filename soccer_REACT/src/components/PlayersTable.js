import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
    setPlayers(storedPlayers);
  }, []);

  const displayPlayer = (playerId) => {
    navigate(`/playerInfo/${playerId}`); 
  };

  const updatePlayer = (playerId) => {
    navigate(`/editplayer/${playerId}`); 
  };

  const deletePlayer = (playerId) => {
    const updatedPlayers = players.filter(player => player.id !== playerId);
    setPlayers(updatedPlayers);
    localStorage.setItem('players', JSON.stringify(updatedPlayers)); 
  };

  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 mx-auto text-center">
              <h1 className="text-white">All Players</h1>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Player Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.playerName}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
              <td>
                <button onClick={() => displayPlayer(player.id)} className="btn btn-info">Display</button>
                <button onClick={() => updatePlayer(player.id)} className="btn btn-warning">Edit</button>
                <button onClick={() => deletePlayer(player.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
