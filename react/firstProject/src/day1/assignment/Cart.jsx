import React from 'react'

const Cart = (props) => {

    // let [user:{name, bio}]=props;

let{variable:{name , bio,age}}=props;

  return (



    <div style={{height:"200px", color:"red" ,border:"2px solid black" , width:"200px"}}>
        {/* <h1>this is a cart component</h1> */}
        {/* <h1>{props.variable}</h1> */}
        {/* <h1>{props.variable.name}</h1>
        <p>{props.variable.bio}</p> */}
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>{age}</p>
        {/* <p>{props.v1.bio}</p> */}



        
    </div>
  )
}

export default Cart