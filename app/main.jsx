import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import Index from './Pages/index.jsx'
import Info from './Pages/info.jsx'
import Layout from './layout.jsx'

import './main.css'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
     <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Index}/>
              <Route path="/info" component={Info}>
            </Route>
            <Redirect from="*" to="/"/>
          </Switch>
        </Router>
    </Layout>     
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);