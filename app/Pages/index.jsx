import React from 'react'
import { Link } from 'react-router-dom'
class Index extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        index.page
        <Link to="/info"/>
      </div>
    )
  }
}
export default Index;