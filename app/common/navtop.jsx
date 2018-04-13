import React from 'react'

class Navtop extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container" style={{'marginTop':'15px','marginBottom':'15px'}}>
            <button className="btn btn-primary">React之家</button>
        </div>
      </nav>
    )
  }
}

export default Navtop;