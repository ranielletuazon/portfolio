import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <div 
                className={`fixed top-0 left-0 w-full flex justify-center items-center p-4 z-[1000] transition-all duration-300 
                ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
            >
                <div className="backdrop-blur-sm px-6 py-3 rounded-[32px] border border-[var(--secondary)] shadow-lg">
                    <div className="flex w-full flex justify-center space-x-8 items-center text-base text-[var(--secondary)]">
                        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
                        <button onClick={() => navigate('/projects')} className="hover:text-white transition-colors">Projects</button>
                    </div>            
                </div>
            </div>
        </>
    );
}