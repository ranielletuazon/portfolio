import './css/Home.css';
import React, { useState, useEffect, useRef } from 'react';

// Imported Components
import heroBg from '../assets/herobackground.jpg';
import Header from './components/Header';
import { ArrowDownIcon } from 'lucide-react';

// Imported Pages
import MockedBackend from './components/home_components/mockedBackend';
import MockedHome from './components/home_components/mockedHome';

export default function Home() {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const scrollToSection = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // only run once
            }
          },
          { threshold: 0.4 }
        );
      
        if (textRef.current) {
          observer.observe(textRef.current);
        }
      
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
                            className={`mix-blend-difference text-white z-10 w-full h-full flex flex-col gap-10 justify-center items-center text-5xl transition-all duration-[2500ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

                {/* Section 2 - Mini frontend website design*/}
                <div
                    ref={section2Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <MockedHome />
                </div>

                {/* Section 3 - Mini Backend website design*/}
                <div
                    ref={section3Ref}
                    className="snap-start h-screen flex justify-center items-center overflow-x-hidden"
                >
                    <MockedBackend />
                </div>

            </div>
        </>
    );
}