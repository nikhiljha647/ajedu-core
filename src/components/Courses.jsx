import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import './Courses.css'

const courses = [
  {
    title: 'A/AS Level',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
    size: 'large'
  },
  {
    title: 'MCAT Course',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070',
    size: 'large'
  },
  {
    title: 'AP Courses',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070',
    size: 'large'
  },
  {
    title: 'NEET Course',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
    size: 'medium'
  },
  {
    title: 'CBSE Course',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022',
    size: 'medium'
  },
  {
    title: 'IB Course',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032',
    size: 'medium'
  },
  {
    title: 'IGCSE/GCSE',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070',
    size: 'medium'
  },
  {
    title: 'JEE Mains Course',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
    size: 'medium'
  }
]

const Courses = () => {
  // Show only first 7 courses on home page
  const displayedCourses = courses.slice(0, 7)

  return (
    <section className="courses section">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-subtitle">
          Expert-led courses designed to help you excel in competitive exams and board examinations
        </p>

        <div className="courses-grid">
          {displayedCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              size={course.size}
            />
          ))}
        </div>

        <div className="courses-footer">
          <Link to="/subjects" className="btn btn-primary">
            View More Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Courses
