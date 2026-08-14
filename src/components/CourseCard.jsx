import { useNavigate } from 'react-router-dom'
import './CourseCard.css'

const CourseCard = ({ title, image, size = 'medium' }) => {
  const navigate = useNavigate()

  // Map course titles to routes
  const getRouteFromTitle = (title) => {
    const routeMap = {
      'A/AS Level': '/subjects/as-level',
      'AP Courses': '/subjects/ap-courses',
      'NEET Course': '/subjects/neet',
      'CBSE Course': '/subjects/cbse',
      'IB Course': '/subjects/ib',
      'IGCSE/GCSE': '/subjects/igcse',
      'JEE Mains Course': '/subjects/jee'
    }
    return routeMap[title] || '/subjects'
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
