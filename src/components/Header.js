import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand">React App</p>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/catalog">Catalog</Link> </li>


          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="!#" >Retrival <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/user-list">User List</Link> </li>
              <li><Link to="/user-table">User Table</Link> </li>
              <li><Link to="/posts">Posts</Link> </li>
              <li><Link to="/to-do">Todo</Link> </li>
              <li><Link to="/albums">Albums</Link> </li>
              <li><Link to="/photos">Photos</Link> </li>
              <li><Link to="/comments">Comments</Link> </li>
            </ul>
          </li>


          <li><Link to="/parent">State Lifting</Link> </li>
          <li><Link to="/pure-component">Pure Component</Link> </li>
          <li><Link to="/context-api">Context API</Link> </li>
          <li><Link to="/high-order">High Order Component</Link></li>


          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href='!#'>Assignments <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/country-assignment">Country Assignment</Link> </li>
            </ul>
          </li>
        </ul>


        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/sign-up"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
          <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}
