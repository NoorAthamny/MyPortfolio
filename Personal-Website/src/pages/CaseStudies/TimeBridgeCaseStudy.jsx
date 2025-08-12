import { Link } from 'react-router-dom'
import './TimeBridgeCaseStudy.css'

const TimeBridgeCaseStudy = () => {
  return (
    <div className="tb-page">
      {/* Hero Section */}
      <div className="tb-hero">
        <img src="\images\timeBridge-mockup.png" alt="Time Bridge Platform Mockup" className="tb-hero-image" />
        
      </div>

      {/* Project Information Section */}
      <div className="tb-container">
        <div className="tb-back-button">
          <Link to="/work" className="back-link">← Back to Work</Link>
          <a href="https://github.com/expozonee/time-bridge-tree-game" target="_blank" rel="noopener noreferrer" className="code-link">Code</a>
        </div>
        <div className="tb-content">
          {/* Left Column */}
          <div className="tb-left-column">
            <div className="tb-section">
              <h2 className="tb-section-title">Project Overview</h2>
              <p className="tb-section-text">
              I collaborated with a team to create a PeaceTech game designed to connect cultures in Israel. The game’s core mechanic is a word-guessing challenge, where players explore and learn words in both Arabic and Hebrew, fostering mutual understanding and cultural exchange through play.              </p>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Problem and Purpose</h2>
              <p className="tb-section-text">
              In Israel, cultural and linguistic divides can create barriers to understanding and collaboration between communities. Many language-learning tools focus only on vocabulary and grammar, missing the opportunity to integrate cultural context and mutual engagement.

This PeaceTech game addresses that gap by offering a fun, interactive word-guessing experience in Arabic and Hebrew. Through gameplay, players not only learn new words but also gain insight into each other’s cultures, encouraging empathy, curiosity, and cross-cultural dialogue in an accessible, engaging way.              </p>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Features</h2>
              <ul className="tb-features-list">
                <li>Time-traveling adventure gameplay</li>
                <li>Historical era-specific language lessons</li>
                <li>Cultural context and storytelling</li>
                <li>Progressive difficulty system</li>
                <li>Interactive quizzes and challenges</li>
                <li>Multi-language support</li>
              </ul>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Highlights</h2>
              <ul className="tb-highlights-list">
                <li>Designed engaging game mechanics that make learning feel like entertainment.</li>
                <li>Created historically accurate content with educational experts and historians.</li>
             
                
              </ul>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Challenges</h2>
              <ul className="tb-challenges-list">
                <li>Balancing educational accuracy with engaging gameplay mechanics.</li>
                <li>Creating content that appeals to different age groups and learning levels.</li>
                <li>Ensuring historical accuracy while maintaining cultural sensitivity.</li>
                <li>Designing intuitive UI for complex educational content.</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="tb-right-column">
            <div className="tb-section">
              <h2 className="tb-section-title">Role</h2>
              <p className="tb-role">Ui Ux | Frontend Developer</p>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Technologies</h2>
              <ul className="tb-tech-list">
                
                <li>JavaScript</li>
                <li>HTML5 </li>
                <li>CSS</li>
                <li>Local Storage</li>
                <li>GitHub</li>
              </ul>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Team</h2>
              <ul className="tb-team-list">
                <li><strong>Noor Athamny</strong> - ui ux | Frontend Developer</li>
                <li><strong>ibrahem haj ali</strong> - Frontend Developer</li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeBridgeCaseStudy
