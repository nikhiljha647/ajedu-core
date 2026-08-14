import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const IGCSE = () => {
  const features = [
    'Cambridge and Edexcel IGCSE/GCSE coverage',
    'Comprehensive subject tutoring',
    'Past paper practice and analysis',
    'Exam technique and strategy',
    'Coursework and practical support',
    'Flexible online and offline options'
  ]

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'English Language', 'English Literature', 'Economics',
    'Business Studies', 'Computer Science', 'Geography', 'History'
  ]

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">IGCSE/GCSE Tutoring</h1>
              <p className="subject-hero-description">
                Achieve top grades in your IGCSE and GCSE exams with personalized tutoring from experienced Cambridge and Edexcel specialists.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Start Learning
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Master IGCSE/GCSE</h2>
                <p className="subject-text">
                  IGCSE and GCSE qualifications are internationally recognized and form the foundation for A-Levels, IB, and university education. 
                  Our expert tutors provide comprehensive support for both Cambridge and Edexcel exam boards, ensuring you understand concepts 
                  deeply and develop excellent exam techniques.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Our Approach</h3>
                <p className="subject-text">
                  We focus on building strong fundamentals while preparing students for the specific requirements of IGCSE/GCSE exams. 
                  Our tutoring includes regular practice with past papers, detailed feedback, and targeted improvement in weak areas. 
                  We help students develop the confidence and skills needed to excel.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>Complete Syllabus</h4>
                    <p>Full coverage of Cambridge and Edexcel specifications</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Qualified Tutors</h4>
                    <p>Experienced IGCSE/GCSE teachers and examiners</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Flexible Schedule</h4>
                    <p>Sessions tailored to your school timetable</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Excellent Results</h4>
                    <p>92% of our students achieve A*/A grades</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>Popular Subjects</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Exam Boards</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Cambridge (CIE)
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Edexcel
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      AQA
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      OCR
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Start Your Journey</h3>
                  <p>Book a free trial session and experience quality IGCSE/GCSE tutoring.</p>
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

export default IGCSE
