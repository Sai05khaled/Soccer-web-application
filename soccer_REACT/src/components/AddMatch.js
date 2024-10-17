import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddMatch() {
    const { id } = useParams(); // Get match ID from URL params
    const navigate = useNavigate(); // React Router navigation hook
    const [title, setTitle] = useState('Add Match'); // Title for form
    const [match, setMatch] = useState({
        teamOne: '',
        teamTwo: '',
        scoreOne: '',
        scoreTwo: ''
    }); // State for match data
    const [error, setError] = useState(null); // State for error messages

    // Fetch existing match details if editing (when id is available)
    useEffect(() => {
        if (id) {
            setTitle('Edit Match');
            axios.get(`http://localhost:3000/api/matches/${id}`)
                .then((response) => {
                    let matchObj = response.data.match;
                    setMatch({
                        teamOne: matchObj.teamOne,
                        teamTwo: matchObj.teamTwo,
                        scoreOne: matchObj.scoreOne,
                        scoreTwo: matchObj.scoreTwo
                    });
                })
                .catch((error) => {
                    console.error("Error fetching match data:", error);
                    setError("Unable to fetch match data.");
                });
        }
    }, [id]);

    // Handle form submission (either create or update a match)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Reset error state

        // Basic validation check
        if (!match.teamOne || !match.teamTwo || !match.scoreOne || !match.scoreTwo) {
            setError("Please fill in all fields.");
            return;
        }

        let matchData = {
            teamOne: match.teamOne,
            teamTwo: match.teamTwo,
            scoreOne: match.scoreOne,
            scoreTwo: match.scoreTwo
        };

        try {
            if (id) {
                // Update existing match
                const response = await axios.put(`http://localhost:3000/api/matches/${id}`, matchData);
                if (response.status === 200) {
                    navigate("/matchesTable");
                }
            } else {
                // Create new match
                const response = await axios.post("http://localhost:3000/api/matches", matchData);
                if (response.status === 201) {
                    navigate("/matchesTable");
                }
            }
        } catch (error) {
            console.error("Error submitting match data:", error);
            setError("Error submitting match data.");
        }
    };

    return (
        <div className="site-wrap">
            <header className="site-navbar py-4" role="banner">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="site-logo">
                            <a href="/">
                                <img src="images/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={match.teamOne}
                                        onChange={(e) => setMatch({ ...match, teamOne: e.target.value })}
                                        className="form-control"
                                        placeholder="Team One"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={match.teamTwo}
                                        onChange={(e) => setMatch({ ...match, teamTwo: e.target.value })}
                                        className="form-control"
                                        placeholder="Team Two"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        value={match.scoreOne}
                                        onChange={(e) => setMatch({ ...match, scoreOne: e.target.value })}
                                        className="form-control"
                                        placeholder="Score One"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        value={match.scoreTwo}
                                        onChange={(e) => setMatch({ ...match, scoreTwo: e.target.value })}
                                        className="form-control"
                                        placeholder="Score Two"
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-danger">{title}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}













/*
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddMatch() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('Add Match');
    const [match, setMatch] = useState({
        teamOne: '',
        teamTwo: '',
        scoreOne: '',
        scoreTwo: ''
    });

    useEffect(() => {
        if (id) {
            setTitle('Edit Match');
            axios.get(`http://localhost:3000/api/matches/${id}`)
                .then((response) => {
                    let matchObj = response.data.match;
                    setMatch({
                        teamOne: matchObj.teamOne,
                        teamTwo: matchObj.teamTwo,
                        scoreOne: matchObj.scoreOne,
                        scoreTwo: matchObj.scoreTwo
                    });
                })
                .catch((error) => {
                    console.log("Error fetching match data:", error);
                });
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let matchData = {
            teamOne: match.teamOne,
            teamTwo: match.teamTwo,
            scoreOne: match.scoreOne,
            scoreTwo: match.scoreTwo
        };

        try {
            if (id) {
                const response = await axios.put(`http://localhost:3000/api/matches/${id}`, matchData);
                if (response.status === 200) {
                    navigate("/matchesTable");
                }
            } else {
                const response = await axios.post("http://localhost:3000/api/matches", matchData);
                if (response.status === 201) {
                    navigate("/matchesTable");
                }
            }
        } catch (error) {
            console.log("Error submitting match data:", error);
        }
    };













    return (
        <div className="site-wrap">
            <header className="site-navbar py-4" role="banner">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="site-logo">
                            <a href="/">
                                <img src="images/logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="ml-auto">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                </ul>
                            </nav>
                            <button className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-white">
                                <span className="icon-menu h3 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={match.teamOne}
                                        onChange={(e) => setMatch({ ...match, teamOne: e.target.value })}
                                        className="form-control"
                                        placeholder="Team One"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={match.teamTwo}
                                        onChange={(e) => setMatch({ ...match, teamTwo: e.target.value })}
                                        className="form-control"
                                        placeholder="Team Two"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        value={match.scoreOne}
                                        onChange={(e) => setMatch({ ...match, scoreOne: e.target.value })}
                                        className="form-control"
                                        placeholder="Score One"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        value={match.scoreTwo}
                                        onChange={(e) => setMatch({ ...match, scoreTwo: e.target.value })}
                                        className="form-control"
                                        placeholder="Score Two"
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-danger">{title}</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/