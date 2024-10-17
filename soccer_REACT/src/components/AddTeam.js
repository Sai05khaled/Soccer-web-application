
import React, { useState } from 'react';

export default function AddTeam() {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [foundation, setFoundation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { name, owner, foundation });

        let TeamTable = JSON.parse(localStorage.getItem('teams')) || [];
        
        const team = { name, owner, foundation };

        TeamTable.push(team);
        localStorage.setItem("teams", JSON.stringify(TeamTable));
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
                            <h1 className="text-white">Add Team</h1>
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control" 
                                        placeholder="Team Name" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        value={owner}
                                        onChange={(e) => setOwner(e.target.value)}
                                        className="form-control" 
                                        placeholder="Owner" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        value={foundation}
                                        onChange={(e) => setFoundation(e.target.value)}
                                        className="form-control" 
                                        placeholder="Foundation Year" 
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger">Add Team</button>
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



