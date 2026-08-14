import Header from '../components/Header'
import Footer from '../components/Footer'
import { Star } from 'lucide-react'
import './TestimonialsPage.css'

const TestimonialsPage = () => {
  const testimonials = [
    {
      text: 'The tutoring sessions helped me improve my math grade from a C to an A! The explanations are so clear and easy to understand.',
      name: 'Sarah Johnson',
      course: 'CBSE - Mathematics',
      rating: 5
    },
    {
      text: 'Amazing experience! My tutor was patient, knowledgeable, and really helped me understand complex physics concepts.',
      name: 'Michael Chen',
      course: 'A-Level Physics',
      rating: 5
    },
    {
      text: 'Flexible scheduling and personalized attention made all the difference. Highly recommend AJ Edu Core for exam preparation!',
      name: 'Emily Rodriguez',
      course: 'IB Chemistry',
      rating: 5
    },
    {
      text: 'I was struggling with organic chemistry, but my tutor made it so much easier to understand. Got an A on my final exam!',
      name: 'Rahul Sharma',
      course: 'NEET Preparation',
      rating: 5
    },
    {
      text: 'The best investment in my education. The tutors are experts and really care about student success.',
      name: 'Jessica Williams',
      course: 'AP Calculus',
      rating: 5
    },
    {
      text: 'Interactive sessions with whiteboard and excellent study materials. Helped me ace my IGCSE exams!',
      name: 'David Lee',
      course: 'IGCSE Mathematics',
      rating: 5
    }
  ]

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Student Testimonials</h1>
            <p className="page-subtitle">
              Real feedback from students and parents who have experienced our tutoring services
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonials-page-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-page-card">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={24} fill="var(--primary-color)" color="var(--primary-color)" />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-course">{testimonial.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default TestimonialsPage
