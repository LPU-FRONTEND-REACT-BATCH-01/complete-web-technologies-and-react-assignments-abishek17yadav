// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  //--->to join virtual dom with react dom createRoot is a function used to join virtual dom with real dom
// import './index.css'
import App from './App.jsx'



//given acces of root to react 
createRoot(document.getElementById('root')).render(

    <App />
 
)
// App.jsx  --- is the root element//combime multiple componets amd make a single component that is app.jsx
//inside render ----> we will provide the root component


// componet is a simple js function or a class 
// 1.class based components--- we used till react 16 , but now no one will use it because it has more boiler plate code

// 2.function based components--




