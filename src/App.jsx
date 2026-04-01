import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import BasicTypingTestsPage from './pages/BasicTypingTestsPage.jsx'
import LeaderboardsPage from './pages/LeaderboardsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Navbar from './components/common/Navbar.jsx';

import './App.css'

// Main App component to be exported to main.jsx & index.html
function App() {

  return (
    <>
      <Navbar/>

      <div className='pageContent'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/BasicTypingTests' element={<BasicTypingTestsPage/>} />
          <Route path='/Leaderboards' element={<LeaderboardsPage/>} />
          <Route path='/About' element={<AboutPage/>} />
          <Route path='/Contact' element={<ContactPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;