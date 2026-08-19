import { Link } from 'react-router-dom'
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

  const stats = [
    { label: 'Average Score Improvement', value: '12+' },
    { label: 'Practice Tests Included', value: '10+' },
    { label: 'Hours of Content Review', value: '200+' },
    { label: 'Success Rate', value: '95%' }
  ]

  return (
    <div className="subject-page">
      <Header />

      {/* Hero Section */}
      <section className="subject-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="subject-title">MCAT Preparation</h1>
          <p className="subject-description">
            Excel in the Medical College Admission Test with expert guidance, comprehensive content review, and proven test strategies
          </p>
          <Link to="/book-session" className="btn btn-primary">
            Start Your MCAT Prep
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="subject-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="subject-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <h2>Why Choose Our MCAT Course?</h2>
              <p>
                The MCAT is a challenging and comprehensive examination that requires thorough preparation across multiple disciplines. 
                Our MCAT course is designed by medical school graduates and experienced instructors who understand what it takes to achieve 
                a competitive score. We provide a structured approach that covers all content areas while developing critical thinking and 
                test-taking skills essential for MCAT success.
              </p>

              <div className="features-list">
                <h3>Course Features</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="subjects-covered">
                <h3>MCAT Sections Covered</h3>
                <div className="info-cards">
                  {sections.map((section, index) => (
                    <div key={index} className="info-card">
                      <h4>{section.title}</h4>
                      <ul>
                        {section.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-section">
                <h3>Ready to Begin Your Medical Journey?</h3>
                <p>
                  Join thousands of successful pre-med students who have achieved their MCAT goals with our comprehensive preparation course.
                </p>
                <Link to="/book-session" className="btn btn-primary">
                  Book Your Free Consultation
                </Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>MCAT Overview</h3>
                <ul>
                  <li><strong>Duration:</strong> 7 hours 30 minutes</li>
                  <li><strong>Sections:</strong> 4</li>
                  <li><strong>Score Range:</strong> 472-528</li>
                  <li><strong>Format:</strong> Computer-based</li>
                  <li><strong>Frequency:</strong> Multiple times per year</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Popular Study Plans</h3>
                <ul>
                  <li>3-Month Intensive</li>
                  <li>6-Month Comprehensive</li>
                  <li>12-Month Extended</li>
                  <li>Custom Schedule</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Resources Included</h3>
                <ul>
                  <li>Full-length Practice Tests</li>
                  <li>AAMC Official Materials</li>
                  <li>Question Banks (2000+)</li>
                  <li>Flashcards & Study Guides</li>
                  <li>Video Content Library</li>
                  <li>One-on-One Tutoring</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MCAT
