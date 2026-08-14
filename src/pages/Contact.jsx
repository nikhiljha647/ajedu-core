import Header from '../components/Header'
import Footer from '../components/Footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '512-580-2449',
      link: 'tel:512-580-2449'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'abc@gmail.com',
      link: 'mailto:abc@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Online Worldwide',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Mon-Sun: 9AM - 9PM',
      link: null
    }
  ]

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with us to start your learning journey
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info-section">
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: '32px' }}>
                  Get In Touch
                </h2>
                <p className="text-large" style={{ marginBottom: '40px' }}>
                  Have questions? We're here to help. Reach out to us through any of the following channels
                  or fill out the form and we'll get back to you shortly.
                </p>

                <div className="contact-info-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-card">
                      <div className="contact-info-icon">
                        <info.icon size={24} />
                      </div>
                      <div className="contact-info-content">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link}>{info.detail}</a>
                        ) : (
                          <p>{info.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-form-section">
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

export default Contact
