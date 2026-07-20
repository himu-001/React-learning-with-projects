import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact Us/contact'
import User from './component/User/User'
import Github from './component/Github/Github'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element : <Home/>
//         }, {
//           path: "about",
//           element : <About />
//         }
//         ,
//         {
//           path: "contact",
//           element : <Contact />
//         }
//       ]
//     }
//   ]
// )

// A loader is a function in React Router that fetches data before a page is rendered.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
