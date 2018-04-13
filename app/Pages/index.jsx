import React from 'react'
import { Link } from 'react-router-dom'
class Index extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="jumbotron masthead"> 
        <div className="container">
          <h1>前端简介</h1>
          <p>当前流行的三大框架vue,react,angular</p>
         <button className="btn btn-primary">点击进入专题</button>
        </div>
      </div>
    )
  }
}
export default Index;