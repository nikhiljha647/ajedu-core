import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Users, Clock, Award } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './SubjectPage.css'

const MCAT = () => {
  const features = [
    'Comprehensive coverage of all four MCAT sections',
    'Experienced instructors with high MCAT scores',
    'Full-length practice tests and AAMC materials',
    'Content review and strategic test-taking techniques',
    'Flexible scheduling to fit your study timeline',
    'Regular progress assessments and personalized feedback'
  ]

  const sections = [
    {
      title: 'Biological & Biochemical Foundations',
      topics: ['General Chemistry', 'Organic Chemistry', 'Biology', 'Biochemistry']
    },
    {
      title: 'Chemical & Physical Foundations',
      topics: ['General Chemistry', 'Organic Chemistry', 'Physics', 'Biochemistry']
    },
    {
      title: 'Psychological, Social & Biological Foundations',
      topics: ['Psychology', 'Sociology', 'Biology']
    },
    {
      title: 'Critical Analysis & Reasoning Skills',
      topics: ['Reading Comprehension', 'Analytical Thinking', 'Critical Reasoning']
    }
  ]

  const studyPlans = ['3-Month Intensive', '6-Month Comprehensive', '12-Month Extended', 'Custom Schedule']

  return (
    <>
      <Header />
      <div className="subject-page">
        <section className="subject-hero">
          <div className="subject-hero-overlay"></div>
          <div className="container">
            <div className="subject-hero-content">
              <h1 className="subject-hero-title">MCAT Preparation</h1>
              <p className="subject-hero-description">
                Excel in the Medical College Admission Test with expert guidance, comprehensive content review, and proven test strategies
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Start Your MCAT Prep
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subject-content-grid">
              <div className="subject-main">
                <h2 className="subject-section-title">Why Choose Our MCAT Course?</h2>
                <p className="subject-text">
                  The MCAT is a challenging and comprehensive examination that requires thorough preparation across multiple disciplines. 
                  Our MCAT course is designed by medical school graduates and experienced instructors who understand what it takes to achieve 
                  a competitive score. We provide a structured approach that covers all content areas while developing critical thinking and 
                  test-taking skills essential for MCAT success.
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
                  Our comprehensive MCAT preparation program covers all four sections of the exam with equal emphasis on content mastery 
                  and critical analysis skills. We provide structured lessons, extensive practice materials, and personalized feedback 
                  to help you achieve your target score.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <BookOpen size={32} color="var(--primary-color)" />
                    <h4>Complete Content Review</h4>
                    <p>200+ hours of comprehensive content coverage across all MCAT sections</p>
                  </div>
                  <div className="info-card">
                    <Users size={32} color="var(--primary-color)" />
                    <h4>Expert Instructors</h4>
                    <p>Tutors with high MCAT scores and medical school experience</p>
                  </div>
                  <div className="info-card">
                    <Clock size={32} color="var(--primary-color)" />
                    <h4>Practice Tests</h4>
                    <p>10+ full-length practice tests with detailed performance analysis</p>
                  </div>
                  <div className="info-card">
                    <Award size={32} color="var(--primary-color)" />
                    <h4>Proven Success</h4>
                    <p>Average score improvement of 12+ points with our program</p>
                  </div>
                </div>
              </div>

              <div className="subject-sidebar">
                <div className="sidebar-card">
                  <h3>MCAT Sections</h3>
                  <ul className="subjects-list">
                    <li>Biological & Biochemical Foundations</li>
                    <li>Chemical & Physical Foundations</li>
                    <li>Psych/Social/Bio Foundations</li>
                    <li>Critical Analysis & Reasoning</li>
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3>Study Plans Available</h3>
                  <ul className="exam-boards-list">
                    {studyPlans.map((plan, index) => (
                      <li key={index}>
                        <CheckCircle size={16} color="var(--primary-color)" />
                        {plan}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card cta-card">
                  <h3>Begin Your Journey</h3>
                  <p>Book a free consultation and start your MCAT preparation with expert guidance tailored to your goals.</p>
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

export default MCAT
