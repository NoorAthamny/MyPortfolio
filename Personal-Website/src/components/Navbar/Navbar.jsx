import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleGetInTouch = () => {
    navigate('/contact')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/work" className="navbar-link work-link">Work</Link>
        </div>
        
        <div className="navbar-center">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="N" className="logo-image" />
          </Link>
        </div>
        
        <div className="navbar-right">
          <button className="navbar-button" onClick={handleGetInTouch}>
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
