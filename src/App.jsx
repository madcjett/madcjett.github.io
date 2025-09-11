import React from 'react';
import './App.css';

// Sample project data
const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A responsive portfolio website built using React, showcasing my skills, projects, and resume.",
        link: "https://yourportfolio.com",
    },
    {
        title: "Weather App",
        description: "A weather application that fetches data from OpenWeather API to show current weather and forecast.",
        link: "https://weatherapp.com",
    },
    {
        title: "Task Manager App",
        description: "A to-do list application where users can create, edit, and delete tasks. It uses local storage to save tasks.",
        link: "https://taskmanagerapp.com",
    }
];

// Sample work experience data
const workExperience = [
    {
        jobTitle: "Customer Service",
        company: "Fabletics.",
        duration: "Past – Present",
        description: "Clothing stuff."
    },
    {
        jobTitle: "VP of Finance",
        company: "Alpha Delta Pi",
        duration: "Past – Present",
        description: "Money stuff."
    },
    {
        jobTitle: "Recruitment Analyst",
        company: "Alpha Delta Pi",
        duration: "August 2025 – Present",
        description: "Number stuff."
    }
];

// Sample education data
const education = [
    {
        school: "Cal State Fullerton",
        degree: "Bachelor of Arts in English",
        duration: "September 2023 – May 2026",
        achievements: [
            "Achievement"
        ]
    },
    {
        school: "Bonita High School",
        degree: "High School Diploma",
        duration: "August 2019 – June 2023",
        achievements: [
            "Apex Honors",
            "Senior Class Council"
        ]
    }
];

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Madison C. Jett</h1>
                <p>The greatest sister ever.</p>
            </header>

            {/*<section className="projects">*/}
            {/*    <h2>Sample Writings</h2>*/}
            {/*    {projects.map((project, index) => (*/}
            {/*        <div key={index} className="project-card">*/}
            {/*            <h3>{project.title}</h3>*/}
            {/*            <p>{project.description}</p>*/}
            {/*            <p><strong>Technologies:</strong> {project.technologies}</p>*/}
            {/*            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</section>*/}

            {/* Work Experience Section */}
            <section className="work-experience">
                <h2>Work Experience</h2>
                {workExperience.map((work, index) => (
                    <div key={index} className="work-card">
                        <h3>{work.jobTitle}</h3>
                        <p><strong>{work.company}</strong> | <em>{work.duration}</em></p>
                        <p>{work.description}</p>
                    </div>
                ))}
            </section>

            {/* Education Section */}
            <section className="education">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.degree}</h3>
                        <p><strong>{edu.school}</strong> | <em>{edu.duration}</em></p>
                        <ul>
                            {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <footer className="App-footer">
                <p>Love, B</p>
            </footer>
        </div>
    );
}

export default App;
