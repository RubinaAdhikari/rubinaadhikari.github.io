import './Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            <header>
                <p>Web Developer </p>
                <p>Email: adhikarirubina609@gmail.com | Phone: +1234567890</p>
            </header>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git & GitHub</li>
                </ul>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <div className="job">
                    <h3>Frontend Developer</h3>
                    <p><strong>Company Name:</strong> ABC Company</p>
                    <ul>
                        <li>Developed responsive and accessible websites using HTML, CSS, and JavaScript.</li>
                       
                    </ul>
                </div>
                <div className="job">
                    <h3>Junior Web Developer</h3>
                    <p><strong>Company Name:</strong> XYZ Company | <strong>Duration:</strong> July 2021 - Dec 2022</p>
                    <ul>
                        <li>Assisted in building and maintaining websites using HTML and CSS.</li>
                        {/* <li>Fixed bugs and optimized the performance of web pages.</li> */}
                    </ul>
                </div>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p><strong>Bachelor in Computer Information</strong> - Medhavi College</p>
            </section>

            
        </div>
    );
}


 