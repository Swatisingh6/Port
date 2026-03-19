import java from '../img/java.png';
import Python from '../img/python.webp';
import mongodb from '../img/mongodb.jpg';
import node from '../img/node.png';
import reactjs from '../img/reactjs.png';
import spring from '../img/spring.png';
import css from '../img/css.jpg';
import html from '../img/html.png';
import springboot from '../img/springBoot.jpg';
import { createContext } from 'react';
import innovation from '../img/innovation.png'
import bank from '../img/bank.png'
//import prime1 from '../img/prime1.png'
import automata from '../img/automata.png'
import soft from '../img/soft.png'
import bits from '../img/bits.png'
import dsa from '../img/dsa.png'
import management from '../img/management.png'
//import powerBiProject from '../img/powerBiProject.png'
import eplq from '../img/eplq.png'

// Step 1
export const portfolioContext = createContext();

// Step 2
export default function PortfolioContextProvider({ children }) {
    const ProjectItems = [
        { id: 1, logo: mongodb, name: "MongoDB" },
        { id: 2, logo: java, name: "Java" },
        { id: 3, logo: Python, name: "Python" },
        { id: 4, logo: node, name: "NodeJs" },
        { id: 5, logo: spring, name: "Spring" },
        { id: 6, logo: reactjs, name: "ReactJs" }
    ];

    const ExperienceItems = [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: mongodb, name: "MongoDB" },
        { id: 4, logo: java, name: "Java" },
        { id: 5, logo: Python, name: "Python" },
        { id: 6, logo: reactjs, name: "ReactJs" },
        { id: 7, logo: spring, name: "Spring" },
        { id: 8, logo: springboot, name: "SpringBoot" },
        { id: 9, logo: node, name: "NodeJs" }
    ];

    const AboutmeData =
        `I'm Swati Singh, a B.Tech CSE student with a strong passion for building modern and user-friendly web applications. I specialize in full-stack development using the MERN stack and enjoy turning ideas into real-world projects that are both scalable and efficient.

I have worked on projects like a personal portfolio website and other web applications that showcase my skills in frontend and backend development. Through these, I’ve gained hands-on experience in designing responsive interfaces and managing data effectively.

Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving skills. I continuously explore new technologies, frameworks, and tools to stay updated with industry trends.

My goal is to grow as a software developer, contribute to impactful projects, and build solutions that enhance user experience and solve real-world problems.`;

        const AboutData = {
            education: [
              { title: "Bachelor of Technology - Computer Science and Engineering", institution: "Lovely Professional University", duration: "2023 – Present" },
              { title: "Intermediate (12th)", institution: "Gorakh singh COLLEGE", duration: "2021 – 2023" },
              { title: "Matriculation (10th)", institution: "Saraswati vidya mandir", duration: "2019 – 2021" },
              { title: "Full-Stack Web Development Training", institution: "InfosysSpringboard", duration: "Jun 2025 – Jul 2025" },
              ],
          
            skill_experience: [
              {
                category: "Programming Languages",
                skills: [
                  { name: "C++", imgUrl: "https://th.bing.com/th/id/OIP.Fzdk6hc9sVxoZlkn3_N-mQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JavaScript", imgUrl: "https://th.bing.com/th/id/OIP.8lG71Gr7LODSWlZITL-NfwHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "R Programming", imgUrl: "https://th.bing.com/th?q=R+Programming+Logo+No+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock" },
                  { name: "Java", imgUrl: "https://th.bing.com/th/id/OIP.qI8zjBr4HClaAvkTP2ZzpwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Databases & Tools",
                skills: [
                  { name: "MongoDB", imgUrl: "https://th.bing.com/th/id/OIP.j3YhzxdAI2oEN4DQUq26wwHaDt?w=333&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "MySQL", imgUrl: "https://th.bing.com/th/id/OIP.N-EzPm0vVtDmkP4afj9kAgHaEo?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Excel", imgUrl: "https://th.bing.com/th/id/OIP.chmccn7yfkv2Z25qrZHxzwHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Tableau", imgUrl: "https://th.bing.com/th/id/OIP.pbwZ69rdHGorlqXWfG8SDQHaBx?w=308&h=83&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Power BI", imgUrl: "https://th.bing.com/th/id/OIP.L2XFx35QtcEYDePQ44DgwQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Development Tools",
                skills: [
                  { name: "Git", imgUrl: "https://th.bing.com/th/id/OIP.SrJea1F5IEm-u0W_QfFi6wHaEK?w=1536&h=864&rs=1&pid=ImgDetMain" },
                  { name: "GitHub", imgUrl: "https://th.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "HTML", imgUrl: "https://th.bing.com/th/id/OIP.S-sXozyvtrUrtTzemQXpFwHaEK?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "CSS", imgUrl: "https://th.bing.com/th/id/OIP.F3-e7zCL-kHsXcb8odZpqAHaFP?w=204&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "TailWind CSS", imgUrl: "https://th.bing.com/th/id/OIP.MNndCdi_PnXQdTCOoMLM9QHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "React Js", imgUrl: "https://th.bing.com/th/id/OIP.-i781M2JNO6ZYT5VetHsSAHaDt?w=321&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Express", imgUrl: "https://th.bing.com/th/id/OIP.lt9WI3J34Khu2UxzAe_QnQHaER?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Node js", imgUrl: "https://th.bing.com/th/id/OIP.m5RYM_Wkj4LsZewpigV5tgHaDf?w=349&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JWT", imgUrl: "https://th.bing.com/th/id/OIP.W8YX-Hxj-2vHX1FBwcj-dAHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "REST APIs", imgUrl: "https://th.bing.com/th/id/OIP.6QTSZNxNredTYB0NdUZBHgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Problem-Solving" },
                  { name: "HardWorking" },
                  {name:"Team Player"}
                ]
              }
            ],
          
            professional_experience: [
              {
                title: "Backend Developer",
                company: "Student Innovation (Live Project)",
                duration: "Oct 2025 – Dec 2025",
                techUsed: [
                  "React Js","HTML","Javascript","Tailwind","Node.js","BcryptJs" ,"Express.js", "MongoDB", "Zegocloud", "Razorpay", "Socket.io"
                ],
                imgUrl: innovation,
                gitHubLink: "https://github.com/Swatisingh6/studentInnovation.git",
                deployedLink: 'https://innovationwebsite-2.onrender.com/'
              },
              {
                title: "Full Stack Developer Training",
                company: "Postfix Evaluator",
                duration: "Jun 2025 – Jul 2025",
                techUsed: [
                  "React.js", "Node.js", "MongoDB", "Express.js", "DSA", "Tailwind"
                ],
                imgUrl: bank,
                gitHubLink: "https://github.com/Swatisingh6/Bank-Queue-Management-System.git",
                deployedLink: 'https://swatisingh6.github.io/minorproject/'
              },
              {
                title: "Full Stack Developer",
                company: "Eplq Unique",
                duration: "Mar 2025 – Apr 2025",
                techUsed: [
                  "React.js", "Node.js", "MongoDB", "Express.js", "Firebase", "Tailwind"
                ],
                imgUrl: eplq,
                gitHubLink: "https://github.com/Swatisingh6/eplq-unique.onrender.git",
                deployedLink: "https://eplq-unique.onrender.com/"
              },
             
            ],
            
            certificates: [
              { title: "Software Engineering", institution: "Coursera", duration: "Feb 2024 – Mar 2024", img: soft },
              { title: "Computer Networks", institution: "Coursera", duration: "Aug 2024 – Sep 2024", img: bits },
              { title: "Management", institution: "Coursera", duration: "Sep 2023 – Oct 2023", img: management },
              { title: "Computational Theory", institution: "Infosy SpringBoard", duration: "Jun 2025 – Jul 2025", img: automata },
              { title: "Data Structure and Algorithms", institution: "Board Infinity", duration: "Aug 2025 – Sep 2025", img: dsa },
            ],
            
          
            achievements: `Solved 200+ coding problems on LeetCode & GeeksforGeeks (2026)`,
          
            mission_statement: `My mission is to leverage my skills in full stack web development to build efficient, scalable, and user-friendly applications that create real-world impact. I aim to contribute to the digital landscape through clean and innovative software solutions. I am committed to continuous learning, constantly improving my technical expertise, and embracing new challenges to grow as a developer.`
          };
          

    const value = {
        ExperienceItems,
        ProjectItems,
        AboutmeData,
        AboutData
    };

    // Step 3
    return (
        <portfolioContext.Provider value={value}>
            {children}
        </portfolioContext.Provider>
    );
}
