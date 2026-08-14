import Header from '../components/Header'
import Footer from '../components/Footer'
import { Target, Users, Award, TrendingUp } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Students Taught' },
    { icon: Award, value: '50+', label: 'Expert Tutors' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Target, value: '10+', label: 'Years Experience' }
  ]

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">About AJ Edu Core</h1>
            <p className="page-subtitle">
              Empowering students to achieve their academic goals through personalized online tutoring
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Our Mission</h2>
                <p className="text-large">
                  At AJ Edu Core, we believe every student has the potential to excel. Our mission is to provide
                  high-quality, personalized online tutoring that adapts to each student's unique learning style
                  and pace.
                </p>
                <p className="text-large">
                  With a team of expert educators and a proven teaching methodology, we've helped thousands of
                  students achieve their academic goals and build confidence in their abilities.
                </p>
              </div>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">
                      <stat.icon size={32} />
                    </div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--light-bg)' }}>
          <div className="container">
            <h2 className="section-title">Why Choose AJ Edu Core?</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Expert Tutors</h3>
                <p>
                  Our tutors are carefully selected professionals with extensive teaching experience and
                  subject matter expertise.
                </p>
              </div>
              <div className="value-card">
                <h3>Personalized Approach</h3>
                <p>
                  We create customized learning plans tailored to each student's strengths, weaknesses,
                  and learning goals.
                </p>
              </div>
              <div className="value-card">
                <h3>Flexible Learning</h3>
                <p>
                  Study at your own pace with flexible scheduling options that fit your busy lifestyle.
                </p>
              </div>
              <div className="value-card">
                <h3>Proven Results</h3>
                <p>
                  Our students consistently achieve higher grades and gain confidence in their academic abilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About
