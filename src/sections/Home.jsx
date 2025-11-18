import './Home.css'

function Home() {
  return (
    <section id="home">
        <img className="home-img" src="/images/Parth.jpg" alt="Profile" loading="eager"/> 
        {/* https://img.pikbest.com/origin/10/39/14/59WpIkbEsTVxf.jpg!w700wp */}
        <div className="home-content">
            <h1>Hi, I'm <span>Parth Lad</span></h1>
            <h2>Full Stack Developer | Automation Enthusiast | Tech Explorer</h2>
            <p>
            I create scalable, data-driven, and user-friendly web applications using React.js, Java, Python, and SQL.
            Passionate about blending frontend creativity with backend precision, I love building tools that
            simplify work and make technology more intuitive.
            </p>
            <div className="home-buttons">
                <a href="#projects" className="home-btn">View My Work</a>
                <a href="/ParthLad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="home-btn">
                    View Resume</a>
                <a href="#contact" className="home-btn">Contact Me</a>
                <a href="https://github.com/Parthlad1" target="_blank" rel="noopener noreferrer" className="home-btn">
                GitHub</a>
            </div>
        </div>
    </section>

  );
}

export default Home;