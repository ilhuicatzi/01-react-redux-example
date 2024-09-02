import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewTask from './pages/NewTask'
import Navbar from './components/navbar/Navbar'
import EditTask from './pages/EditPage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/newTask" element={<NewTask />} />
        <Route path="/editTask/:id" element={<EditTask />} />
      </Routes>
    </div>
  )
}

export default App