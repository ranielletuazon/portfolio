import Header from './components/Header'

export default function Projects() {

    interface Project {
        title: string;
        description: string;
        technologies: string[];
        link?: string | [string, ...string[]];
    }

    const projects: Project[] = [
        {
            title: "ORBIT - Find your perfect duo in any games you play",
            description:
                "A social media platform for gamers, similar to OmeTV which finds you a gamer to play with similar to your preferences.",
            technologies: ["React", "Vite", "TypeScript", "Tailwind", "Firebase", "Reponsive"],
            link:"https://orbitbeta.vercel.app"
        },
        {
            title: "DHVSTUDY - An online chatroom for students",    
            description:
                "A web project that allows students to create a chatroom and have a live chat with their classmates.",
            technologies: ["React", "JavaScript", "MongoDB"],
            link:"https://dhvstudy.vercel.app/"
        },
        {
            title: "UA Vehicle - The parking information for the University of the Assumption",
            description:
                "A three type system project that allows users to register, identify, search, and update their vehicle information.",
            technologies: ["NextJS", "JavaScript", "Firebase"],
            link:"https://uavehicle.vercel.app/"
        },
        {
            title: "DustFreeHub - Find local cleaning services near you",
            description: "A web project that allows users to find local cleaning services.",
            technologies: ["React", "JavaScript", "Firebase"],
            link:"https://dust-free-hub-bwtd.vercel.app/"
        },
        {
            title: "Disaster Page - Sta Ana Barangay Disaster Management",
            description: "A two system project for the Sta Ana to update the residents about the ongoing disasters, reports, and updates.",
            technologies: ["React", "JavaScript", "Firebase"],
            link:"https://disasterpage.vercel.app/"
        }

    ];

    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
                {/* Header */}
                <Header />

                {/* Project Displays 1 */}
                {projects.map((project, index) => (
                    <div className="snap-start w-full h-screen flex justify-center items-center overflow-x-hidden" key={index}>
                        <div className="w-[80%] h-[75%] bg-slate-800 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                                <p className="text-lg text-gray-300 mt-4">{project.description}</p>

                                {/* Techonology Container */}
                                <div className="flex flex-wrap justify-center items-center gap-2 mt-4 gap-4">
                                    {project.technologies.map((tech, index) => (
                                        <div className="rounded-lg bg-gray-900 px-6 py-1 text-white rounded-lg" key={index}>{tech}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};