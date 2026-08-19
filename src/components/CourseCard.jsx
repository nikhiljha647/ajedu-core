import { useNavigate } from 'react-router-dom'
import './CourseCard.css'

const CourseCard = ({ title, image, size = 'medium' }) => {
  const navigate = useNavigate()

  // Map course titles to routes
  const getRouteFromTitle = (title) => {
    const routeMap = {
      'A/AS Level': '/courses/as-level',
      'AP Courses': '/courses/ap-courses',
      'NEET Course': '/courses/neet',
      'CBSE Course': '/courses/cbse',
      'IB Course': '/courses/ib',
      'IGCSE/GCSE': '/courses/igcse',
      'JEE Mains Course': '/courses/jee',
      'MCAT Course': '/courses/mcat'
    }
    return routeMap[title] || '/courses'
  }

  const handleClick = () => {
    navigate(getRouteFromTitle(title))
  }

  return (
    <div className={`course-card ${size}`} onClick={handleClick}>
      <div className="course-image-wrapper">
        <img src={image} alt={title} className="course-image" />
        <div className="course-overlay"></div>
        <h3 className="course-title">{title}</h3>
      </div>
    </div>
  )
}

export default CourseCard
