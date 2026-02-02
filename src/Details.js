// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.jpg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import cpp from "./assets/techstack/cpp"
import java from "./assets/techstack/java"
import python from "./assets/techstack/python"
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Gayathri Maniraj M",
  tagline: "Problem solver by logic, developer by passion",
  img: profile,
  about: `"A driven and quick-learning Fresher aiming
for a Full Stack Developer role to apply
strong foundational knowledge in front-end
(HTML, CSS, JS, React) and back-end
(Node.js, Django) technologies. Committed
to continuous learning and delivering high
quality, functional web solutions while
collaborating effectively with development
teams"`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/gayathri-maniraj-b616933a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/gayathrim1220-art"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "MSC Computer Science",
    Company: "VLB Janakiyammal College of  Arts and Science",
    Location: "Coimbatore",
    Duration: "2021 - 2023 ",
  },
  {
    Position: " BSC Computer Science",
    Company: `VLB Janakiyammal College of  Arts and Science`,
    Location: "Coimbatore",
    Duration: "2018 - 2021 ",
  },
  {
    Position: " HSC & SSLC ",
    Company: `Ashram     Matriculation Higher Secondary School`,
    Location: "Coimbatore",
    Duration: "2004 - 2018 ",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  cpp: cpp,
  python: python,
  java: java,
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Masking medical conf ident ial data using RSA cryptgraphy and bi t plane steganography",
    image: projectImage1,
    description: `Masking confidential medical data using RSA cryptography and bit-plane steganography is a dual-layer security approach designed to protect patient information during transmission. It combines encryption (making data unreadable) with steganography (hiding the existence of data) to ensure high confidentiality and integrity in e-health applications. `,
    techstack: "HTML/CSS, JavaScript"
  },
  {
    title: "Online food order ing and del ivery system",
    image: projectImage2,
    description: `Online food ordering and delivery systems enable restaurants to accept orders via websites, apps, or social media, optimizing operations with real-time tracking, inventory management, and direct-to-customer delivery, often avoiding third-party commissions. These systems feature digital menus, secure online payments, and driver dispatch, providing a safe, fast, and, efficient experience. `,
    techstack: "HTML/CSS, JavaScript"
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Gayathrim1220@gmail.com",
  phone: "+91 98948 76115",
};
