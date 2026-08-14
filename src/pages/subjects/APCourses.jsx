import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const APCourses = () => {
  const features = [
    'Expert tutoring for all AP subjects',
    'College Board certified curriculum coverage',
    'Intensive exam preparation and practice tests',
    'Score improvement strategies',
    'College credit guidance and planning',
    'Small group or one-on-one sessions'
  ]

  const subjects = [
    'AP Calculus AB/BC', 'AP Physics 1, 2, C', 'AP Chemistry', 'AP Biology',
    'AP English Language', 'AP English Literature', 'AP US History',
    'AP World History', 'AP Computer Science', 'AP Statistics'
  ]

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">AP Courses Tutoring</h1>
              <p className="subject-hero-description">
                Master AP courses and earn college credit with personalized tutoring from experienced educators who know what it takes to score a 5.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Start Your AP Journey
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Achieve Your Best AP Score</h2>
                <p className="subject-text">
                  Advanced Placement courses are college-level classes that can earn you college credit and strengthen your university applications. 
                  Our tutors have extensive experience with AP curriculum and exams, helping students consistently achieve scores of 4 and 5.
                </p>
                
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} color="var(--primary-color)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="subject-subsection-title">Our AP Program</h3>
                <p className="subject-text">
                  We understand that AP courses move quickly and demand deep conceptual understanding. Our tutoring program 
                  helps you master complex material, develop critical thinking skills, and excel in both coursework and the final AP exam.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>College Board Aligned</h4>
                    <p>Curriculum perfectly matched to College Board standards and exam format</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Experienced AP Teachers</h4>
                    <p>Tutors with years of AP teaching and exam grading experience</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Year-Round Support</h4>
                    <p>Available throughout the school year and intensive pre-exam prep</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>High Success Rate</h4>
                    <p>90% of our students score 4 or 5 on their AP exams</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>Popular AP Subjects</h3>
                  <ul className="subjects-list">
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Why AP Matters</h3>
                  <ul className="exam-boards-list">
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Earn college credit
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Strengthen applications
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Save on tuition
                    </li>
                    <li>
                      <CheckCircle size={16} color="var(--primary-color)" />
                      Build skills
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Ready to Excel?</h3>
                  <p>Start your AP preparation with a free consultation and personalized study plan.</p>
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

export default APCourses
