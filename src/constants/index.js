import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import certificate1 from "../assets/certificates/certificate-1.png";
import certificate2 from "../assets/certificates/certificate-2.png";
import certificate3 from "../assets/certificates/certificate-3.png";
import certificate4 from "../assets/certificates/certificate-4.png";
import certificate5 from "../assets/certificates/certificate-5.png";

export const HERO_CONTENT = `An IT Support Technician with over a decade of experience in technology and administrative sectors. Skilled in managing and troubleshooting complex IT systems, including VPN configurations, network setups, and hardware installations. Adept at providing exceptional user support and training to ensure seamless software integration and operation.`;
export const HERO_CONTENT2 = `Experienced in vehicle licensing supervision, project coordination, and customer care, demonstrating strong organizational and leadership skills. Currently pursuing a BSc in Software Engineering and Computer Science, with a solid foundation in Python programming and cloud computing. A CodeYourFuture trainee, also building projects with FreeCodeCamp while learning.`;

export const ABOUT_TEXT = `Hi, I’m Luke Manyamazi, an IT professional with expertise in remote and onsite technical support. I have a strong passion for technology and programming, backed by certifications in Python, web design, and cloud computing. Currently, I’m a CodeYourFuture trainee and a second-year Computer Engineering student at Zimbabwe Open University. My goal is to become a full-stack software engineer, building impactful, real-world solutions while continuously learning and growing.`;

export const CERTIFICATES = [
  {
    name: "Introduction to AWS Certifications ",
    institution: "AWS",
    image: certificate1,
    description:
      "A beginner-friendly course that provides an overview of AWS Certifications, their benefits, and guidance on choosing the right certification to validate cloud computing skills.",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    institution: "AWS",
    image: certificate1,
    description:
      "A foundational AWS course that covers core cloud concepts, AWS services, security, pricing, and best practices to prepare for the AWS Certified Cloud Practitioner exam.",
  },
  {
    name: "Cloud Computing 101",
    institution: "Coursera",
    image: certificate2,
    description:
      "A beginner-level course that provides an overview of cloud computing concepts, services, and deployment models, including hands-on labs and real-world examples.",
  },
  {
    name: "CS50's Introduction to Python",
    institution: "Harvard University",
    image: certificate3,
    description:
      "A Harvard course that introduces Python programming, covering fundamentals like data structures, functions, file handling, and problem-solving through hands-on projects.",
  },
  {
    name: "Responsive Web Design Certification",
    institution: "FreeCodeCamp",
    image: certificate4,
    description:
      "A comprehensive certification that covers the basics of responsive web design, including HTML5, CSS3, and responsive design principles, to create user-friendly websites.",
  },
  {
    name: "Designing and Deploying LAN and Wi-Fi Networks",
    institution: "The Internet Society",
    image: certificate5,
    description:
      "A course that covers the principles of designing, configuring, and deploying LAN and Wi-Fi networks, including network architecture, security, and troubleshooting.",
  },
];

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "IT Support Technician",
    company: "Torga Optical",
    description: `Install, troubleshoot, and maintain VPNs, printers, scanners, and IT hardware, ensuring system uptime and reducing downtime by 30%. I manage Torga Apps and MagicPOS across 170+ stores, conduct IT asset servicing, and oversee Microsoft Office installations and software upgrades, maintaining 95% compliance. I also maintain the lab IT asset register and network server with 99.9% uptime. Additionally, I enhance website synchronization, create training content for LabTube, and support marketing by producing in-store TV content, boosting customer engagement by 30%.`,
    technologies: ["OpenVPN", "Anydesk", "MS365", "Blender", "Adobe"],
  },
  {
    year: "2013 - 2019",
    role: "Vehicle Licensing Supervisor",
    company: "ZINARA",
    description: `Supervised 10+ licensing cashiers, ensuring accurate processing of 1,000+ licenses monthly while managing banking processes and compiling reports, reducing errors by 25%. I approved 500+ license cancellations annually and oversaw daily cash-ups exceeding $20,000 monthly. Additionally, I handled 100+ client queries per month with a 95% resolution rate, organized community outreach events for 2,000+ attendees, and represented the organization in 20+ stakeholder meetings to strengthen partnerships.`,
    technologies: ["ZimLIC", "ZimToll", "Microsoft Office"],
  },
  {
    year: "2008 - 2010",
    role: "Junior Systems Administrator",
    company: "Nyoni's Kraal Restaurant",
    description: `Installed and maintained computer systems, POS, display screens, and CCTV for a facility serving 500+ customers weekly, while providing standby IT support.`,
    technologies: ["Windows", "Hikvision", "RDP", "Teamviewer"],
  },
];

export const PROJECTS = [
  {
    title: "TV Show Website",
    image: project1,
    description:
      "A TV show listing app that fetches and displays TV show data from the TVMaze API, allowing users to search and explore shows and episodes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://cyf-luke-manyamazi-tv.netlify.app",
  },
  {
    title: "Number Sorter App",
    image: project2,
    description:
      "A JavaScript app that sorts an array of numbers in ascending or descending order, teaching basic algorithmic thinking and sorting logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://lm-number-sorter.netlify.app/",
  },
  {
    title: "Home Town Homepage",
    image: project3,
    description:
      "A website highlighting Cape Town’s top attractions and activities, from Table Mountain to Robben Island, for an unforgettable travel experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://lm-hometown-homepage.netlify.app",
  },
  {
    title: "Tribute Page",
    image: project4,
    description:
      "A tribute page honoring Nelson Mandela, showcasing his life, legacy, and achievements through inspiring quotes, key milestones, and historical insights.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://lm-tribute-page.netlify.app",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A tribute page honoring Nelson Mandela, showcasing his life, legacy, and achievements through inspiring quotes, key milestones, and historical insights.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export const CONTACT = {
  address: "11th Street, Kensington, Cape Town, South Africa",
  phoneNo: "+27 62 107 1140",
  email: "lukemanyamazi1@gmail.com",
};
