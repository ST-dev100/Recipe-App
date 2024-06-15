import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' flex'>
     <Sidebar/>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/favorites' element={<FavoritesPage />} />
     </Routes>
   </div>
  )
}

export default App
