import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const CBSE = () => {
  const features = [
    'Complete CBSE curriculum for Classes 6-12',
    'NCERT textbook-based teaching',
    'Board exam focused preparation',
    'Regular chapter tests and assessments',
    'Comprehensive doubt solving',
    'Previous year question paper practice'
  ]

  const subjects = [
    'Mathematics', 'Science (Physics, Chemistry, Biology)', 'English',
    'Social Studies', 'Hindi', 'Accountancy', 'Business Studies', 'Economics'
  ]

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">CBSE Board Tutoring</h1>
              <p className="subject-hero-description">
                Excel in your CBSE board exams with personalized online tutoring covering all subjects for classes 6 to 12.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Book Your Session
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Master CBSE Curriculum</h2>
                <p className="subject-text">
                  The Central Board of Secondary Education (CBSE) is one of India's most prominent education boards. 
                  Our tutoring program is designed to help students from classes 6 to 12 build strong foundations, 
                  understand concepts clearly, and excel in their board examinations.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Our CBSE Program</h3>
                <p className="subject-text">
                  We follow the NCERT curriculum strictly and ensure that students understand every concept thoroughly. 
                  Our teaching methodology includes regular practice, chapter-wise tests, and comprehensive revision sessions 
                  to help students perform their best in board exams.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>NCERT Based</h4>
                    <p>Complete coverage of NCERT textbooks and supplementary materials</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Experienced Teachers</h4>
                    <p>Qualified educators with CBSE teaching experience</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Regular Classes</h4>
                    <p>Consistent schedule with flexible timing options</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Top Results</h4>
                    <p>Students consistently score above 90% in board exams</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>Subjects We Teach</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Classes Available</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Class 6-8
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Class 9-10
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Class 11-12
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      All Streams
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Start Learning Today</h3>
                  <p>Join thousands of successful CBSE students and achieve your academic goals.</p>
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

export default CBSE
