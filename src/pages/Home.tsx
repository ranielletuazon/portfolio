import './css/Home.css';
import React, { useState, useEffect, useRef } from 'react';

// Imported Components
import heroBg from '../assets/herobackground.jpg';
import Header from './components/Header';
import { ArrowDownIcon } from 'lucide-react';

// Imported Pages
import MockedBackend from './components/home_components/mockedBackend';
import MockedHome from './components/home_components/mockedHome';
import SkillsDisplay from './components/home_components/skillsDisplay';

export default function Home() {
    const textRef = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const [visibleSections, setVisibleSections] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false
    });

    const scrollToSection = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Use a single IntersectionObserver for all sections
    useEffect(() => {
        const options = { 
            threshold: 0, // Lower threshold for quicker activation
            rootMargin: '0px 0px -10% 0px' // Trigger slightly before element is fully visible
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Identify which section this is
                if (entry.target === textRef.current && entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, section1: true }));
                } else if (entry.target === section2Ref.current && entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, section2: true }));
                } else if (entry.target === section3Ref.current && entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, section3: true }));
                } else if (entry.target === section4Ref.current && entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, section4: true }));
                }
            });
        }, options);

        // Observe all sections
        if (textRef.current) observer.observe(textRef.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        if (section4Ref.current) observer.observe(section4Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
                {/* Header */}
                <Header />

                {/* Section 1 */}
                <div className="snap-start w-full h-screen flex justify-center items-center overflow-x-hidden">
                    <div className="w-1/2 h-[30rem] text-center flex justify-center items-center text-2xl font-bold">
                        <div
                            ref={textRef}
                            className={`mix-blend-difference text-white z-10 w-full h-full flex flex-col gap-10 justify-center items-center text-5xl transition-all duration-1000 ease-out ${
                                visibleSections.section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            EVERYTHING YOU NEED TO KNOW ABOUT ME
                            <div
                                onClick={scrollToSection}
                                className="text-sm border border-white px-4 py-2 rounded-[16px] animate-bounce opacity-50 cursor-pointer flex flex-row items-center justify-center"
                            >
                                Scroll Down <ArrowDownIcon className="inline-block ml-2" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Only render MockedHome when section is visible */}
                <div
                    ref={section2Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <div className={`w-full h-full transition-opacity duration-500 flex justify-center items-center ${visibleSections.section2 ? 'opacity-100' : 'opacity-0'}`}>
                        {visibleSections.section2 && <MockedHome immediateStart={true} />}
                    </div>
                </div>

                {/* Section 3 - Mini Backend website design*/}
                <div
                    ref={section3Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <div className={`w-full h-full transition-opacity duration-500 flex justify-center items-center ${visibleSections.section3 ? 'opacity-100' : 'opacity-0'}`}>
                        <MockedBackend />
                    </div>
                </div>

                {/* Section 4 - Skills display */}
                <div
                    ref={section4Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <div className={`w-full h-full transition-opacity duration-500 flex justify-center items-center ${visibleSections.section4 ? 'opacity-100' : 'opacity-0'}`}>
                        <SkillsDisplay />
                    </div>
                </div>
            </div>
        </>
    );
}