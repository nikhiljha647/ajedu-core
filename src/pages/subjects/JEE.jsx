import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const JEE = () => {
  const features = [
    'Complete JEE Main and Advanced preparation',
    'Physics, Chemistry, and Mathematics coverage',
    'Daily problem-solving practice',
    'Regular mock tests and analysis',
    'Shortcut techniques and tricks',
    'Previous year questions and test series'
  ]

  const subjects = [
    'Physics', 'Chemistry', 'Mathematics',
    'JEE Main Pattern', 'JEE Advanced Pattern', 'Problem Solving'
  ]

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">JEE Mains Preparation</h1>
              <p className="subject-hero-description">
                Comprehensive JEE Main and Advanced coaching to help you secure admission in top IITs and NITs across India.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Start JEE Prep
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Crack JEE with Confidence</h2>
                <p className="subject-text">
                  JEE (Joint Entrance Examination) is one of the most competitive engineering entrance exams in the world. 
                  Our comprehensive program covers Physics, Chemistry, and Mathematics with intense focus on problem-solving, 
                  time management, and exam strategies that help you maximize your score.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Why Choose Our JEE Program?</h3>
                <p className="subject-text">
                  We understand that JEE demands not just knowledge but also speed, accuracy, and smart problem-solving. 
                  Our tutors are IIT graduates and experienced JEE educators who provide personalized attention, identify your 
                  weak areas, and help you develop a winning strategy for both JEE Main and Advanced.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>Complete Coverage</h4>
                    <p>Full syllabus for both JEE Main and Advanced</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>IIT Graduates</h4>
                    <p>Learn from tutors who cracked JEE themselves</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Intensive Practice</h4>
                    <p>Daily problem-solving and regular mock tests</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Top Results</h4>
                    <p>80% of our students qualify for JEE Advanced</p>
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
                  <h3>Study Resources</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Mock Tests
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Previous Years
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Study Material
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Video Lectures
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Begin Your IIT Journey</h3>
                  <p>Start your JEE preparation today with a free counseling session.</p>
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

export default JEE
