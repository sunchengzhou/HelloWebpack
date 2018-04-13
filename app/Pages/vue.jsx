import React from 'react'
import './css/vue.scss'
import Landing from './Landing.jsx';
import User from './user.jsx';

class Vue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      island: true
    };
    ["handClick1","handClick2"].forEach((method)=>{
      this[method] = (this[method].bind(this))
    })
  }
  handClick1(){
    console.log(1)
  }
  handClick2(){
    console.log(2)
  }
  render() {
    return (
        <div>
          <div className="row">
            <h1 className="col-md-4 col-md-offset-4 margin-top2">vue常见问题</h1>
          </div>
          <div>
            {
              this.state.island && <Landing />
            }
            <User />
          </div>
          <p className="btn btn-primary" onClick={this.handClick1}>alert1</p>
          <p className="btn btn-primary" onClick={this.handClick2}>alert2</p>
        </div>
    )
  }
}
export default Vue;