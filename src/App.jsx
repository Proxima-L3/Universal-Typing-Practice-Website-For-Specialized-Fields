import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import BasicTypingTestsPage from './pages/BasicTypingTestsPage.jsx'
import LeaderboardsPage from './pages/LeaderboardsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import TimedTypingTest from './components/TimedTypingTest.jsx';

// Main App function to be exported to main.jsx & index.html
function App() {

  return (
    <>
      {/* <HomePage/> */}

      <nav>
        <Link to='/HomePage'>Home</Link> |{' '}
        <Link to='/BasicTypingTestsPage'>Basic Typing Tests</Link> |{' '}
        <Link to='/LeaderboardsPage'>Leaderboards</Link> |{' '}
        <Link to='/AboutPage'>About</Link> |{' '}
        <Link to='/ContactUsPage'>Contact Us</Link>
      </nav>

      <Routes>
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/BasicTypingTestsPage' element={<BasicTypingTestsPage/>} />
        <Route path='/LeaderboardsPage' element={<LeaderboardsPage/>} />
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path='/ContactUsPage' element={<ContactUsPage/>} />
      </Routes>

      
      {/* <TimedTypingTest></TimedTypingTest> */}
    </>
  )
}

export default App;