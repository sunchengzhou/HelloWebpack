import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Vue from '../Pages/vue.jsx'

class Navslide extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <nav className="navbar-inverse visible-lg visible-md" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <Link className="navbar-brand" to="/">首页</Link>
              </div>
              <div>
                  <ul className="nav navbar-nav">
                      <li className="active"><Link className="navbar-brand" to="vue">Vue</Link></li>
                      <li><Link className="navbar-brand" to="react">React</Link></li>
                      <li><Link className="navbar-brand" to="angular">Angular</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Navslide;