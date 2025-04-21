import React, { useState } from "react";
import { Menu, Code, Monitor, Layers, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from 'sonner';

export default function ProfessionalHome() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNavClick = () => {
        toast("Feature coming soon");
    };

    const handleSignUp = () => {
        setIsLoading(true);
        setTimeout(() => {
            toast.success("Welcome aboard!");
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="relative flex flex-col w-[80%] bg-[var(--secondary)] h-[75%] p-2 overflow-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            {/* Header / Navigation */}
            <header className="sticky top-0 z-100 backdrop-blur-md bg-white/70 border-b border-slate-100 px-6 py-4">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center space-x-3">
                        <Code className="h-6 w-6 text-indigo-600" />
                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">DevPortfolio</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Button onClick={handleNavClick} variant="ghost" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium">Let's</Button>
                        <Button onClick={handleNavClick} variant="ghost" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium">All</Button>
                        <Button onClick={handleNavClick} variant="ghost" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium">Work</Button>
                        <Button onClick={handleNavClick} variant="ghost" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium">Together</Button>
                    </nav>

                    <Button 
                        onClick={handleSignUp} 
                        disabled={isLoading} 
                        className="hidden md:flex bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-indigo-200 hover:shadow-lg"
                    >
                        {isLoading ? "Processing..." : "Get in Touch"}
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button 
                        variant="ghost" 
                        className="md:hidden p-1" 
                        onClick={() => setIsMenuOpen(true)}
                        disabled={true}
                    >
                        <Menu className="h-6 w-6 text-slate-700" />
                    </Button>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                    <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-white shadow-lg flex flex-col p-6 animate-in slide-in-from-right">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center space-x-2">
                                <Code className="h-5 w-5 text-indigo-600" />
                                <span className="font-bold text-lg">Menu</span>
                            </div>
                            <Button variant="ghost" className="p-1" onClick={() => setIsMenuOpen(false)}>
                                <span className="sr-only">Close</span>
                                <span className="text-2xl">×</span>
                            </Button>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <Button onClick={handleNavClick} variant="ghost" className="justify-start text-lg font-medium">Let's</Button>
                            <Button onClick={handleNavClick} variant="ghost" className="justify-start text-lg font-medium">All</Button>
                            <Button onClick={handleNavClick} variant="ghost" className="justify-start text-lg font-medium">Work</Button>
                            <Button onClick={handleNavClick} variant="ghost" className="justify-start text-lg font-medium">Together</Button>
                            <Button onClick={handleSignUp} disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                                {isLoading ? "Processing..." : "Get in Touch"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="w-full px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Frontend <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Developer</span> & UI Specialist
                        </h2>
                        <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                            Crafting pixel-perfect, responsive, and accessible web experiences with modern frontend technologies. Over a decade of transforming complex requirements into elegant solutions.
                        </p>
                    </div>
                    
                    {/* Decorative UI Display */}
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <div className="h-7 w-32 bg-indigo-100 rounded-md mb-5"></div>
                                <div className="h-4 w-full bg-slate-200 rounded-md mb-3"></div>
                                <div className="h-4 w-5/6 bg-slate-200 rounded-md mb-3"></div>
                                <div className="h-4 w-4/6 bg-slate-200 rounded-md mb-6"></div>
                                <div className="flex space-x-3">
                                    <div className="h-9 w-24 bg-indigo-600 rounded-md"></div>
                                    <div className="h-9 w-24 bg-slate-200 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-8 -left-8 h-24 w-24 bg-indigo-200 rounded-2xl z-0 opacity-80"></div>
                        <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-blue-600 rounded-2xl z-0 opacity-90"></div>
                    </div>
                </div>
            </section>

            {/* Services/Skills Section */}
            <section className="w-full px-6 py-16 bg-white/70 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-sm uppercase font-bold tracking-wider text-indigo-600 mb-3">Services & Expertise</h3>
                        <h2 className="text-3xl font-bold text-slate-800">How I Level Up Projects</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-indigo-100 transition-colors">
                                <Monitor className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-800">Responsive Design</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Creating seamless experiences across all devices with clean, maintainable code and performance-optimized solutions.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-indigo-100 transition-colors">
                                <Layers className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-800">Component Architecture</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Building modular, reusable components that enhance collaboration, maintainability and scalability for growing projects.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-indigo-100 transition-colors">
                                <Star className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-800">User-Centric Development</h3>
                            <p className="text-slate-600 leading-relaxed">
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