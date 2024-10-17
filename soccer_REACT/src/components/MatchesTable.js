import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { io } from 'socket.io-client';

export default function MatchesTable() {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  const socket = io("http://localhost:3000");

  useEffect(() => {
    getAllMatches();

    socket.on('matchAdded', (newMatch) => {
      setMatches((prevMatches) => [...prevMatches, newMatch]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const displayMatch = (id) => {
    navigate(`/matchInfo/${id}`);
  };

  const updateMatch = (id) => {
    navigate(`/editMatch/${id}`);
  };

  const deleteMatch = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/matches/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.isDeleted) {
        Swal.fire({
          title: "Deleted!",
          text: "Your match has been deleted.",
          icon: "success",
        });
        setMatches((prevMatches) =>
          prevMatches.filter((match) => match._id !== id)
        );
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to delete the match.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the match.",
        icon: "error",
      });
    }
  };

  const getAllMatches = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/matches", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMatches(data.matches);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch matches. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Score One</th>
            <th>Score Two</th>
            <th>Team One</th>
            <th>Team Two</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match._id}>
              <td>{match._id}</td>
              <td>{match.scoreOne}</td>
              <td>{match.scoreTwo}</td>
              <td>{match.teamOne}</td>
              <td>{match.teamTwo}</td>
              <td>
                <button
                  onClick={() => displayMatch(match._id)}
                  className="btn btn-info"
                >
                  Display
                </button>
                <button
                  onClick={() => updateMatch(match._id)}
                  className="btn btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMatch(match._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}





/*
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { io } from 'socket.io-client';

export default function MatchesTable() {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  const socket = io("http://localhost:3000"); 

  useEffect(() => {
    getAllMatches();

    socket.on('matchAdded', (newMatch) => {
      setMatches((prevMatches) => [...prevMatches, newMatch]);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  const displayMatch = (path) => {
    navigate(path);
  };

  const deleteMatch = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/matches/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.isDeleted) {
        Swal.fire({
          title: "Deleted!",
          text: "Your match has been deleted.",
          icon: "success"
        });
        setMatches(prevMatches => prevMatches.filter(match => match._id !== id));
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to delete the match.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the match.",
        icon: "error"
      });
    }
  };

  const updateMatch = (path) => {
    navigate(path);
  };

  const getAllMatches = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/matches", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMatches(data.matches);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch matches. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Score One</th>
            <th>Score Two</th>
            <th>Team One</th>
            <th>Team Two</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((value) => (
            <tr key={value._id}>
              <td>{value._id}</td>
              <td>{value.scoreOne}</td>
              <td>{value.scoreTwo}</td>
              <td>{value.teamOne}</td>
              <td>{value.teamTwo}</td>
              <td>
                <button onClick={() => displayMatch('/matchInfo/' + value._id)} className="btn btn-info">Display</button>
                <button onClick={() => updateMatch('/editMatch/' + value._id)} className="btn btn-warning">Edit</button>
                <button onClick={() => deleteMatch(value._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/