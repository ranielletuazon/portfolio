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
    const [isSection1Visible, setIsSection1Visible] = useState(false);
    const [isSection2Visible, setIsSection2Visible] = useState(false);


    const scrollToSection = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // For Section 1 animation
    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSection1Visible(true);
                    observer1.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (textRef.current) {
            observer1.observe(textRef.current);
        }

        return () => observer1.disconnect();
    }, []);

    // For Section 2 lazy load
    useEffect(() => {
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSection2Visible(true);
                    observer2.disconnect(); // Only load once
                }
            },
            { threshold: 0.4 }
        );

        if (section2Ref.current) {
            observer2.observe(section2Ref.current);
        }

        return () => observer2.disconnect();
    }, []);



    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" style={{ scrollBehavior: 'smooth' }}>
                {/* Header */}
                <Header />

                {/* Section 1 */}
                <div className="snap-start w-full h-screen flex justify-center items-center overflow-x-hidden">
                    <div className="w-1/2 h-[30rem] text-center flex justify-center items-center text-2xl font-bold">
                        <div
                            ref={textRef}
                            className={`mix-blend-difference text-white z-10 w-full h-full flex flex-col gap-10 justify-center items-center text-5xl transition-all duration-[2500ms] ease-out ${isSection1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

                {/* Section 2 */}
                <div
                    ref={section2Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    {isSection2Visible && <MockedHome />}
                </div>


                {/* Section 3 - Mini Backend website design*/}
                <div
                    ref={section3Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <MockedBackend />
                </div>

                {/* Section 3 - Mini Backend website design*/}
                <div
                    ref={section4Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <SkillsDisplay />
                </div>

            </div>
        </>
    );
}