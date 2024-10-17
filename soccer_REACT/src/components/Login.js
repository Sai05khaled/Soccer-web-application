import React from 'react';

export default function Login() {
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
              <h1 className="text-white">Login</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Login</button>
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
