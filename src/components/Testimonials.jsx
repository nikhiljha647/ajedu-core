import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Testimonials.css'

const testimonials = [
  {
    text: 'The tutoring sessions helped me improve my math grade from a C to an A! The explanations are so clear and easy to understand.',
    name: 'Sarah Johnson',
    rating: 5
  },
  {
    text: 'Amazing experience! My tutor was patient, knowledgeable, and really helped me understand complex physics concepts.',
    name: 'Michael Chen',
    rating: 5
  },
  {
    text: 'Flexible scheduling and personalized attention made all the difference. Highly recommend AJ Edu Core for exam preparation!',
    name: 'Emily Rodriguez',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Students Say</h2>
        <p className="section-subtitle">
          Real feedback from students and parents
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} fill="var(--primary-color)" color="var(--primary-color)" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <Link to="/testimonials" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
