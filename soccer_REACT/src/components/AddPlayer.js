import React, { useState } from 'react';

export default function AddPlayer() {
    const [playerName, setPlayerName] = useState('');
    const [position, setPosition] = useState(''); 
    const [age, setAge] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { playerName, position, age });

        let PlayerTable = JSON.parse(localStorage.getItem('players')) || [];
        const player = { playerName, position, age };
        PlayerTable.push(player);
        localStorage.setItem("players", JSON.stringify(PlayerTable));
    }

    const generateId = (T) => {
        let max;
        if (T.length === 0) {
            max = 0;
        } else {
            max = T[0].id;
            for (let i = 1; i < T.length; i++) {
                if (T[i].id > max) {
                    max = T[i].id;
                }
            }
        }
        return max + 1;
    }
    
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
                            <h1 className="text-white">Add Player</h1>
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
                                        value={playerName}
                                        onChange={(e) => setPlayerName(e.target.value)}
                                        className="form-control" 
                                        placeholder="Player Name" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)} 
                                        className="form-control" 
                                        placeholder="Position" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)} 
                                        className="form-control" 
                                        placeholder="Age" 
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger">Add Player</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
