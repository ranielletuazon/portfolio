import Header from './components/Header';
import './css/Contact.css';
import React, { useState, useEffect } from 'react';

// ShadCN Components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Animation libraries
import { motion } from 'framer-motion';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [company, setCompany] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loaded state after a small delay to trigger animations
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello you submitted a form");
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return(
        <>
            <div className="w-full h-full flex flex-col overflow-x-auto">
                {/* Header */}
                <Header/>

                <div className="w-full h-full mt-20 flex flex-col">
                    {/* Header Context */}
                    <motion.div 
                        className="py-30 px-20 bg-gray-900"
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                        <h1 className="font-bold text-white md:text-4xl">Get in touch.</h1>
                        <h1 className="font-bold text-white md:text-4xl">Let's work together.</h1>
                    </motion.div>

                    {/* inquiries */}
                    <div className="w-full flex md:flex-row flex-col md:px-20 md:py-30 md:gap-30 p-20 gap-5">

                        {/* left section */}
                        <motion.div 
                            className="flex flex-col md:w-[35%] text-justify"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="font-bold text-white md:text-2xl">Inquiries:</h1>

                            <div className="text-white md:text-base">Please fill out the form on the right or email me directly at <span className="font-bold">adrianetuazon18@gmail.com</span></div>
                        </motion.div>

                        {/* right section */}
                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="flex flex-col md:w-full"
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            
                            {/* Name Div */}
                            <motion.div className="flex flex-col gap-1 mb-3" variants={itemVariants}>
                                <Label className="text-base text-white" htmlFor="name">Name</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:scale-[1.01]" 
                                  type="text" 
                                  id="name"
                                  value={name} 
                                  onChange={(e) => setName(e.target.value)}
                                />
                            </motion.div>

                            {/* Email Div */}
                            <motion.div className="flex flex-col gap-1 mb-3" variants={itemVariants}>
                                <Label className="text-base text-white" htmlFor="email">Email Address</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:scale-[1.01]" 
                                  type="email"
                                  id="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                            </motion.div>

                            {/* Subject Div */}
                            <motion.div className="flex flex-col gap-1 mb-3" variants={itemVariants}>
                                <Label className="text-base text-white" htmlFor="subject">Subject</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:scale-[1.01]" 
                                  type="text"
                                  id="subject"
                                  value={subject}
                                  onChange={(e) => setSubject(e.target.value)}
                                />
                            </motion.div>

                            {/* Company Div */}
                            <motion.div className="flex flex-col gap-1 mb-3" variants={itemVariants}>
                                <Label className="text-base text-white" htmlFor="company">Company</Label>
                                <Input 
                                  className="inputfield text-base md:w-[25rem] w-[100%] transition-all duration-300 hover:border-blue-400 focus:scale-[1.01]" 
                                  type="text"
                                  id="company"
                                  value={company}
                                  onChange={(e) => setCompany(e.target.value)}
                                />
                            </motion.div>

                            {/* Project Summary Div */}
                            <motion.div className="flex flex-col gap-1 mb-3" variants={itemVariants}>
                                <Label className="text-base text-white" htmlFor="summary">Project Summary</Label>
                                <Textarea 
                                  className="inputfield text-base md:w-[25rem] w-[100%] min-h-[8rem] transition-all duration-300 hover:border-blue-400 focus:scale-[1.01]" 
                                  id="summary"
                                  value={summary}
                                  onChange={(e) => setSummary(e.target.value)}
                                />
                            </motion.div>

                            {/* button */}
                            <motion.div 
                                className="flex justify-end items-center md:w-[25rem] w-[100%]"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        type="submit" 
                                        className="text-base bg-slate-900 hover:bg-slate-700 transition-colors duration-300"
                                    >
                                        Send
                                    </Button>
                                </motion.div>
                            </motion.div>

                        </motion.form>
                    </div>      
                </div>
            </div>
        </>
    );
};