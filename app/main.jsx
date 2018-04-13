import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import Index from './Pages/index.jsx'
import Vue from './Pages/vue.jsx'
import Layout from './layout.jsx'


import './main.css'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/vue" component={Vue} />
              <Redirect from="*" to="/" />
            </Switch>
        </Layout>   
    </Router>  
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);