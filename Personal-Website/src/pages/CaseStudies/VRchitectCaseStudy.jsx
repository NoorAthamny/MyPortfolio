import { Link } from 'react-router-dom'
import './VRchitectCaseStudy.css'

const VRchitectCaseStudy = () => {
  return (
    <div className="vr-page">
      {/* Hero Section */}
      <div className="vr-hero">
        <img src="\images\VRchitect-mockup.png" alt="VRchitect Platform Mockup" className="vr-hero-image" />
       
      </div>

      {/* Project Information Section */}
      <div className="vr-container">
        <div className="vr-back-button">
          <Link to="/work" className="back-link">← Back to Work</Link>
          <a href="https://github.com/yourusername/vrchitect" target="_blank" rel="noopener noreferrer" className="code-link">Code</a>
        </div>
        <div className="vr-content">
          {/* Left Column */}
          <div className="vr-left-column">
            <div className="vr-section">
              <h2 className="vr-section-title">Project Overview</h2>
              <p className="vr-section-text">
                VRchitect is an immersive virtual reality platform designed to revolutionize architectural visualization and design collaboration. Built with cutting-edge VR technology, it enables architects, designers, and clients to explore 3D spaces in real-time, providing an unprecedented level of detail and interactivity. The project focuses on creating a seamless VR experience that bridges the gap between digital design and physical reality.
              </p>
            </div>

            <div className="vr-section">
              <h2 className="vr-section-title">Problem and Purpose</h2>
              <p className="vr-section-text">
                Traditional architectural presentations often fail to convey the true scale, depth, and spatial relationships of designs. VRchitect solves this by providing an immersive 3D environment where users can walk through virtual spaces, interact with design elements, and experience architecture as if it were already built. This addresses the challenge of client understanding and stakeholder communication in complex architectural projects.
              </p>
            </div>

            <div className="vr-section">
              <h2 className="vr-section-title">Features</h2>
              <ul className="vr-features-list">
                <li>Immersive 3D environment exploration</li>
                
                <li>Multi-user collaborative sessions</li>
                <li>Advanced lighting and material systems</li>
                
              </ul>
            </div>

            <div className="vr-section">
              <h2 className="vr-section-title">Highlights</h2>
              <ul className="vr-highlights-list">
                <li>Developed custom VR interaction systems for architectural elements.</li>
                <li>Implemented real-time rendering optimization for smooth VR performance.</li>
               
              </ul>
            </div>

            <div className="vr-section">
              <h2 className="vr-section-title">Challenges</h2>
              <ul className="vr-challenges-list">
                <li>Desgin 3D house models from scratch and make them interactive.</li>
                <li>Designing intuitive controls for complex 3D manipulation in VR space.</li>
                
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="vr-right-column">
            <div className="vr-section">
              <h2 className="vr-section-title">Role</h2>
              <p className="vr-role">Ui Ux | Frontend Developer | 3D Modeling</p>
            </div>

            <div className="vr-section">
              <h2 className="vr-section-title">Technologies</h2>
              <ul className="vr-tech-list">
                <li>Twinmotion</li>
                <li>JavaScript</li>
                <li>html</li>
                <li>css - sass</li>
                <li>GitHub</li>
              </ul>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  )
}

export default VRchitectCaseStudy
