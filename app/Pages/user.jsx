import React from 'react'
import Landing from './Landing.jsx'

class User extends Landing {
  constructor(props) {
    super(props);
    this.query = this.getQuery();
    console.log(this.query)
  }
  render() {
    return (
        <div>
          用户：张三
        </div>
    )
  }
}
export default User;