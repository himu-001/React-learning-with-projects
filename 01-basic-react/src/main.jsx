import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// const reactElement = {
//   type: "a", //whats its type is it div or a or p tag and so on
//   // props means property
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const meow_element = "Meowmeoww"
const newElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target : "_blank"
  },
  'meooow click me to visit google',
  meow_element
)


createRoot(document.getElementById('root')).render(
  
  // reactElement //this gives an console.error;
  // anotherElement // this doesnt give an error
  newElement
    
  
)
