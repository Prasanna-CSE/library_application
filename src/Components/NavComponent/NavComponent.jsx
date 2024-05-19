import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BookComponent from "../BookComponent/BookComponent";
import '../NavComponent/NavComponent.css'

const NavComponent = () => {
  return (
    <Router>
      <div className="navigation-container">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<BookComponent/>} />
      </Routes>
    </Router>
  );
};

export default NavComponent;
