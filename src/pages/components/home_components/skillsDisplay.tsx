import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Info, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
    name: string;
    firstLearned: string;
    rating: number;
    summary: string;
}

interface SkillCategory {
    title: string;
    list: Skill[];
}

export default function SkillsDisplay() {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [isMobileView, setIsMobileView] = useState(false);
    const [showMobileDetails, setShowMobileDetails] = useState(false);

    const skills: SkillCategory[] = [
        {
            title: "Languages",
            list: [
                { name: "JavaScript", firstLearned: "2020", rating: 5, summary: "Expert and comfortable in using JavaScript, this also applies in testings." },
                { name: "TypeScript", firstLearned: "2022", rating: 5, summary: "Expert and familiar to the newest and relevant data structure methods." },
                { name: "Java", firstLearned: "2018", rating: 4.5, summary: "Experienced, mostly used in server or backend projects." },
                { name: "Python", firstLearned: "2016", rating: 4.5, summary: "First ever language learned, graduated with Best in Programming with this language." },
                { name: "C#", firstLearned: "2019", rating: 4.5, summary: "Experienced and used for scripting applications." },
            ],
        },
        {
            title: "Frameworks",
            list: [
                { name: "React", firstLearned: "2020", rating: 5, summary: "Majorly used for building most of my web applications." },
                { name: "Next.js", firstLearned: "2021", rating: 4.5, summary: "Experienced and reliable to simple web projects applications." },
                { name: "Tailwind", firstLearned: "2020", rating: 4.5, summary: "Expert and familiar to all designs and protocols." },
                { name: "Bootstrap", firstLearned: "2020", rating: 4.5, summary: "First CSS Framework I mastered." },
                { name: "Jest", firstLearned: "2024", rating: 4.5, summary: "Expert for writing test cases in testing components and functions" },
            ],
        },
        {
            title: "Databases",
            list: [
                { name: "MongoDB", firstLearned: "2022", rating: 5, summary: "Expert and commonly used in my earlier projects for storing data." },
                { name: "MySQL", firstLearned: "2021", rating: 4.5, summary: "Expert and better option for small projects with relational database." },
                { name: "Firebase", firstLearned: "2021", rating: 5, summary: "Expert and familiar with the BaaS of Google Cloud Computing." },
            ],
        },
        {
            title: "Tools",
            list: [
                { name: "Git", firstLearned: "2022", rating: 5, summary: "Expert and skilled with Git for good commits and teamwork reliability." },
                { name: "VS Code", firstLearned: "2020", rating: 5, summary: "Familiar and comfortable with common knowledge." },
                { name: "PyCharm", firstLearned: "2016", rating: 5, summary: "Expert and ideal for my Python project development." },
                { name: "Postman", firstLearned: "2022", rating: 5, summary: "Expert and comfortable with using environmental variables for testing and API requests." },
                { name: "Figma", firstLearned: "2023", rating: 5, summary: "Experienced in using Figma for wireframing and designing my start up projects." },
            ],
        },
    ];

    // Check for mobile view on mount and window resize
    useEffect(() => {
        const checkForMobile = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        
        checkForMobile();
        window.addEventListener("resize", checkForMobile);
        
        return () => {
            window.removeEventListener("resize", checkForMobile);
        };
    }, []);

    // Handle skill selection
    const handleSkillSelect = (skill: Skill) => {
        setSelectedSkill(skill);
        if (isMobileView) {
            setShowMobileDetails(true);
        }
    };

    // Handle back button for mobile
    const handleBackToCategories = () => {
        setShowMobileDetails(false);
    };

    // Toggle category expansion
    const toggleCategory = (categoryTitle: string) => {
        setExpandedCategories(prev => {
            if (prev.includes(categoryTitle)) {
                return prev.filter(title => title !== categoryTitle);
            } else {
                return [...prev, categoryTitle];
            }
        });
    };

    // Check if a category is expanded
    const isCategoryExpanded = (categoryTitle: string) => {
        return expandedCategories.includes(categoryTitle);
    };

    // Render star ratings
    const renderRating = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-slate-400 text-slate-400" />);
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half-star" className="relative">
                    <Star className="w-4 h-4 text-slate-400" />
                    <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                        <Star className="w-4 h-4 fill-slate-400 text-slate-400" />
                    </div>
                </div>
            );
        }

        // Add empty stars to complete 5 stars
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-400" />);
        }

        return <div className="flex">{stars}</div>;
    };

    // Render skill details content
    const renderSkillDetails = () => {
        if (!selectedSkill) return null;
        
        return (
            <div className="flex-1 p-6 overflow-auto">
                {isMobileView && showMobileDetails && (
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mb-4 flex items-center text-gray-600 dark:text-gray-300"
                        onClick={handleBackToCategories}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Categories
                    </Button>
                )}
            
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {selectedSkill.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        {renderRating(selectedSkill.rating)}
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            {selectedSkill.rating}/5
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Experience card */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Experience</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Since</span>
                                <span className="font-medium text-gray-900 dark:text-white">{selectedSkill.firstLearned}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Years</span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {new Date().getFullYear() - parseInt(selectedSkill.firstLearned)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {selectedSkill.rating === 5 ? "Expert" :
                                        selectedSkill.rating >= 4 ? "Advanced" :
                                            selectedSkill.rating >= 3 ? "Intermediate" : "Beginner"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Summary card */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-white">Skill Summary</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            {selectedSkill.summary}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    // Render the categories sidebar
    const renderCategoriesSidebar = () => {
        return (
            <div className="w-full h-full md:w-64 bg-gray-50 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Skill Categories</h2>
                <div className="space-y-1">
                    {skills.map((category) => (
                        <div key={category.title} className="space-y-1">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start text-left font-medium text-sm",
                                    isCategoryExpanded(category.title)
                                        ? "bg-gray-200 dark:bg-gray-700 text-primary"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                )}
                                onClick={() => toggleCategory(category.title)}
                            >
                                {isCategoryExpanded(category.title) ? (
                                    <ChevronDown className="mr-2 h-4 w-4" />
                                ) : (
                                    <ChevronRight className="mr-2 h-4 w-4" />
                                )}
                                {category.title}
                            </Button>

                            {/* Show skills for expanded categories */}
                            {isCategoryExpanded(category.title) && (
                                <div className="pl-6 space-y-1 mt-2">
                                    {category.list.map((skill) => (
                                        <Button
                                            key={skill.name}
                                            variant="ghost"
                                            size="sm"
                                            className={cn(
                                                "w-full justify-start text-sm",
                                                selectedSkill?.name === skill.name
                                                    ? "bg-gray-100 dark:bg-gray-600 font-medium"
                                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                                            )}
                                            onClick={() => handleSkillSelect(skill)}
                                        >
                                            {skill.name}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Render empty state
    const renderEmptyState = () => {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-full p-4 mb-4">
                    <Info className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Hey There!</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Select a skill category from the sidebar and choose a specific skill to view my expertise.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden h-[75%] w-[80%] shadow-2xl">
            <div className="flex flex-col md:flex-row h-full">
                {/* For mobile: show either categories or skill details based on selection */}
                {isMobileView ? (
                    showMobileDetails && selectedSkill ? (
                        renderSkillDetails()
                    ) : (
                        renderCategoriesSidebar()
                    )
                ) : (
                    <>
                        {/* For desktop: always show the categories sidebar */}
                        {renderCategoriesSidebar()}
                        
                        {/* Main content area */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {selectedSkill ? renderSkillDetails() : renderEmptyState()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}