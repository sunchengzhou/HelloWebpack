import React from 'react'
import Navtop from './common/navtop.jsx'
import Navslide from './common/navslide.jsx'

class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
              <div>
                  <Navtop />
                  <Navslide />
                  {this.props.children}
              </div>             
        )
    }
}
export default Layout;