import React from 'react'
import Navslide from './common/navslide.jsx'

class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
              <div>
                  <Navslide />
                  {this.props.children}
              </div>             
        )
    }
}
export default Layout;