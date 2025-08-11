import { Link } from 'react-router-dom'
import './Work.css'

const Work = () => {
  return (
    <div className="work-page">
      <div className="work-container">
        {/* Front End Development Section */}
        <section className="work-section">
                     <div className="section-header">
             <h2 className="section-title">Front End Development</h2>
                           <a href="/Noor Athamny - Front End Resume ().docx" download className="download-cv-button">
               Download CV
             </a>
           </div>
          
          <div className="project-grid">
            <div className="project-card">
              <div className="card-logo">
                <div className="logo-symbol">T</div>
              </div>
              <div className="card-content">
                <h3 className="project-title">Teach Hub</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                  Peace Tech is a platform connecting students across cultures.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="card-logo">
                <div className="logo-symbol">VR</div>
              </div>
              <div className="card-content">
                <h3 className="project-title">VRchitect</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                  mmersive, interactive, realistic, innovative, detailed, customizable, accessible, visual, architectural, futuristic.                  </p>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="card-logo">
                <div className="logo-symbol">T</div>
              </div>
              <div className="card-content">
                <h3 className="project-title">Time Bridge</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                  Players can learn words from different eras and cultures. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI UX Design Section */}
        <section className="work-section">
                     <div className="section-header">
             <h2 className="section-title">Ui Ux Design</h2>
                           <a href="/Noor Athamny -Ui Ux Resume.docx" download className="download-cv-button">
               Download CV
             </a>
           </div>
          
          <div className="project-grid">
            <div className="project-card" onClick={() => window.location.href = '/case-studies/queme'}>
              <div className="card-logo">
                <div className="logo-symbol"><img src="/images/queme.png" alt="queme-logo" /></div>
              </div>
              <div className="card-content">
                <h3 className="project-title">QueMe Website</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                    Queme Helps Contractors And Workers Connect Fast, Anywhere.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="card-logo">
                <div className="logo-symbol">Q</div>
              </div>
              <div className="card-content">
                <h3 className="project-title">App & Dashboard</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                  Interactive, data-driven, organized, customizable, responsive, clear, visual, informative, efficient, user-friendly.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="card-logo">
                <div className="logo-symbol">T</div>
              </div>
              <div className="card-content">
                <h3 className="project-title">Teach Hub</h3>
                <div className="desc-wrapper">
                  <p className="project-description">
                  Peace Tech is a platform connecting students across cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work
