import { Link } from 'react-router-dom'
import './TimeBridgeCaseStudy.css'

const TimeBridgeCaseStudy = () => {
  return (
    <div className="tb-page">
      {/* Hero Section */}
      <div className="tb-hero">
        <img src="/images/peacetech-head-mockup.png" alt="Time Bridge Platform Mockup" className="tb-hero-image" />
        
      </div>

      {/* Project Information Section */}
      <div className="tb-container">
        <div className="tb-back-button">
          <Link to="/work" className="back-link">← Back to Work</Link>
          <a href="https://github.com/yourusername/time-bridge" target="_blank" rel="noopener noreferrer" className="code-link">Code</a>
        </div>
        <div className="tb-content">
          {/* Left Column */}
          <div className="tb-left-column">
            <div className="tb-section">
              <h2 className="tb-section-title">Project Overview</h2>
              <p className="tb-section-text">
                Time Bridge is an innovative educational game that bridges the gap between different historical eras and cultures through interactive language learning. Players embark on time-traveling adventures where they learn words, phrases, and cultural contexts from various periods in history. The game combines gamification with educational content to create an engaging learning experience that makes history and language acquisition fun and memorable.
              </p>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Problem and Purpose</h2>
              <p className="tb-section-text">
                Traditional language learning often lacks cultural context and historical depth, making it difficult for learners to understand the evolution of languages and cultural significance. Time Bridge addresses this by creating an immersive gaming experience where players learn not just words, but the stories, contexts, and cultural backgrounds behind them. This approach helps learners develop a deeper appreciation for linguistic diversity and historical connections.
              </p>
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
                <li>Implemented adaptive learning algorithms to personalize the experience.</li>
                <li>Built a comprehensive content management system for easy updates.</li>
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
              <p className="tb-role">Frontend Game Developer</p>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Technologies</h2>
              <ul className="tb-tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5 Canvas</li>
                <li>CSS3 Animations</li>
                <li>Local Storage</li>
                <li>GitHub</li>
              </ul>
            </div>

            <div className="tb-section">
              <h2 className="tb-section-title">Team</h2>
              <ul className="tb-team-list">
                <li><strong>Noor Athamny</strong> - Frontend Game Developer</li>
                <li><strong>Game Designer</strong> - Educational Content & Mechanics</li>
                <li><strong>Content Creator</strong> - Historical Research & Writing</li>
                <li><strong>UX Designer</strong> - Learning Experience Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeBridgeCaseStudy
