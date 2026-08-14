import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import logo from '../assets/aj-logo.svg'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const courseLinks = [
    { name: 'A/AS Level', path: '/subjects' },
    { name: 'AP Courses', path: '/subjects' },
    { name: 'NEET Course', path: '/subjects' },
    { name: 'CBSE Course', path: '/subjects' },
    { name: 'IB Course', path: '/subjects' },
    { name: 'JEE Mains Course', path: '/subjects' },
    { name: 'IGCSE/GCSE', path: '/subjects' }
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
