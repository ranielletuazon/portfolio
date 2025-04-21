import { ChartLine, MessageCircleMore, Fingerprint, Server, Lightbulb, Database } from "lucide-react";

export default function MockedBackend() {
    const cards = [
        {
            icon: ChartLine,
            gradientFrom: "from-red-400",
            gradientTo: "to-red-600",
            bgColor: "bg-red-400",
            title: "Monitoring & Performance Optimization",
            description: "Setting up logging, monitoring, and optimizing system performance with tools like Grafana, LogRocket, or custom dashboards."
        },
        {
            icon: MessageCircleMore,
            gradientFrom: "from-green-400",
            gradientTo: "to-green-600",
            bgColor: "bg-green-400",
            title: "Real-Time & Scalable Systems",
            description: "Building chat systems, live updates, and queues using technologies like WebSockets, Firebase Realtime Database, or Socket.IO."
        },
        {
            icon: Fingerprint,
            gradientFrom: "from-blue-400",
            gradientTo: "to-blue-600",
            bgColor: "bg-blue-400",
            title: "Authentication & Security",
            description: "Implementing secure login systems with JWT, OAuth, and multi-factor auth. Prioritizing data protection and role-based access."
        },
        {
            icon: Server,
            gradientFrom: "from-yellow-400",
            gradientTo: "to-yellow-600",
            bgColor: "bg-yellow-400",
            title: "Server & Deployment Management",
            description: "Managing cloud servers, setting up environments, and deploying apps using tools like Docker, Nginx, and cloud platforms (e.g., Vercel, Render, or DigitalOcean)."
        },
        {
            icon: Lightbulb,
            gradientFrom: "from-gray-400",
            gradientTo: "to-gray-600",
            bgColor: "bg-gray-400",
            title: "API Development & Integration",
            description: "Designing and building RESTful and GraphQL APIs, plus integrating third-party services for seamless app functionality."
        },
        {
            icon: Database,
            gradientFrom: "from-orange-400",
            gradientTo: "to-orange-600",
            bgColor: "bg-orange-400",
            title: "Database Design & Management",
            description: "Experienced with relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases, focusing on clean schemas and optimized queries."
        }
    ];

    return (
        <>
            {/* Container - keeping original as requested */}
            <div className="relative flex flex-col w-[80%] bg-[var(--secondary)] h-[75%] p-2 overflow-auto bg-gradient-to-br from-gray-100 to-gray-100 rounded-lg">
                {/* Enhanced Header */}
                <div className="flex flex-col justify-center items-center p-4">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-2">Backend Specialist</h1>
                    <p className="md:text-md text-sm font-medium text-gray-600 text-center max-w-2xl">
                        Expert in a wide range of backend systems. From server management and API integrations to database architecture and performance optimization.
                    </p>
                </div>

                {/* Improved Card Grid */}
                <div className="w-full h-auto flex md:flex-row md:flex-wrap md:gap-4 p-4 md:justify-center items-center justify-start flex-col gap-4">
                    {cards.map((card, index) => (
                        <div key={index} className="md:w-[400px] md:h-[250px] w-full h-auto flex flex-col rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            {/* Card Header */}
                            <div className={`flex items-center w-full rounded-t-lg p-4 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo}`}>
                                <card.icon className={`size-10 ${card.bgColor} rounded-lg md:p-2 p-2 text-white shadow-md`} />
                                <h2 className="md:text-lg text-sm font-bold text-white ml-3">{card.title}</h2>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col border-gray-300 border-b border-l border-r h-full p-5 rounded-b-lg shadow-md bg-white">
                                <p className="text-justify text-gray-700 leading-relaxed md:text-base text-sm">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}