import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const NEET = () => {
  const features = [
    'Complete NEET syllabus coverage (Physics, Chemistry, Biology)',
    'NCERT-focused teaching methodology',
    'Daily practice with NEET-pattern questions',
    'Regular mock tests and performance analysis',
    'Time management and exam strategies',
    'Doubt clearing sessions available 24/7'
  ]

  const subjects = ['Physics', 'Chemistry', 'Botany', 'Zoology', 'NCERT Solutions', 'Previous Year Papers']

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">NEET Preparation</h1>
              <p className="subject-hero-description">
                Comprehensive NEET coaching to help you crack India's toughest medical entrance exam with top scores.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Start NEET Preparation
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Your Path to Medical College</h2>
                <p className="subject-text">
                  NEET (National Eligibility cum Entrance Test) is the gateway to your dream of becoming a doctor. 
                  Our expert tutors provide comprehensive preparation covering Physics, Chemistry, and Biology with 
                  special focus on NCERT textbooks and NEET exam patterns.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Why Choose Us for NEET?</h3>
                <p className="subject-text">
                  We understand the pressure and challenges of NEET preparation. Our structured approach combines 
                  conceptual clarity, regular practice, and strategic exam preparation to maximize your score. 
                  With personalized attention and proven teaching methods, we've helped numerous students secure 
                  seats in top medical colleges.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>NCERT Mastery</h4>
                    <p>In-depth coverage of all NCERT concepts with additional practice</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Expert Faculty</h4>
                    <p>Tutors with proven track records in NEET coaching</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Daily Practice</h4>
                    <p>Regular assignments and tests to build speed and accuracy</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Proven Results</h4>
                    <p>85% of our students score above 600 in NEET</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>Subjects Covered</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Study Material</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      NCERT Books
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Practice Papers
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Mock Tests
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Study Notes
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Begin Your Journey</h3>
                  <p>Book a free demo class and start your NEET preparation with expert guidance.</p>
                  <Link to="/book-session" className="btn btn-primary btn-full">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default NEET
