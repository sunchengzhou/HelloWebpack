import React from 'react'
import './css/vue.scss'

class Vue extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
          <div className="row">
            <h1 className="col-md-4 col-md-offset-4 margin-top2">vue常见问题</h1>
          </div>
          <p className="btn btn-primary">常见问题：</p>
        </div>
    )
  }
}
export default Vue;