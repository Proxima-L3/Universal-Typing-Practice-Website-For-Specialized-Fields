import { NavLink } from 'react-router-dom';

// import '../App.css'
import '../../styles/Navbar.css';


function Navbar () {

    return (
        <>
            <div className='navbar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/BasicTypingTests'>Basic Typing Tests</NavLink>
                <NavLink to='/Leaderboards'>Leaderboards</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar;