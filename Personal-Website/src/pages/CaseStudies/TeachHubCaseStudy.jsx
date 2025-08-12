import { useEffect, useRef } from 'react'
import './TeachHubCaseStudy.css'

const TeachHubCaseStudy = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    // IntersectionObserver for section animations
    const sections = Array.from(page.querySelectorAll('.th-cs-slide'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active')
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    )
    
    sections.forEach((section) => io.observe(section))

    return () => {
      sections.forEach((section) => io.unobserve(section))
      io.disconnect()
    }
  }, [])

  return (
    <div className="th-cs-page" ref={pageRef}>
      <div className="th-cs-content">
        
        {/* 1. Solution Statement */}
        <section className="th-cs-slide solution">
          <div className="th-cs-container">
            <div className="th-solution-text">
              <h1 className="th-cs-title">Solution <span className="th-accent">Statement</span></h1>
              <p className="th-cs-paragraph">
                Teach Hub provides an intuitive, culturally-sensitive interface that makes learning accessible to everyone.
                The platform features clear navigation, engaging visual design, and seamless interactions that encourage
                both learning and teaching.
              </p>
            </div>
            <div className="th-solution-media">
              <img src="/images/PeaceTech-Mockup.png" alt="Teach Hub platform mockup" />
            </div>
          </div>
        </section>

        {/* 2. Project Overview & Problem Statement */}
        <section className="th-cs-slide two-col">
          <div className="th-cs-container th-cols">
            <div className="col overview">
              <h2 className="th-cs-heading">Project <span className="th-accent">Overview</span></h2>
              <p className="th-cs-paragraph">Teach Hub is an innovative educational platform designed to connect students and teachers across different cultures and backgrounds. It provides a comprehensive learning environment where students can access quality education from anywhere in the world, while teachers can reach a global audience and share their expertise.</p>
              <div className="th-overview-grid">
                <div className="th-ov-item"><span>Project Duration</span><strong>1 Week</strong></div>
                <div className="th-ov-item"><span>My Role</span><strong>UI/UX Designer</strong></div>
                <div className="th-ov-item"><span>Tools</span><strong>Figma</strong></div>
              </div>
            </div>
            <div className="col problem">
              <h2 className="th-cs-heading">Problem <span className="th-accent">Statement</span></h2>
              <p className="th-cs-paragraph">
              Students often lack access to diverse knowledge sources and mentors. "Teach Hub" (referred to as Peace Tech in the overview) aims to solve this by enabling students to be both learners and teachers, reducing dependency on traditional educational hierarchies, and empowering self-learning.              </p>
            </div>
          </div>
        </section>

        {/* 3. My Role */}
        <section className="th-cs-slide role">
          <div className="th-cs-container">
            <div>
              <h2 className="th-cs-heading">My <span className="th-accent">Role</span></h2>
              <p className="th-cs-paragraph th-narrow">
                As the UI/UX Designer for Teach Hub, I owned discovery to delivery: research synthesis, user flows,
                system design, and high‑fidelity prototypes. I focused on creating an intuitive, culturally-sensitive interface
                that makes learning accessible and engaging.
              </p>
            </div>
            <div className="th-pills">
              {['Empathy Mapping','User Research','Wireframes','Visual Design','Usability Testing','User Persona','User Flow','Information Architecture','Problem Solution','Prototyping'].map(t => (
                <span className="th-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Design Thinking Process */}
        <section className="th-cs-slide process">
          <div className="th-cs-container">
            <h2 className="th-cs-heading">Design <span className="th-accent">Thinking Process</span></h2>
            <div className="th-steps">
              <div className="th-step">
                <div className="th-step-icon">
                  <img src="/images/fluent_design-ideas-16-regular.png" alt="Empathize" />
                </div>
                <div className="th-step-title">Empathize</div>
                <ul className="th-step-list">
                  <li>User interviews</li>
                  <li>Cultural research</li>
                  <li>Learning patterns</li>
                </ul>
              </div>
              <div className="th-step-sep">→</div>
              <div className="th-step">
                <div className="th-step-icon">
                  <img src="/images/icons8_idea.png" alt="Define" />
                </div>
                <div className="th-step-title">Define</div>
                <ul className="th-step-list">
                  <li>Problem synthesis</li>
                  <li>User personas</li>
                  <li>Journey mapping</li>
                </ul>
              </div>
              <div className="th-step-sep">→</div>
              <div className="th-step">
                <div className="th-step-icon">
                  <img src="/images/fluent_calendar-search-16-regular.png" alt="Ideate" />
                </div>
                <div className="th-step-title">Ideate</div>
                <ul className="th-step-list">
                  <li>Solution brainstorming</li>
                  <li>Feature prioritization</li>
                  <li>Flow design</li>
                </ul>
              </div>
              <div className="th-step-sep">→</div>
              <div className="th-step">
                <div className="th-step-icon">
                  <img src="/images/fluent_design-ideas-16-regular.png" alt="Design" />
                </div>
                <div className="th-step-title">Design</div>
                <ul className="th-step-list">
                  <li>Paper wireframes</li>
                  <li>Visual design</li>
                  <li>Prototype</li>
                </ul>
              </div>
              <div className="th-step-sep">→</div>
              <div className="th-step">
                <div className="th-step-icon">
                  <img src="/images/file-icons_testcafe.png" alt="Test" />
                </div>
                <div className="th-step-title">Test</div>
                <ul className="th-step-list">
                  <li>Usability testing</li>
                  <li>Survey insights</li>
                  <li>Improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pain Points */}
        <section className="th-cs-slide painpoints">
          <div className="th-cs-container">
            <div>
              <h2 className="th-cs-heading">Pain Points <span className="th-accent">from interviews</span></h2>
              <p className="th-cs-paragraph">
                Through this one-week project, I developed a strong understanding of the needs and frustrations of both students and teachers. They require a platform that is accessible, culturally-sensitive, and easy to use, allowing them to connect and share knowledge without unnecessary barriers. Working under a tight deadline taught me how to prioritize core functionality, focus on simplicity, and make design decisions that truly reflect user needs.
              </p>
            </div>
            <div className="th-badge-wrap">
              {[
                'Difficulty finding diverse learning opportunities',
                'Struggles to connect across cultural barriers',
                'Time wasted on unreliable learning platforms',
                'Anxiety about language and cultural differences',
                'Concerns over quality of online education',
              ].map(b => (<span className="th-badge" key={b}>{b}</span>))}
            </div>
          </div>
        </section>

        {/* 6. User Flows */}
        <section className="th-cs-slide flows">
          <div className="th-cs-container">
            <h2 className="th-cs-heading">User <span className="th-accent">Flows</span></h2>
            <p className="th-cs-paragraph">
              The user flows illustrate the core learning and teaching paths on Teach Hub. Students can discover courses,
              join learning communities, and even become teachers themselves. Teachers can create content, manage courses,
              and connect with students globally.
            </p>
            <div className="th-flows">
              <div className="th-flow">
                <div className="th-flow-title">Student Learning Flow</div>
                <img src="/images/Seeker-Flow.png" alt="Student learning flow" />
              </div>
              <div className="th-flow">
                <div className="th-flow-title">Teacher Course Creation Flow</div>
                <img src="/images/Profiver-flow.png" alt="Teacher course creation flow" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeachHubCaseStudy
