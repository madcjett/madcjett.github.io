import React from 'react';
import './App.css';

// Sample project data
const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A responsive portfolio website built using React, showcasing my skills, projects, and resume.",
        technologies: "React, CSS, HTML",
        link: "https://yourportfolio.com",
    },
    {
        title: "Weather App",
        description: "A weather application that fetches data from OpenWeather API to show current weather and forecast.",
        technologies: "React, JavaScript, OpenWeather API",
        link: "https://weatherapp.com",
    },
    {
        title: "Task Manager App",
        description: "A to-do list application where users can create, edit, and delete tasks. It uses local storage to save tasks.",
        technologies: "React, JavaScript, Local Storage",
        link: "https://taskmanagerapp.com",
    }
];

// Sample work experience data
const workExperience = [
    {
        jobTitle: "Important Person",
        company: "Fabletics.",
        duration: "June 2024 – Present",
        description: "Worked on developing user interfaces for client websites using React and JavaScript. Collaborated with the design team to create responsive web pages."
    },
    {
        jobTitle: "Treasurer",
        company: "Startup X",
        duration: "June 2023 – Present",
        description: "Developed features for the company’s internal tool using Python and Flask. Worked on bug fixes and assisted in improving the tool’s performance."
    },
    {
        jobTitle: "Recruitment Analyst",
        company: "Startup X",
        duration: "August 2025 – Present",
        description: "Developed features for the company’s internal tool using Python and Flask. Worked on bug fixes and assisted in improving the tool’s performance."
    }
];

// Sample education data
const education = [
    {
        school: "Cal State Fullerton",
        degree: "Bachelor of Arts in English",
        duration: "September 2021 – May 2025",
        achievements: [
            "Dean's List (2023)",
            "Member of the Coding Club",
            "Completed courses in Algorithms, Data Structures, Web Development, and Machine Learning"
        ]
    },
    {
        school: "Bonita High School",
        degree: "High School Diploma",
        duration: "September 2019 – May 2023",
        achievements: [
            "Achieve",
            "Achievement 1"
        ]
    }
];

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Madison C. Jett</h1>
                <p>The greatest person ever.</p>
            </header>

            <section className="projects">
                <h2>Sample Writings</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </section>

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
                <p>Contact:</p>
            </footer>
        </div>
    );
}

export default App;
