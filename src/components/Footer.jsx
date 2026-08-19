import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import logo from '../assets/aj-logo.svg'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const courseLinks = [
    { name: 'A/AS Level', path: '/courses' },
    { name: 'AP Courses', path: '/courses' },
    { name: 'NEET Course', path: '/courses' },
    { name: 'CBSE Course', path: '/courses' },
    { name: 'IB Course', path: '/courses' },
    { name: 'JEE Mains Course', path: '/courses' },
    { name: 'IGCSE/GCSE', path: '/courses' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="AJ Edu Core" className="footer-logo-image" />
            </Link>
            <p className="footer-tagline">
              Professional online tutoring that helps you unlock your full academic potential.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Our Courses</h3>
            <ul className="footer-links">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href="tel:96460 11039" className="footer-link">
                 96460 11039 </a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:abhishekavi532@gmail.com" className="footer-link">
                 abhishekavi532@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Online Tutoring Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer
