import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '70px'}}>
        <div className= {`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.Type}</strong> {props.alert.mssg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    </div>
  )
}

export default Alert
