import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import './Subjects.css'

const Subjects = () => {
  const courses = [
    {
      title: 'A/AS Level',
      description: 'Comprehensive preparation for A-Level and AS-Level examinations across all major subjects.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
      size: 'large'
    },
    {
      title: 'MCAT Course',
      description: 'Complete Medical College Admission Test preparation with comprehensive content review.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070',
      size: 'large'
    },
    {
      title: 'AP Courses',
      description: 'Advanced Placement courses covering all subjects with college-level curriculum.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070',
      size: 'large'
    },
    {
      title: 'NEET Course',
      description: 'Complete preparation for NEET medical entrance examination with expert guidance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
      size: 'large'
    },
    {
      title: 'CBSE Course',
      description: 'CBSE board curriculum for classes 8-12 with comprehensive subject coverage.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022',
      size: 'large'
    },
    {
      title: 'IB Course',
      description: 'International Baccalaureate program preparation for all subject groups.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032',
      size: 'large'
    },
    {
      title: 'IGCSE/GCSE',
      description: 'Complete IGCSE and GCSE preparation with experienced international tutors.',
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070',
      size: 'large'
    },
    {
      title: 'JEE Mains Course',
      description: 'Intensive JEE Mains preparation for engineering entrance examination.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
      size: 'large'
    }
  ]

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Our Courses</h1>
            <p className="page-subtitle">
              Expert-led courses designed to help you excel in competitive exams and board examinations
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="subjects-grid">
              {courses.map((course, index) => (
                <div key={index} className="subject-item">
                  <CourseCard
                    title={course.title}
                    image={course.image}
                    size="large"
                  />
                  <div className="subject-info">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
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

export default Subjects
