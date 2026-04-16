import React from 'react'

const Child = (props) => {
  return (
    <div>
        <p>{props.children[0]}</p>
        <p>{props.children[1]}</p>

    </div>
  )
}

export default Child