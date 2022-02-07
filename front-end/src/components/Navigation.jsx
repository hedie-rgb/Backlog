import React from "react";
import { NavLink } from "react-router-dom";


/*
creating navigator as header
*/

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Testcase Backlog
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dummy1">
                  Dummy1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dummy2">
                  Dummy2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dummy3">
                  Dummy3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testcase">
                  Testcase Backlog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testcase/create">
                  Create TestCase
                </NavLink>
              </li><li className="nav-item">
                <NavLink className="nav-link" to="/testcase/delete">
                  Delete TestCase
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;