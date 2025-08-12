import { Link } from 'react-router-dom'
import './AppDashboardCaseStudy.css'

const AppDashboardCaseStudy = () => {
  return (
    <div className="cs-page">
      <div className="cs-container">
        <div className="coming-soon-content">
          <div className="lock-icon">🔒</div>
          <h1 className="cs-title">Case Study Coming Soon</h1>
          <p className="cs-paragraph">
            I'm currently still working on this project and can't share the full details publicly due to company confidentiality. Once it's approved for release, I'll update this page with the full case study.
          </p>
          <p className="cs-paragraph">
            Thanks for your understanding!
          </p>
          <Link to="/work" className="back-button">
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AppDashboardCaseStudy

