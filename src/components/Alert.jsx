import React from 'react'

export default function Alert(props) {
    const captilize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // handling the shifting problem
    //we are adding new div setting height
    <div style={{height:'50px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captilize(props.alert.type)}</strong> :{props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
      </div>
  )
}
