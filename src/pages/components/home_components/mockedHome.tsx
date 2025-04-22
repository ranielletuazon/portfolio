import React, { useState, useEffect } from "react";
import { Code, Monitor, Layers, Star, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from 'sonner';

export default function ProfessionalHome() {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    
    // Animation states
    const [showLogo, setShowLogo] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showHero, setShowHero] = useState(false);
    const [showServices, setShowServices] = useState(false);

    // Trigger animations sequentially
    useEffect(() => {
        // Start animation sequence once component mounts
        const logoTimer = setTimeout(() => setShowLogo(true), 300);
        const navTimer = setTimeout(() => setShowNav(true), 800);
        const heroTimer = setTimeout(() => setShowHero(true), 1200);
        const servicesTimer = setTimeout(() => {
            setShowServices(true);
            setIsAnimated(true);
        }, 1800);
        
        return () => {
            clearTimeout(logoTimer);
            clearTimeout(navTimer);
            clearTimeout(heroTimer);
            clearTimeout(servicesTimer);
        };
    }, []);

    const handleNavClick = () => {
        toast("Feature coming soon");
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Root container classes to apply dark mode - adding theme transition class
    const containerClasses = `relative flex flex-col w-[80%] ${
        darkMode 
            ? "bg-slate-900 from-slate-900 to-slate-800 transition-colors duration-300" 
            : "bg-[var(--secondary)] from-blue-50 to-indigo-50 transition-colors duration-300"
    } h-[75%] p-2 overflow-auto bg-gradient-to-r rounded-lg`;

    // Header classes - removed animation delays from theme transition
    const headerClasses = `sticky top-0 z-100 backdrop-blur-md rounded-lg ${
        darkMode
            ? "bg-slate-900/70 border-slate-700" 
            : "bg-white/70 border-slate-100"
    } border-b px-6 py-4 transition-all ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 fade-out-0"
    } theme-transition`;

    // Services section classes - removed animation delays from theme transition
    const servicesSectionClasses = `w-full px-6 py-16 rounded-lg ${
        darkMode
            ? "bg-slate-800/70" 
            : "bg-white/70"
    } backdrop-blur-sm transition-all duration-700 ${
        showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    } theme-transition`;

    // Card classes - separated animation delays from theme transition
    const getCardClasses = (delay) => `${
        darkMode
            ? "bg-slate-800" 
            : "bg-white"
    } rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-500 delay-${delay} group ${
        showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } theme-transition`;

    return (
        <div className={containerClasses}>
            {/* Add global theme transition style */}
            <style tsx global>{`
                .theme-transition {
                    transition-property: background-color, background-image, border-color, color, fill, stroke;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 300ms;
                }
            `}</style>

            {/* Header / Navigation */}
            <header className={headerClasses}>
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center space-x-3">
                        <Code className={`h-6 w-6 ${darkMode ? "text-indigo-400" : "text-indigo-600"} theme-transition`} />
                        <h1 className={`text-xl font-bold bg-gradient-to-r ${darkMode ? "from-indigo-400 to-blue-400" : "from-indigo-600 to-blue-600"} bg-clip-text text-transparent theme-transition`}>R. Tuazon</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Button 
                            onClick={handleNavClick} 
                            variant="ghost" 
                            className={`${darkMode ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-700" : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"} font-medium theme-transition`}
                        >
                            Let's
                        </Button>
                        <Button 
                            onClick={handleNavClick} 
                            variant="ghost" 
                            className={`${darkMode ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-700" : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"} font-medium theme-transition`}
                        >
                            All
                        </Button>
                        <Button 
                            onClick={handleNavClick} 
                            variant="ghost" 
                            className={`${darkMode ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-700" : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"} font-medium theme-transition`}
                        >
                            Work
                        </Button>
                        <Button 
                            onClick={handleNavClick} 
                            variant="ghost" 
                            className={`${darkMode ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-700" : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"} font-medium theme-transition`}
                        >
                            Together
                        </Button>
                    </nav>

                    {/* Dark Mode Toggle Button */}
                    <Button 
                        onClick={toggleDarkMode} 
                        className={`hidden md:flex items-center gap-2 ${
                            darkMode 
                                ? "bg-slate-700 hover:bg-slate-600 text-slate-200" 
                                : "bg-indigo-600 hover:bg-indigo-700 text-white"
                        } font-medium px-5 py-2 rounded-lg shadow-md hover:shadow-lg theme-transition`}
                    >
                        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        onClick={toggleDarkMode}
                        className={`md:hidden flex items-center ${darkMode
                                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                                : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            } font-medium p-2 rounded-lg shadow-md hover:shadow-lg`}
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        <span className="sr-only">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                    </Button>
                </div>
            </header>

            {/* Hero Section with animation */}
            <section className={`w-full px-6 py-16 md:py-24 transition-all duration-700 ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : ""} theme-transition`}>
                            <span className={`inline-block transition-all duration-700 delay-100 ${showHero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                Frontend 
                            </span>{" "}
                            <span className={`inline-block bg-gradient-to-r ${darkMode ? "from-indigo-400 to-blue-400" : "from-indigo-600 to-blue-600"} bg-clip-text text-transparent transition-all duration-700 delay-300 ${showHero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} theme-transition`}>
                                Developer
                            </span>{" "}
                            <span className={`inline-block transition-all duration-700 delay-500 ${showHero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                & UI/UX Specialist
                            </span>
                        </h2>
                        <p className={`${darkMode ? "text-slate-300" : "text-slate-700"} text-lg mb-8 leading-relaxed transition-all duration-700 delay-700 ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} theme-transition`}>
                            Crafting pixel-perfect, responsive, and accessible web experiences with modern frontend technologies. Over a decade of transforming complex requirements into elegant solutions.
                        </p>
                    </div>
                    
                    {/* Decorative UI Display with animation */}
                    <div className={`md:w-1/2 relative transition-all duration-700 delay-900 ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                        <div className={`relative z-10 ${darkMode ? "bg-slate-800" : "bg-white"} rounded-2xl shadow-xl p-6 ${darkMode ? "border-slate-700" : "border-slate-100"} border max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 theme-transition`}>
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className={`${darkMode ? "bg-slate-700" : "bg-slate-50"} p-5 rounded-xl ${darkMode ? "border-slate-600" : "border-slate-100"} border theme-transition`}>
                                <div className={`h-7 w-32 ${darkMode ? "bg-slate-600" : "bg-indigo-100"} rounded-md mb-5 theme-transition`}></div>
                                <div className={`h-4 w-full ${darkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md mb-3 theme-transition`}></div>
                                <div className={`h-4 w-5/6 ${darkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md mb-3 theme-transition`}></div>
                                <div className={`h-4 w-4/6 ${darkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md mb-6 theme-transition`}></div>
                                <div className="flex space-x-3">
                                    <div className={`h-9 w-24 ${darkMode ? "bg-indigo-500" : "bg-indigo-600"} rounded-md theme-transition`}></div>
                                    <div className={`h-9 w-24 ${darkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md theme-transition`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute -top-8 -left-8 h-24 w-24 ${darkMode ? "bg-indigo-900" : "bg-indigo-200"} rounded-2xl z-0 opacity-80 theme-transition`}></div>
                        <div className={`absolute -bottom-8 -right-8 h-32 w-32 ${darkMode ? "bg-blue-900" : "bg-blue-600"} rounded-2xl z-0 opacity-90 theme-transition`}></div>
                    </div>
                </div>
            </section>

            {/* Services/Skills Section with animation */}
            <section className={servicesSectionClasses}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className={`text-sm uppercase font-bold tracking-wider ${darkMode ? "text-indigo-400" : "text-indigo-600"} mb-3 transition-all duration-500 delay-100 ${showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} theme-transition`}>
                            Services & Expertise
                        </h3>
                        <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-800"} transition-all duration-500 delay-300 ${showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} theme-transition`}>
                            How I Level Up Projects
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 with animation */}
                        <div className={getCardClasses("0")}>
                            <div className={`${darkMode ? "bg-slate-700" : "bg-indigo-50"} p-3 rounded-lg inline-block mb-4 ${darkMode ? "group-hover:bg-slate-600" : "group-hover:bg-indigo-100"} theme-transition`}>
                                <Monitor className={`h-8 w-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"} theme-transition`} />
                            </div>
                            <h3 className={`font-bold text-xl mb-3 ${darkMode ? "text-white" : "text-slate-800"} theme-transition`}>Responsive Design</h3>
                            <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed theme-transition`}>
                                Creating seamless experiences across all devices with clean, maintainable code and performance-optimized solutions.
                            </p>
                        </div>
                        
                        {/* Card 2 with animation */}
                        <div className={getCardClasses("0")}>
                            <div className={`${darkMode ? "bg-slate-700" : "bg-indigo-50"} p-3 rounded-lg inline-block mb-4 ${darkMode ? "group-hover:bg-slate-600" : "group-hover:bg-indigo-100"} theme-transition`}>
                                <Layers className={`h-8 w-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"} theme-transition`} />
                            </div>
                            <h3 className={`font-bold text-xl mb-3 ${darkMode ? "text-white" : "text-slate-800"} theme-transition`}>Component Architecture</h3>
                            <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed theme-transition`}>
                                Building modular, reusable components that enhance collaboration, maintainability and scalability for growing projects.
                            </p>
                        </div>
                        
                        {/* Card 3 with animation */}
                        <div className={getCardClasses("0")}>
                            <div className={`${darkMode ? "bg-slate-700" : "bg-indigo-50"} p-3 rounded-lg inline-block mb-4 ${darkMode ? "group-hover:bg-slate-600" : "group-hover:bg-indigo-100"} theme-transition`}>
                                <Star className={`h-8 w-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"} theme-transition`} />
                            </div>
                            <h3 className={`font-bold text-xl mb-3 ${darkMode ? "text-white" : "text-slate-800"} theme-transition`}>User-Centric Development</h3>
                            <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed theme-transition`}>
                                Focusing on accessibility, speed, and intuitive design to enhance user's quality of life and overall experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Toaster position="top-center" />
        </div>
    );
}