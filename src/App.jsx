
import './App.css'

import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, {githubInfoLoader} from './Components/Github/Github'
import Error from './Components/Error'


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='*' element={<Error />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
     </Route>
      
    )
  )

  return (
   <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router}/>
    
   </>
  )
}

export default App
