import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import { CheckCircle } from 'lucide-react'
import './BookSession.css'

const BookSession = () => {
  const benefits = [
    'One-on-one personalized tutoring',
    'Flexible scheduling options',
    'Expert tutors in all subjects',
    'Interactive online sessions',
    'Custom learning plans',
    'Progress tracking and reports'
  ]

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Book Your Session</h1>
            <p className="page-subtitle">
              Start your journey to academic excellence today
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="book-session-grid">
              <div className="session-info">
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: '32px' }}>
                  Why Book With Us?
                </h2>
                <p className="text-large" style={{ marginBottom: '40px' }}>
                  Get started with personalized online tutoring that adapts to your learning style
                  and helps you achieve your academic goals.
                </p>

                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <CheckCircle size={24} color="var(--primary-color)" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="session-cta">
                  <h3>What happens next?</h3>
                  <ol className="next-steps">
                    <li>Fill out the form with your details</li>
                    <li>We'll contact you within 24 hours</li>
                    <li>Schedule your first session</li>
                    <li>Start learning with expert tutors</li>
                  </ol>
                </div>
              </div>

              <div className="session-form-wrapper">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default BookSession
