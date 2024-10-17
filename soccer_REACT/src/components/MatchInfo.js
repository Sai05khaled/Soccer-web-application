import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MatchInfo() {
    const [match, setMatch] = useState({});
    const params = useParams();

    useEffect(() => {
        let matchId = params.id;
        axios.get(`http://localhost:3000/api/matches/${matchId}`)
            .then((response) => {
                console.log("Here response from the backend:", response.data);
                setMatch(response.data.match);
            })
            .catch((error) => {
                console.error("Error fetching match data:", error);
            });
    }, [params.id]);

    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Match Info</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex team-vs">
                            <span className="score">{match.scoreOne}-{match.scoreTwo}</span>
                            <div className="team-1 w-50">
                                <div className="team-details w-100 text-center">
                                    <img src="images/logo_1.png" alt="Team One Logo" className="img-fluid" />
                                    <h3>{match.teamOne} <span>(win)</span></h3>
                                </div>
                            </div>
                            <div className="team-2 w-50">
                                <div className="team-details w-100 text-center">
                                    <img src="images/logo_2.png" alt="Team Two Logo" className="img-fluid" />
                                    <h3>{match.teamTwo} <span>(loss)</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
