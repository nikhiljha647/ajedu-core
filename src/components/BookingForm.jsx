import { useState } from 'react'
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, GraduationCap, X } from 'lucide-react'
import './BookingForm.css'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    subjects: [],
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false)

  // Subject options based on selected course
  const subjectOptions = {
    'AS/A Level': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Economics', 'Business Studies', 'Computer Science', 'Psychology', 'History', 'Geography'],
    'AP Courses': ['AP Calculus AB/BC', 'AP Physics', 'AP Chemistry', 'AP Biology', 'AP English Language', 'AP English Literature', 'AP US History', 'AP World History', 'AP Computer Science', 'AP Statistics'],
    'NEET Course': ['Physics', 'Chemistry', 'Biology', 'All Subjects'],
    'CBSE Course': ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Hindi', 'Accountancy', 'Business Studies', 'Economics'],
    'IB Course': ['IB Mathematics', 'IB Physics', 'IB Chemistry', 'IB Biology', 'IB English', 'IB Economics', 'IB Business Management', 'IB Psychology', 'IB History', 'Extended Essay', 'TOK'],
    'IGCSE/GCSE': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'English Literature', 'Economics', 'Business Studies', 'Computer Science', 'Geography', 'History'],
    'JEE Mains': ['Physics', 'Chemistry', 'Mathematics', 'All Subjects'],
    'MCAT Course': ['Biological & Biochemical Foundations', 'Chemical & Physical Foundations', 'Psychological, Social & Biological Foundations', 'Critical Analysis & Reasoning Skills', 'All Sections'],
    'Other': ['General Tutoring', 'Homework Help', 'Test Prep']
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // If course changes, reset subjects
    if (name === 'course') {
      setFormData(prev => ({
        ...prev,
        course: value,
        subjects: []
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubjectToggle = (subject) => {
    setFormData(prev => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
      
      return { ...prev, subjects }
    })
    
    // Clear error when user selects subjects
    if (errors.subjects) {
      setErrors(prev => ({
        ...prev,
        subjects: ''
      }))
    }
  }

  const removeSubject = (subjectToRemove) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter(s => s !== subjectToRemove)
    }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    validateField(name, formData[name])
  }

  const validateField = (name, value) => {
    let error = ''

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First name is required'
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters'
        }
        break
      case 'lastName':
        if (!value.trim()) {
          error = 'Last name is required'
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required'
        } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(value)) {
          error = 'Please enter a valid phone number'
        }
        break
      case 'course':
        if (!value.trim()) {
          error = 'Course is required'
        }
        break
      default:
        break
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }))

    return error
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate all text fields
    Object.keys(formData).forEach(key => {
      if (key !== 'message' && key !== 'subjects') {
        const error = validateField(key, formData[key])
        if (error) {
          newErrors[key] = error
        }
      }
    })

    // Validate subjects
    if (formData.subjects.length === 0) {
      newErrors.subjects = 'Please select at least one subject'
    }

    setErrors(newErrors)
    setTouched(prev => ({ ...prev, subjects: true }))
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      course: true,
      subjects: true
    })

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '922f3745-1a4d-42d1-b5d2-cf8e6bff98ea')
      formDataToSend.append('subject', 'New Booking Request from AJ Edu Core')
      formDataToSend.append('from_name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('First Name', formData.firstName)
      formDataToSend.append('Last Name', formData.lastName)
      formDataToSend.append('Email', formData.email)
      formDataToSend.append('Phone', formData.phone)
      formDataToSend.append('Course', formData.course)
      formDataToSend.append('Subjects', formData.subjects.join(', '))
      formDataToSend.append('Message', formData.message || 'No message provided')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        console.log('Form submitted successfully:', formData)
        setIsSubmitted(true)
        setIsSubmitting(false)

        // Reset form after 4 seconds
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            course: '',
            subjects: [],
            message: ''
          })
          setErrors({})
          setTouched({})
          setIsSubmitted(false)
          setShowSubjectDropdown(false)
        }, 4000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="booking-form-card" id="booking-form">
      {!isSubmitted ? (
        <>
          <div className="form-header">
            <h3>Book Your Free Session</h3>
            <p>Fill in your details and we'll get back to you within 24 hours</p>
          </div>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.firstName && touched.firstName ? 'error' : ''}
                    aria-label="First Name"
                  />
                </div>
                {errors.firstName && touched.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastName && touched.lastName ? 'error' : ''}
                    aria-label="Last Name"
                  />
                </div>
                {errors.lastName && touched.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'error' : ''}
                  aria-label="Email"
                />
              </div>
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && touched.phone ? 'error' : ''}
                  aria-label="Phone"
                />
              </div>
              {errors.phone && touched.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <GraduationCap size={18} className="input-icon" />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.course && touched.course ? 'error' : ''}
                  aria-label="Course"
                >
                  <option value="">Select a course</option>
                  <option value="AS/A Level">AS/A Level</option>
                  <option value="AP Courses">AP Courses</option>
                  <option value="NEET Course">NEET Course</option>
                  <option value="CBSE Course">CBSE Course</option>
                  <option value="IB Course">IB Course</option>
                  <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                  <option value="JEE Mains">JEE Mains</option>
                  <option value="MCAT Course">MCAT Course</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.course && touched.course && (
                <span className="error-message">{errors.course}</span>
              )}
            </div>

            <div className="form-group">
 
              
              <div className="multiselect-wrapper">
                <div 
                  className={`multiselect-input ${!formData.course ? 'disabled' : ''} ${errors.subjects && touched.subjects ? 'error' : ''}`}
                  onClick={() => formData.course && setShowSubjectDropdown(!showSubjectDropdown)}
                >
                  <BookOpen size={18} className="input-icon-static" />
                  
                  <div className="multiselect-content">
                    {formData.subjects.length > 0 ? (
                      <div className="selected-subjects-inline">
                        {formData.subjects.map((subject, index) => (
                          <span key={index} className="subject-tag-inline">
                            {subject}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeSubject(subject)
                              }}
                              className="remove-subject-inline"
                              aria-label={`Remove ${subject}`}
                            >
                              <X size={12} />
                            </button>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="placeholder">
                        {formData.course ? 'Choose subjects...' : 'Select course first'}
                      </span>
                    )}
                  </div>
                </div>

                {showSubjectDropdown && formData.course && (
                  <div className="multiselect-dropdown">
                    {subjectOptions[formData.course]?.map((subject, index) => (
                      <label key={index} className="multiselect-option">
                        <input
                          type="checkbox"
                          checked={formData.subjects.includes(subject)}
                          onChange={() => handleSubjectToggle(subject)}
                        />
                        <span>{subject}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {errors.subjects && touched.subjects && (
                <span className="error-message">{errors.subjects}</span>
              )}
            </div>

            <div className="form-group">
              <div className="input-wrapper textarea-wrapper">
                <Mail size={18} className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Tell us about your learning goals (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  aria-label="Message"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Get Started Today
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <div className="success-icon">
            <CheckCircle2 size={48} />
          </div>
          <h3>Thank You!</h3>
          <p>We've received your request and will contact you within 24 hours.</p>
        </div>
      )}
    </div>
  )
}

export default BookingForm
