import React, { useEffect, useState } from 'react';

export default function TeamsTable() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const storedTeams = JSON.parse(localStorage.getItem('teams') || '[]');
        setTeams(storedTeams);
    }, []);

    const handleDisplay = (teamId) => {
        console.log(`Display team with ID: ${teamId}`);
    };

    const handleEdit = (teamId) => {
        console.log(`Edit team with ID: ${teamId}`);
    };

    const handleDelete = (teamId) => {
        const updatedTeams = teams.filter(team => team.id !== teamId);
        setTeams(updatedTeams);
        localStorage.setItem('teams', JSON.stringify(updatedTeams));
        console.log(`Deleted team with ID: ${teamId}`);
    };

    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">All Teams</h1>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team Name</th>
                        <th>Owner</th>
                        <th>Foundation Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.id}</td>
                            <td>{team.TeamName}</td>
                            <td>{team.Owner}</td>
                            <td>{team.FoundationYear}</td>
                            <td>
                                <button onClick={() => handleDisplay(team.id)} className="btn btn-info">Display</button>
                                <button onClick={() => handleEdit(team.id)} className="btn btn-warning">Edit</button>
                                <button onClick={() => handleDelete(team.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
