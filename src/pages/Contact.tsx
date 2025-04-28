import Header from './components/Header';
import React, { useState, useEffect } from 'react';

// ShadCN Components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [company, setCompany] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loaded state to trigger animations
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello you submitted a form");
    }

    // Tailwind classes for animations
    const headerClasses = `py-30 px-20 bg-gray-900 transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
    }`;

    const leftSectionClasses = `flex flex-col md:w-[35%] text-justify transition-all duration-500 delay-200 ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
    }`;

    // Function to generate form element classes with dynamic delay
    const getFormElementClasses = (index: number) => {
        const delay = 300 + (index * 150);
        return `flex flex-col gap-1 mb-3 transition-all duration-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;
    };

    // Inline styles for staggered delays
    const getDelayStyle = (index: number) => {
        return { transitionDelay: `${300 + index * 150}ms` };
    };

    return(
        <>
            <div className="w-full h-full flex flex-col overflow-x-auto">
                {/* Header */}
                <Header/>

                <div className="w-full h-full mt-20 flex flex-col">
                    {/* Header Context */}
                    <div className={headerClasses}>
                        <h1 className="font-bold text-white md:text-4xl">Get in touch.</h1>
                        <h1 className="font-bold text-white md:text-4xl">Let's work together.</h1>
                    </div>

                    {/* inquiries */}
                    <div className="w-full flex md:flex-row flex-col md:px-20 md:py-30 md:gap-30 p-20 gap-5">

                        {/* left section */}
                        <div className={leftSectionClasses}>
                            <h1 className="font-bold text-white md:text-2xl">Inquiries:</h1>

                            <div className="text-white md:text-base">Please fill out the form on the right or email me directly at <span className="font-bold">adrianetuazon18@gmail.com</span></div>
                        </div>

                        {/* right section */}
                        <form onSubmit={handleSubmit} className="flex flex-col md:w-full">
                            
                            {/* Name Div */}
                            <div className={getFormElementClasses(0)} style={getDelayStyle(0)}>
                                <Label className="text-base text-white" htmlFor="name">Name</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-400" 
                                  type="text" 
                                  id="name"
                                  value={name} 
                                  onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Email Div */}
                            <div className={getFormElementClasses(1)} style={getDelayStyle(1)}>
                                <Label className="text-base text-white" htmlFor="email">Email Address</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-400" 
                                  type="email"
                                  id="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Subject Div */}
                            <div className={getFormElementClasses(2)} style={getDelayStyle(2)}>
                                <Label className="text-base text-white" htmlFor="subject">Subject</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-400" 
                                  type="text"
                                  id="subject"
                                  value={subject}
                                  onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            {/* Company Div */}
                            <div className={getFormElementClasses(3)} style={getDelayStyle(3)}>
                                <Label className="text-base text-white" htmlFor="company">Company</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-400" 
                                  type="text"
                                  id="company"
                                  value={company}
                                  onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>

                            {/* Project Summary Div */}
                            <div className={getFormElementClasses(4)} style={getDelayStyle(4)}>
                                <Label className="text-base text-white" htmlFor="summary">Project Summary</Label>
                                <Textarea 
                                  className="inputfield text-base md:w-[25rem] w-[100%] min-h-[8rem] transition-all duration-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-400" 
                                  id="summary"
                                  value={summary}
                                  onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>

                            {/* button */}
                            <div className={getFormElementClasses(5)} style={getDelayStyle(5)}>
                                <div className="flex justify-end items-center md:w-[25rem] w-[100%]">
                                    <Button 
                                        type="submit" 
                                        className="text-base bg-slate-900 hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>      
                </div>
            </div>
        </>
    );
};