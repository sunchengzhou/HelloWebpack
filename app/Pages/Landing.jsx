import React from 'react'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  getQuery() {
    return 'querying'
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
          已登录，用户名：张三
        </div>
    )
  }
}
export default Landing;