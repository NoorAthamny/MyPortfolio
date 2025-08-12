import { Link } from 'react-router-dom'
import './TeachHubFECaseStudy.css'

const TeachHubFECaseStudy = () => {
  return (
    <div className="th-fe-page">
      {/* Hero Section */}
      <div className="th-fe-hero">
        <img src="/images/peacetech-head-mockup.png" alt="TeachHub Platform Mockup" className="th-fe-hero-image" />
       
      </div>

      {/* Project Information Section */}
      <div className="th-fe-container">
        <div className="th-fe-back-button">
          <Link to="/work" className="back-link">← Back to Work</Link>
          <a href="https://github.com/Yazan-Egbaria/appleseeds-final-project" target="_blank" rel="noopener noreferrer" className="code-link">Code</a>
        </div>
        <div className="th-fe-content">
          {/* Left Column */}
          <div className="th-fe-left-column">
            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Project Overview</h2>
              <p className="th-fe-section-text">
                Peace Tech is a platform connecting students across cultures for meaningful service exchanges and collaborative skill-sharing. It's designed to foster understanding and engagement, encouraging users to teach and learn in a virtual setting. The project was developed by a team of frontend development students focusing on responsiveness and real-world functionality, built using React and Firebase for a seamless and interactive experience across devices.
              </p>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Problem and Purpose</h2>
              <p className="th-fe-section-text">
                Students often lack access to diverse knowledge sources and mentors. "Teach Hub" (referred to as Peace Tech in the overview) aims to solve this by enabling students to be both learners and teachers, reducing dependency on traditional educational hierarchies, and empowering self-learning. It fosters cross-cultural connections, building mutual respect and global awareness. It also addresses the limitation of cross-cultural communication due to language, geography, or access to collaboration platforms.
              </p>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Features</h2>
              <ul className="th-fe-features-list">
                <li>Live chat sessions</li>
                <li>Coins system for pricing classes</li>
                <li>User profiles and rating system</li>
                <li>Multilingual support</li>
              </ul>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Highlights</h2>
              <ul className="th-fe-highlights-list">
                <li>daily meetings were coordinated to ensure smooth progress.</li>
                <li>Task divisions were managed through Notion for effective progress tracking.</li>
                <li>A new technology, Tailwind CSS, was studied to enhance design capabilities.</li>
              </ul>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Challenges</h2>
              <ul className="th-fe-challenges-list">
                <li>Designing a user-friendly interface and experience within a very short timeframe while collaborating closely with the team.</li>
                <li>Ensuring pixel-perfect implementation of the design through frequent review meetings with the team.</li>
                <li>Meeting a tight project deadline of just two weeks.</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="th-fe-right-column">
            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Role</h2>
              <p className="th-fe-role">Ui Ux  | Frontend Developer</p>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Technologies</h2>
              <ul className="th-fe-tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
                <li>GitHub</li>
              </ul>
            </div>

            <div className="th-fe-section">
              <h2 className="th-fe-section-title">Team</h2>
              <ul className="th-fe-team-list">
                <li><strong>Yazan Egbaria</strong> - Frontend Developer</li>
                <li><strong>Noor Athamny</strong> - Frontend Developer</li>
                <li><strong>Ghidaa Haaj</strong> - Frontend Developer</li>
                <li><strong>Tom Levi</strong> - Backend Developer</li>
                <li><strong>Aviv Salem</strong> - Backend Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachHubFECaseStudy
