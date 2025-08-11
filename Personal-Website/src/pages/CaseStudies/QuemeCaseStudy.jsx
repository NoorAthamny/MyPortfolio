import { useEffect, useRef, useState } from 'react'
import './QuemeCaseStudy.css'

// Utility image that tries multiple filenames from /public/images
const SmartImage = ({ candidates = [], alt = '', className = '' }) => {
  const idxRef = useRef(0)
  const src = candidates[idxRef.current]

  const handleError = (e) => {
    if (idxRef.current < candidates.length - 1) {
      idxRef.current += 1
      e.currentTarget.src = candidates[idxRef.current]
    }
  }
  return <img src={src} onError={handleError} alt={alt} className={className} />
}

const QuemeCaseStudy = () => {
  const trackRef = useRef(null)
  const [manifest, setManifest] = useState(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Convert vertical wheel to horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        track.scrollBy({ left: e.deltaY, behavior: 'smooth' })
      }
    }

    // Animate the active slide via IntersectionObserver
    const slides = Array.from(track.querySelectorAll('.cs-slide'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active')
          }
        })
      },
      { root: track, threshold: 0.6 }
    )
    slides.forEach((s) => io.observe(s))

    track.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      slides.forEach((s) => io.unobserve(s))
      io.disconnect()
      track.removeEventListener('wheel', onWheel)
    }
  }, [])

  // Try to fetch optional image manifest to map exact filenames
  useEffect(() => {
    fetch('/images/queme-manifest.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => setManifest(json))
      .catch(() => {})
  }, [])

  return (
    <div className="cs-page">
      <div className="cs-track" ref={trackRef}>
   

        {/* 2. Project Overview & Problem Statement */}
        <section className="cs-slide two-col">
          <div className="cs-container cols">
            <div className="col overview">
              <h2 className="cs-heading">Project <span className="accent">Overview</span></h2>
              <p className="cs-paragraph">Queme is a digital platform designed to connect skilled professionals such as construction workers, contractors, and technicians with job opportunities in their field. At the same time, it enables homeowners and project managers to easily find and hire trusted professionals for home repairs, renovations, and construction related tasks.</p>
              <div className="overview-grid">
                <div className="ov-item"><span>Project Duration</span><strong>1 Week</strong></div>
                <div className="ov-item"><span>My Role</span><strong>UI/UX Designer</strong></div>
                <div className="ov-item"><span>Tools</span><strong>Figma</strong></div>
              </div>
            </div>
            <div className="col problem">
              <h2 className="cs-heading">Problem <span className="accent">Statement</span></h2>
              <p className="cs-paragraph">
                Contractors and workers struggle to quickly find reliable job opportunities and talent. Existing
                experiences are slow, unclear, and not optimized for on‑the‑go use. Queme clarifies the flow,
                reduces friction, and builds trust, especially for mobile.
              </p>
            </div>
          </div>
        </section>

        {/* 3. My Role */}
        <section className="cs-slide role">
          <div className="cs-container">
            <div>
            <h2 className="cs-heading">My <span className="accent">Role</span></h2>
            <p className="cs-paragraph narrow">
              As the UI/UX Designer for Queme, I owned discovery to delivery: research synthesis, user flows,
              system design, and high‑fidelity prototypes. I focused on speed, clarity, and a consistent system
              tailored for field use.
            </p>
            </div>
            <div className="pills">
              {['Empathy Mapping','User Research','Wireframes','Visual Design','Usability Testing','User Persona','User Flow','Information Architecture','Problem Solution','Prototyping'].map(t => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Design Thinking Process */}
        <section className="cs-slide timeline">
  <div className="cs-container">
    <h2 className="cs-heading">Design <span className="accent">Thinking</span> Process</h2>
    <div className="steps">
      {[
        { k:'iconEmpathize', file: 'fluent_calendar-search-16-regular.png', t: 'Empathize', dList: ['User Research','User Interview','Entrant Analysis'] },
        { k:'iconDefine', file: 'carbon_text-link-analysis.png', t: 'Define', dList: ['User Persona','User Journey Map','Empathy Map'] },
        { k:'iconIdeate', file: 'icons8_idea.png', t: 'Ideate', dList: ['Brainstorming','Card Sorting','User Flow'] },
        { k:'iconDesign', file: 'fluent_design-ideas-16-regular.png', t: 'Design', dList: ['Paper Wireframes','Visual Design','Prototype'] },
        { k:'iconTest', file: 'file-icons_testcafe.png', t: 'Test', dList: ['Check/Usability','Survey Insight','Improvements'] },
      ].map((s, idx, arr) => (
        <div className="step" key={s.t}>
          <div className="step-icon">
            <SmartImage
              candidates={[
                manifest?.[s.k],
                `/images/${s.file}`
              ].filter(Boolean)}
              alt={s.t}
            />
          </div>
          <div className="step-title">{s.t}</div>
          <ul className="step-list">
            {s.dList.map(item => (<li key={item}>{item}</li>))}
          </ul>
          {idx < arr.length - 1 && <div className="step-sep" aria-hidden>»»»</div>}
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Empathy Mapping */}
        <section className="cs-slide empathy">
          <div className="cs-container">
            <h2 className="cs-heading">Empathy <span className="accent">Mapping</span></h2>
            <div className="empathy-rows">
              {[{title:'Contractor - Mohamad'},{title:'Worker - Rami'}].map(row => (
                <div className="empathy-row" key={row.title}>
                  <h3 className="empathy-title">{row.title}</h3>
                  <div className="cards">
                    <div className="card say"><div className="card-label">Say</div><ul><li>I need skilled workers I can trust.</li><li>I don’t have time to train someone from scratch.</li></ul></div>
                    <div className="card think"><div className="card-label">Think</div><ul><li>Will this person show up on time?</li><li>How do I know who’s actually good?</li></ul></div>
                    <div className="card do"><div className="card-label">Do</div><ul><li>Posts jobs quickly, scans applications.</li><li>Reads ratings and reviews.</li></ul></div>
                    <div className="card feel"><div className="card-label">Feel</div><ul><li>Overwhelmed by unqualified applicants.</li><li>Worried about delays or workmanship.</li></ul></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pain Points */}
        <section className="cs-slide badges">
          <div className="cs-container">
            <div>
            <h2 className="cs-heading">Pain Points <span className="accent">from interviews</span></h2>
            <p>
            Through this one-week project, I developed a strong understanding of the needs and frustrations of both contractors and workers. They require a platform that is fast, clear, and easy to use allowing them to post or apply for jobs without unnecessary friction. Working under a tight deadline taught me how to prioritize core functionality, focus on simplicity, and make design decisions that truly reflect user needs.
            </p>
            </div>
            <div className="badge-wrap">
              {[
                'Difficulty finding reliable, skilled workers',
                'Struggles to find steady opportunities',
                'Time wasted reviewing unqualified applicants',
                'Anxiety about fair pay and job safety',
                'Concerns over delays or poor work quality',
              ].map(b => (<span className="badge" key={b}>{b}</span>))}
            </div>
          </div>
        </section>

        {/* 7. User Flow */}
        <section className="cs-slide userflow">
  <div className="cs-container">
    <div>
    <h2 className="cs-heading">User <span className="accent">Flow</span></h2>
    <p>
    This user flow illustrates two core paths on the Queme website: one for workers seeking jobs and one for contractors posting jobs Both users start by logging in or signing up, then proceed to browse or post jobs.
<br /><br />
Workers can view suggested listings and apply, while contractors can add a job and choose from applicantskeeping the experience simple, direct, and efficient.
    </p>
    </div>
    <div className="flows">
      <div className="flow">
        <div className="flow-title">Worker Flow</div>
        <SmartImage
          candidates={[
            manifest?.flowWorker,
            '/images/Group512.png', // new worker flow image
            '/images/userflow-worker.png',
            '/images/worker-flow.png',
            '/images/userflow1.png',
            '/images/flow-worker.png',
            '/images/07.png',
            '/images/07.jpg'
          ].filter(Boolean)}
          alt="Worker flow"
        />
      </div>
      <div className="flow">
        <div className="flow-title">Contractor Flow</div>
        <SmartImage
          candidates={[
            manifest?.flowContractor,
            '/images/Group513.png', // new contractor flow image
            '/images/userflow-contractor.png',
            '/images/contractor-flow.png',
            '/images/userflow2.png',
            '/images/flow-contractor.png',
            '/images/08.png',
            '/images/08.jpg'
          ].filter(Boolean)}
          alt="Contractor flow"
        />
      </div>
    </div>
  </div>
</section>
     {/* 1. Solution Statement */}
     <section className="cs-slide solution">
          <div className="cs-container">
            <div className="solution-text">
              <h1 className="cs-title">Solution <span className="accent">Statement</span></h1>
              <p className="cs-paragraph">
                The Queme website solves the disconnect between contractors and skilled workers by providing a
                fast, mobile‑friendly experience to post and apply for jobs. Clear job matching flows and a
                modern UI help users take quick action with clarity and confidence.
              </p>
            </div>
            <div>
                <img className='mockup-solution' src="\images\Mockup-homepage-1.png" alt="mockup image" />
            </div>
            {/* <div className="solution-media">
              <SmartImage
                candidates={[
                  manifest?.solutionMockup,
                  '/images/queme-mockup.png','/images/queme-mockups.png','/images/mockup.png','/images/solution-mockup.png','/images/solution.png','/images/solution.jpg','/images/01.png','/images/01.jpg'
                ].filter(Boolean)}
                alt="Desktop, tablet and mobile mockups"
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default QuemeCaseStudy


