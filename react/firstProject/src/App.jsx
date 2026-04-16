// import React from "react";
// import { Component } from 'react'
// import "./index.css";


// let App= ()=>{

//   let name = "Abishek";

//   return (
//     <div>
//       <h1 style={{color:"red"}} className="h1tag">hello {name}</h1>
//     </div>
//   )

// }

// export default App;



import React from 'react'
import Cart from './day1/assignment/Cart'
import Child from './day1/practise/Child'

const App = () => {

  // let car1="hello";
  // let car2="hello hii";
  // let var3="hello hii.....";


  // let name1 ="Abishek Yadav";
  // let name2 ="Rahul Yadav";
  // let name3 ="Yadav";

  // let about ="i am a btech student";
  // let about2="I am a school student";
  // let about3="I am yadav";


  // let user1={
  //   name:"Abishek",
  //   bio:"i am a btech student",
  //   age:22
  // }
  // let user2={
  //   name:"rahul",
  //   bio:"i am a School student",
  //   age:"not given plse assign"
  // }
  


  return (
    <div>
      {/* <Cart variable={name1} v1={about}/>
      <Cart variable={name2} v1={about2}/>
      <Cart variable={name3} v1={about3}/> */}
      {/* <Cart variable={user1}/>
      <Cart variable={user2} /> */}
      {/* <Cart variable={name3} /> */}

      {/* <Cart variable={car1}/>
      <Cart variable ={car2}/>
      <Cart  variable ={var3}/> */}

      <Child>
        <h1>This is 1</h1>
        <h1>This is 2</h1>

      </Child>


      
    </div>
  )
}

export default App