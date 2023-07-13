
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { MeetupDetail } from './pages/MeetupDetail'

function App() {
 

  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/meetup/:id" element={<MeetupDetail />}/>
      </Routes>
    </>
  )
}

export default App
