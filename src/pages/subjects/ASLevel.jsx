import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const ASLevel = () => {
  const features = [
    'Comprehensive coverage of all A/AS Level subjects',
    'Experienced tutors with proven track records',
    'Personalized study plans tailored to your exam board',
    'Past paper practice and exam technique strategies',
    'Regular progress assessments and feedback',
    'Flexible scheduling to fit your needs'
  ]

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'English Literature', 'Economics', 'Business Studies',
    'Computer Science', 'Psychology', 'History'
  ]

  const examBoards = ['Cambridge (CIE)', 'Edexcel', 'AQA', 'OCR']

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">A/AS Level Tutoring</h1>
              <p className="subject-hero-description">
                Excel in your A/AS Level exams with expert one-on-one tutoring tailored to your exam board and learning style.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Book Your First Session
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Why Choose Our A/AS Level Program?</h2>
                <p className="subject-text">
                  A/AS Levels are crucial qualifications that can determine your university placement and future career path. 
                  Our expert tutors understand the demands of the curriculum and have helped hundreds of students achieve 
                  top grades across all exam boards.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">What We Offer</h3>
                <p className="subject-text">
                  Our A/AS Level tutoring program is designed to build confidence and competence in your chosen subjects. 
                  We focus on understanding core concepts, developing problem-solving skills, and mastering exam techniques 
                  that examiners look for.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>Comprehensive Curriculum</h4>
                    <p>Complete coverage of all topics with detailed explanations and examples</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Expert Tutors</h4>
                    <p>Qualified teachers with A/AS Level teaching experience</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Flexible Schedule</h4>
                    <p>Sessions available 7 days a week to suit your timetable</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Proven Results</h4>
                    <p>95% of our students achieve their target grades</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>Available Subjects</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Exam Boards We Cover</h3>
                  <ul className="exam-boards-list">
                    {examBoards.map((board, index) => (
                      <li key={index}>
                        <CheckCircle size={16} color="var(--primary-color)" />
                        {board}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Ready to Start?</h3>
                  <p>Book your free consultation session today and take the first step toward A/AS Level success.</p>
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

export default ASLevel
