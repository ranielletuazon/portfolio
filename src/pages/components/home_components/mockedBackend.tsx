import { ChartLine, MessageCircleMore, Fingerprint, Server, Lightbulb, Database } from "lucide-react";

export default function MockedBackend() {
    
    interface Card {
        icon: React.ElementType;
        gradientFrom: string;
        gradientTo: string;
        bgColor: string;
        title: string;
        description: string;
    }

    const cards: Card[] = [
        {
            icon: ChartLine,
            gradientFrom: "from-red-500",
            gradientTo: "to-red-700",
            bgColor: "bg-red-500",
            title: "Monitoring & Performance Optimization",
            description: "Setting up <strong>logging</strong>, <strong>monitoring</strong>, and improving system <strong>performance</strong> through custom solutions and detailed <strong>data analysis</strong>."
        },
        {
            icon: MessageCircleMore,
            gradientFrom: "from-green-500",
            gradientTo: "to-green-700",
            bgColor: "bg-green-500",
            title: "Real-Time & Scalable Systems",
            description: "Creating <strong>chat systems</strong>, enabling <strong>live updates</strong>, and implementing <strong>message queues</strong> for dynamic, <strong>scalable communication</strong>."
        },
        {
            icon: Fingerprint,
            gradientFrom: "from-blue-500",
            gradientTo: "to-blue-700",
            bgColor: "bg-blue-500",
            title: "Authentication & Security",
            description: "Building secure <strong>login systems</strong> using <strong>token-based authentication</strong>, <strong>multi-factor verification</strong>, and managing <strong>role-based access</strong> to protect sensitive data."
        },
        {
            icon: Server,
            gradientFrom: "from-yellow-500",
            gradientTo: "to-yellow-700",
            bgColor: "bg-yellow-500",
            title: "Server & Deployment Management",
            description: "Handling <strong>cloud server</strong> operations, configuring <strong>deployment environments</strong>, and streamlining <strong>application deployment</strong> processes."
        },
        {
            icon: Lightbulb,
            gradientFrom: "from-purple-500",
            gradientTo: "to-purple-700",
            bgColor: "bg-purple-500",
            title: "API Development & Integration",
            description: "Designing and implementing <strong>RESTful</strong> and <strong>GraphQL APIs</strong>, while seamlessly connecting with <strong>external services</strong> to expand functionality."
        },
        {
            icon: Database,
            gradientFrom: "from-orange-500",
            gradientTo: "to-orange-700",
            bgColor: "bg-orange-500",
            title: "Database Design & Management",
            description: "Proficient in managing both <strong>relational</strong> and <strong>NoSQL databases</strong>, focusing on <strong>clean data structures</strong>, <strong>efficient queries</strong>, and <strong>scalable architecture</strong>."
        }
    ];

    return (
        <>
            {/* Container - dark theme optimized */}
            <div className="relative flex flex-col w-[80%] bg-gray-900 h-[75%] p-2 overflow-auto rounded-lg">
                {/* Enhanced Header */}
                <div className="flex flex-col justify-center items-center p-4">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-100 mb-2">Backend Specialist</h1>
                    <p className="md:text-md text-sm font-medium text-gray-300 text-center max-w-2xl">
                        Expert in a wide range of <strong>backend systems</strong>. From <strong>server management</strong> and <strong>API integrations</strong> to <strong>database architecture</strong> and <strong>performance optimization</strong>.
                    </p>
                </div>

                {/* Improved Card Grid */}
                <div className="w-full h-auto flex md:flex-row md:flex-wrap md:gap-4 p-4 md:justify-center items-center justify-start flex-col gap-4">
                    {cards.map((card, index) => (
                        <div key={index} className="md:w-96 md:h-64 w-full h-auto flex flex-col rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            {/* Card Header */}
                            <div className={`flex items-center w-full rounded-t-lg p-4 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo}`}>
                                <card.icon className={`size-10 ${card.bgColor} rounded-lg md:p-2 p-2 text-white shadow-md`} />
                                <h2 className="md:text-lg text-sm font-bold text-white ml-3">{card.title}</h2>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col border-gray-700 border-b border-l border-r h-full p-5 rounded-b-lg shadow-md bg-gray-800">
                                <p className="text-justify text-gray-200 leading-relaxed md:text-base text-sm" dangerouslySetInnerHTML={{ __html: card.description }}>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}