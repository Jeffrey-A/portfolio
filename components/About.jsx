export default function About(props) {
    return (
        <div id="about" className="section">
            <h2 className="mb-4">About</h2>
            <div className="d-lg-flex align-items-center p-3 my-4 skills-section">
                <p className="me-3 mb-3 mb-lg-0 primary-skill-label">Primary Skills: </p>
                <div className="d-flex flex-wrap align-items-center">
                    <button
                        className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                        data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                <div className='py-3'>
                                <p>Proficient in:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>HTML</span>
                                    <span className='btn btn-secondary btn-sm skill'>CSS</span>
                                    <span className='btn btn-secondary btn-sm skill'>JavaScript</span>
                                    <span className='btn btn-secondary btn-sm skill'>Sass</span>
                                    <span className='btn btn-secondary btn-sm skill'>Bootstrap 5</span>
                                    <span className='btn btn-secondary btn-sm skill'>React JS</span>
                                </div>
                                <p className='mt-3'>Prior experience:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>TypeScript</span>
                                    <span className='btn btn-secondary btn-sm skill'>Redux</span>
                                    <span className='btn btn-secondary btn-sm skill'>Storybook</span>
                                    <span className='btn btn-secondary btn-sm skill'>jQuery</span>
                                </div>
                                </div>
                                ">
                        <span className="me-2">Frontend Development</span>
                        <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                        className="btn primary-skill d-flex mb-2 mb-lg-0 justify-content-between align-items-center me-2"
                        data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                <div className='py-3'>
                                <p>Proficient in:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>Node JS</span>
                                </div>
                                <p className='mt-3'>Prior experience:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>Next JS</span>
                                    <span className='btn btn-secondary btn-sm skill'>Express JS</span>
                                    <span className='btn btn-secondary btn-sm skill'>PostgreSQL</span>
                                    <span className='btn btn-secondary btn-sm skill'>MySQL</span>
                                    <span className='btn btn-secondary btn-sm skill'>Firebase</span>
                                    <span className='btn btn-secondary btn-sm skill'>Python</span>
                                    <span className='btn btn-secondary btn-sm skill'>Java</span>
                                </div>
                                </div>
                                ">
                        <span className="me-2">Backend Development</span>
                        <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                        className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                        data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                <div className='py-3'>
                                <p>Prior experience:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>Cypress.io</span>
                                    <span className='btn btn-secondary btn-sm skill'>Jest.io</span>
                                    <span className='btn btn-secondary btn-sm skill'>Enzyme</span>
                                </div>
                                </div>
                                ">
                        <span className="me-2">Testing Tools</span>
                        <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                        className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                        data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                <div className='py-3'>
                                <p>Familiar with:</p>
                                <div className='skills-grid'>
                                    <span className='btn btn-secondary btn-sm skill'>Adobe XD</span>
                                    <span className='btn btn-secondary btn-sm skill'>Figma</span>
                                </div>
                                </div>
                                ">
                        <span className="me-2">Design Tools</span>
                        <i className="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>
            <div className="d-lg-flex justify-content-between">
                <div className="about-photo-container mb-3 mb-0">
                    <img src="images/about-image.jpeg" alt="Jeffrey Almanzar" />
                </div>
                <div className="about-text">
                    <p className="lead">
                        Hi, my name is Jeffrey Almanzar, and I’ve been in the web development industry
                        for more than three years. You can see a few of the projects that I've
                        contributed while working at RubensteinTech, <a target="_blank"
                            href="https://www.rubensteintech.com/team/jeffrey-almanzar.html">here</a>.
                    </p>
                    <p>I learned the basics of programming in college studying computer science. My
                        curiosity led me to discover the web development field, and I learned the basics
                        of HTML, CSS, and JavaScript on my own.
                    </p>
                    <p>
                        While in college, my web development skills were taken to the next level on an
                        intensive
                        technical bootcamp focused on full stack JavaScript development. This bootcamp
                        helped me
                        get my first software engineering internship at Schoology, which helped me get
                        another two internships at RubensteinTech,
                        where I stayed working full time as software engineer right after completing my
                        degree.
                    </p>
                    <p>
                        Thanks to the experience gained at Schoology and RubensteinTech, I found out
                        that my
                        most fulfillment task is implementing user interfaces following design
                        guidelines.
                        Therefore, to better understand users and empathize with them, I completed the
                        Google UX
                        Design certificate on June 2022.
                    </p>
                    <p>
                        To learn more about me, feel free to contact me, <a target="_blank"
                            href="mailto:almanzarortizjeffrey@gmail.com">here</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}