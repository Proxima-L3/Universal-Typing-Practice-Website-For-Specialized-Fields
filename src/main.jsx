import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

// redirect is set to null (falsy) if key does not exist and if it does exist it is set to the value of the key which is a string (truthy).. then key/value is removed from session storage so code doesnt run on a normal page load only when 404.html is loaded on subpage refresh.. then change url without triggering page navigation (react router automatically takes care of page navigation when the url changes to a subpath)
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Universal-Typing-Practice-Website-For-Specialized-Fields/'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
