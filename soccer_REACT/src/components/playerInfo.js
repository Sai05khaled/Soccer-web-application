import React from 'react';

export default function PlayerInfo({ player = {} }) {
    const { name = ' Player', position = ' Position', age = ' Age', image = 'images/default.jpg' } = player;

    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Player Info</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <img src={image} alt="Player Image" className="img-fluid rounded-circle border border-primary" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div>
                            <h2>{name}</h2>
                            <p><strong>Position:</strong> {position}</p>
                            <p><strong>Age:</strong> {age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
