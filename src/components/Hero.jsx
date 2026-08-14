import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'
import './Hero.css'

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">Professional Online Tutoring</span>
            <h1 className="hero-title">
              Unlock Your Full <span className="text-highlight">Academic Potential</span>
            </h1>
            <p className="hero-description">
              Personalized online tutoring that adapts to your learning style. Expert guidance to help you excel in your studies.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToBooking} className="btn btn-primary">
                Get Started Today
              </button>
              <Link to="/subjects" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-form-wrapper">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
