import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import './AboutSection.css'

const AboutSection = () => {
  const highlights = [
    'Personalized one-on-one tutoring sessions',
    'Expert tutors with proven track records',
    'Flexible scheduling that fits your lifestyle',
    'Comprehensive support across all major curricula'
  ]

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
              alt="Students learning together" 
              className="about-image"
            />
            {/* <div className="about-image-overlay">
              <div className="stats-badge">
                <div className="badge-number">10+</div>
                <div className="badge-text">Years Experience</div>
              </div>
            </div> */}
          </div>

          <div className="about-text-content">
            <span className="about-eyebrow">About AJ Edu Core</span>
            <h2 className="about-title">Empowering Students to Achieve Academic Excellence</h2>
            <p className="about-description">
              At AJ Edu Core, we believe every student has the potential to excel. Our mission is to provide 
              high-quality, personalized online tutoring that adapts to each student's unique learning style and pace.
            </p>
            <p className="about-description">
              With a team of expert educators and a proven teaching methodology, we've helped thousands of 
              students achieve their academic goals and build confidence in their abilities.
            </p>

            <ul className="about-highlights">
              {highlights.map((highlight, index) => (
                <li key={index} className="about-highlight-item">
                  <CheckCircle size={20} className="highlight-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-primary about-btn">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
