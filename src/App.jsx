import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { NotFound } from './components/NotFound/NotFound'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
