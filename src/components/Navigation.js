import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div>
                   {/*This is nav Section*/}
      <section className="navig">
      <nav className="navbar navbar-default navbar-custom navig ">
      <ul className="nav navbar-nav navbar-left">
      <li className="/"><Link to="/">My PortFolio</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li className="/resume"><Link to="/resume">Resume</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
      </section>
            </div>
        )
    }
}

export default Navigation
