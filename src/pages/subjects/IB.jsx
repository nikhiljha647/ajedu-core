import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const IB = () => {
  const features = [
    'IB Diploma Programme (DP) and MYP support',
    'All subject groups covered (Groups 1-6)',
    'Extended Essay and TOK guidance',
    'Internal Assessment support',
    'CAS activity planning assistance',
    'Experienced IB educators and examiners'
  ]

  const subjects = [
    'IB Mathematics (AA/AI)', 'IB Sciences (Physics, Chemistry, Biology)',
    'IB English (Language & Literature)', 'IB Languages', 'IB Economics',
    'IB Business Management', 'IB Psychology', 'IB History', 'IB Arts'
  ]

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">IB Diploma Tutoring</h1>
              <p className="subject-hero-description">
                Navigate the challenging IB Diploma Programme with expert tutors who understand the unique demands of IB education.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Book IB Tutoring
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Excel in IB Diploma Programme</h2>
                <p className="subject-text">
                  The International Baccalaureate Diploma Programme is known for its rigorous curriculum and holistic approach to education. 
                  Our tutors have extensive IB experience and help students navigate the complexities of HL and SL subjects, Internal Assessments, 
                  Extended Essays, and TOK.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Complete IB Support</h3>
                <p className="subject-text">
                  Beyond subject tutoring, we provide comprehensive support for all components of the IB Diploma Programme. 
                  From choosing the right subjects to polishing your Extended Essay, our tutors guide you through every step 
                  of your IB journey to help you achieve your target score.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>Full IB Coverage</h4>
                    <p>All six subject groups plus TOK, EE, and CAS support</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>IB Specialists</h4>
                    <p>Tutors with IB teaching and examining experience</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Flexible Support</h4>
                    <p>Available for HL, SL, and all assessment components</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>High Achievers</h4>
                    <p>Our students average 38+ points in the IB Diploma</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>IB Subjects</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>We Help With</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Subject Selection
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Internal Assessments
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Extended Essay
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      TOK Essay
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Ready for IB Success?</h3>
                  <p>Start your IB journey with expert guidance tailored to your needs.</p>
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

export default IB
