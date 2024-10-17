import React, { useState, useEffect } from 'react';

export default function TeamInfo() {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        
        const storedTeams = JSON.parse(localStorage.getItem('teams')) || [];
        if (storedTeams.length > 0) {
            setTeam(storedTeams[storedTeams.length - 1]); 
        }
    }, []);

    if (!team) {
        return <p>No team information available. Please add a team first.</p>;
    }

    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Team Info</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <img src="images/logo_1.png" alt={`${team.name} Logo`} className="img-fluid rounded-circle border border-primary" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div>
                            <h2>{team.name}</h2>
                            <ul className="list-unstyled">
                                <li><strong>Founded:</strong> {team.foundation}</li>
                                <li><strong>Owner:</strong> {team.owner}</li>
                                <li><strong>Name:</strong> {team.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}








