import { Routes, Route } from 'react-router-dom';

import HomePage from '/src/pages/HomePage.jsx';
import BasicTypingTestsPage from '/src/pages/BasicTypingTestsPage.jsx'
import TypingTest from '/src/pages/TypingTest.jsx';
import LeaderboardsPage from '/src/pages/LeaderboardsPage.jsx'
import AboutPage from '/src/pages/AboutPage.jsx'
import ContactPage from '/src/pages/ContactPage.jsx'
import Navbar from '/src/components/common/Navbar.jsx';

import './App.css'

// Main App component to be exported to main.jsx & index.html
function App() {

  return (
    <>
      <Navbar/>

      <div className='pageContent'>
        <Routes>
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields' element={<HomePage/>} />
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields/BasicTypingTests' element={<BasicTypingTestsPage/>} />
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields/BasicTypingTests/TypingTest' element={<TypingTest/>} />
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields/Leaderboards' element={<LeaderboardsPage/>} />
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields/About' element={<AboutPage/>} />
          <Route path='/Universal-Typing-Practice-Website-For-Specialized-Fields/Contact' element={<ContactPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;