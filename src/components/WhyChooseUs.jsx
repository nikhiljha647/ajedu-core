import { Video, Calendar, Target, Clock } from 'lucide-react'
import './WhyChooseUs.css'

const features = [
  {
    icon: Video,
    title: 'Interactive Online Sessions',
    description: 'Live one-on-one video sessions with screen sharing and interactive whiteboard.'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book sessions at times that work for you, including evenings and weekends.'
  },
  {
    icon: Target,
    title: 'Personalized Learning Plans',
    description: 'Custom study plans designed specifically for your goals and learning pace.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Get help with homework and questions via email between sessions.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          More than just tutoring - a complete learning experience
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
