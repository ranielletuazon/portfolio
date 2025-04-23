import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';

// Images
import orbit from '../pages/assets/projectImages/Screenshot from 2025-04-23 11-27-46.png';
import dhv from '../pages/assets/projectImages/Screenshot from 2025-04-23 11-28-08.png';
import uavehicle from '../pages/assets/projectImages/Screenshot from 2025-04-23 11-28-27.png';
import dfh from '../pages/assets/projectImages/Screenshot from 2025-04-23 11-28-37.png';
import disaster from '../pages/assets/projectImages/Screenshot from 2025-04-23 11-28-49.png';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    interface Project {
        title: string;
        description: string;
        technologies: string[];
        link?: string | [string, ...string[]];
        image: any;
    }

    const projects: Project[] = [
        {
            title: "ORBIT - Find your perfect duo in any games you play",
            description:
                "A social media platform for gamers, similar to OmeTV which finds you a gamer to play with similar to your preferences.",
            technologies: ["React", "Vite", "TypeScript", "Tailwind", "Firebase", "Responsive"],
            link: "https://orbitbeta.vercel.app",
            image: orbit
        },
        {
            title: "DHVSTUDY - An online chatroom for students",    
            description:
                "A web project that allows students to create a chatroom and have a live chat with their classmates.",
            technologies: ["React", "JavaScript", "MongoDB"],
            link: "https://dhvstudy.vercel.app/",
            image: dhv
        },
        {
            title: "UA Vehicle - The parking information for the University of the Assumption",
            description:
                "A three type system project that allows users to register, identify, search, and update their vehicle information.",
            technologies: ["NextJS", "JavaScript", "Firebase"],
            link: "https://uavehicle.vercel.app/",
            image: uavehicle
        },
        {
            title: "DustFreeHub - Find local cleaning services near you",
            description: "A web project that allows users to find local cleaning services.",
            technologies: ["React", "JavaScript", "Firebase"],
            link: "https://dust-free-hub-bwtd.vercel.app/",
            image: dfh
        },
        {
            title: "Disaster Page - Sta Ana Barangay Disaster Management",
            description: "A two system project for the Sta Ana to update the residents about the ongoing disasters, reports, and updates.",
            technologies: ["React", "JavaScript", "Firebase"],
            link: "https://disasterpage.vercel.app/",
            image: disaster
        }
    ];

    // Initialize Intersection Observer to detect when projects are visible
    useEffect(() => {
        const observerOptions = {
            root: null, // use viewport as root
            rootMargin: '0px',
            threshold: 0.3, // trigger when 30% of element is visible
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = projectRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1 && !visibleProjects.includes(index)) {
                        setVisibleProjects(prev => [...prev, index]);
                    }
                }
            });
        }, observerOptions);
        
        // Observe all project elements
        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        
        return () => observer.disconnect();
    }, []);

    const handleVisitProject = (link?: string | [string, ...string[]]) => {
        if (link) {
            if (typeof link === 'string') {
                window.open(link, '_blank');
            }
        }
    };

    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
                {/* Header */}
                <Header />

                {/* Project Displays */}
                {projects.map((project, index) => (
                    <div 
                        id={`project-${index}`}
                        className="cursor-pointer w-full h-screen flex justify-center items-center snap-start" 
                        key={index}
                        ref={el => projectRefs.current[index] = el}
                    >
                        <div 
                            className={`w-[80%] h-[75%] bg-slate-800 rounded-lg shadow-4xl overflow-hidden relative group transition-all duration-1000 ease-out ${
                                visibleProjects.includes(index) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-20'
                            }`}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => handleVisitProject(project.link)}
                        >
                            {/* Project Background Image */}
                            <div 
                                className="w-full h-full bg-no-repeat bg-center bg-cover transition-all duration-500"
                                style={{ 
                                    backgroundImage: `url(${project.image})`,
                                    transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)'
                                }}
                            />

                            {/* Project Info Overlay - Appears on Hover */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 flex flex-col justify-end transition-opacity duration-300 ${
                                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h1>
                                <p className="text-lg text-gray-300 mb-4">{project.description}</p>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-medium text-gray-200 mb-2">Technologies:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="px-3 py-1 bg-slate-900/50 text-blue-100 rounded-md text-sm backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Visit Button */}
                                {project.link && (
                                    <button 
                                        className="self-start px-6 py-2 bg-slate-800 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center hover:bg-blue-600"
                                    >
                                        Visit Project
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Always Visible Title (when not hovering) */}
                            <div 
                                className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ${
                                    hoveredProject === index ? 'opacity-0' : 'opacity-100'
                                }`}
                            >
                                <h1 className="text-4xl font-bold text-white text-center px-6 py-4 backdrop-blur-sm bg-black/30 rounded-lg">{project.title.split(' - ')[0]}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}