import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Noor Athamny</h1>
          <h2 className="hero-title">Front End Developer & UI UX Designer</h2>
          <p className="hero-description">
            I'm Dedicated To Delivering <strong>Excellence</strong> In My Work, Using It As A Means To Effectively <strong>Communicate</strong> And Showcase My Technical Skills.
          </p>
          
                     <div className="hero-links">
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-link">
               Linked In
             </a>
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-link">
               GitHub
             </a>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
