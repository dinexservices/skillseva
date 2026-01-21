'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'

// Dummy Data
const programData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    format: string;
    price: string;
    modules: { title: string; content: string }[];
    features: string[];
    mentors: { name: string; role: string; company: string }[];
}> = {
   
    'skillseva-mern-stack-cohort': {
        title: 'MERN Stack Cohort',
        subtitle: 'Master Full Stack Development',
        description: 'A comprehensive program covering Web Fundamentals, JavaScript Core, Git, and the complete MERN stack to build production-ready applications.',
        duration: '12 Weeks',
        format: 'Live',
        price: '₹4,500 + 18% GST',
        modules: [
            {
                title: 'Module 1: WEB & JAVASCRIPT FOUNDATION',
                content: `This week, we move from Using the web to Understanding how the web works. Mentor tell: "Before writing code, you must understand where your code lives."
                
                How the Web Works: When you open a website, three things talk to each other: Browser (Where users interact), Server (Where logic lives), and HTTP (How they communicate). Frontend and backend are just two sides of the same conversation.
                
                Browser vs Server: Browser runs HTML, CSS, JavaScript and handles UI. Server stores data, processes requests, and sends responses. Frontend asks. Backend answers. Mentor tell: "If you don’t understand this flow, full-stack will always feel confusing."
                
                HTML Basics (Semantic Tags): HTML gives structure to the web (header, nav, section, footer). Good HTML is readable even without CSS.
                
                Intro to CSS: CSS controls Layout, Colors, Spacing, Responsiveness. HTML is the skeleton. CSS is the skin. Mentor tell: "Don’t rush animations. First master layout and spacing."
                
                JavaScript Basics: JavaScript adds logic (Variables, Data types, Basic operations). JavaScript makes the page think.
                
                Day 1 Practical: Mini Project - Create basic portfolio structure, Apply CSS styling, Use JS variables.`
            },
            {
                title: 'Module 2: JAVASCRIPT CORE + GIT',
                content: `Mentor tell: "JavaScript is not hard. It’s misunderstood."
                
                Functions: Reusable blocks of logic. Reduce repetition, Improve readability, Build real applications. If you understand functions, you understand programming.
                
                Arrays & Objects: List of values and Key–value data. Real-world data always lives in arrays and objects.
                
                Loops: Repeat tasks, Process data, Automate logic. Computers are fast because they repeat well.
                
                map / filter / reduce: Modern JavaScript tools to Transform data, Filter results, Compute values. These are used daily in real projects.
                
                Git & GitHub Basics: Why Git? Track changes, Collaborate safely, Roll back mistakes. You’ll learn: Git init, Commit, Push to GitHub. Code without Git is not professional code.
                
                Day 2 Practical: Console-based JS practice, Push code to GitHub.`
            }
        ],
        features: [
            'Live Interactive Sessions',
            'Real-world Projects',
            'Code Reviews',
            'Git & GitHub Mastery',
            'Certificate of Completion'
        ],
        mentors: [
            { name: 'Aditya Raj', role: 'Full Stack Developer', company: 'TechStart' },
            { name: 'Sneha Gupta', role: 'Senior Engineer', company: 'Innovate' },
        ]
    },
    'skillseva-ui-ux-design-cohort': {
        title: 'UI/UX Design Cohort',
        subtitle: 'Master Design Thinking & User Experience',
        description: 'A comprehensive 12-week program covering everything from design basics, user research, and wireframing to advanced prototyping and career preparation.',
        duration: '12 Weeks',
        format: 'Live',
        price: '₹4,500 + 18% GST',
        modules: [
            {
                title: 'Week 1: DESIGN & UX BASICS',
                content: `Saturday:
- Course Overview and expectations
- What is design
- Design vs art
- Design in everyday life
- UX, UI and product design overview

Sunday:
- UX vs UI roles
- UX mindset
- Design thinking process
- Real-life UX examples`
            },
            {
                title: 'Week 2: UX FOUNDATION & THINKING',
                content: `Saturday:
- User-centered design
- Problem-first approach
- Empathy in design
- Introduction to user research

Sunday:
- Research vs assumptions
- Qualitative vs quantitative research
- Mini research activity`
            },
            {
                title: 'Week 3: USER RESEARCH & EMPATHY',
                content: `Saturday:
- Persona creation exercise
- Empathy mapping
- User personas

Sunday:
- 5 Whys technique
- Problem statement framing
- Research insights`
            },
            {
                title: 'Week 4: JOURNEYS & ANALYSIS',
                content: `Saturday:
- User journey mapping
- Touchpoints
- Emotions and pain points

Sunday:
- Competitive analysis
- Direct vs indirect competitors
- UX comparison matrix
- Opportunity identification`
            },
            {
                title: 'Week 5: UX LAWS & USABILITY',
                content: `Saturday:
- UX laws
- Hick’s Law
- Fitts’s Law
- Jakob’s Law

Sunday:
- Miller’s Law
- Gestalt’s laws
- 3-Click Rule
- Heuristic evaluation deep dive`
            },
            {
                title: 'Week 6: Usability & Information Structure',
                content: `Saturday:
- Affordance, Signifiers & Feedback
- Usability principles with real-world examples
- Common usability mistakes

Sunday:
- Information Architecture (IA)
- Sitemaps & User flows
- Usability issues identification
- Mini UX audit exercise`
            },
            {
                title: 'Week 7: Wireframing & Layout Thinking',
                content: `Saturday:
- Wireframing basics
- Low vs High fidelity
- Layout thinking

Sunday:
- Card sorting (intro + use cases)
- Wireframe practice (guided)
- Critique & iteration`
            },
            {
                title: 'Week 8: UI Foundations & Visual Design',
                content: `Saturday:
- Visual design fundamentals
- Visual hierarchy
- Spacing & alignment

Sunday:
- Typography
- Readability
- UI consistency principles`
            },
            {
                title: 'Week 9: Colour, Grid & Accessibility Basics',
                content: `Saturday:
- Colour theory
- Colour psychology
- Accessibility contrast

Sunday:
- Grid systems
- 8pt grid
- Layout practice with grid`
            },
            {
                title: 'Week 10: Responsive, Platforms & Accessibility',
                content: `Saturday:
- Responsive vs Adaptive design
- Mobile-first approach
- Web vs App UX

Sunday:
- Accessibility fundamentals
- Disabilities overview
- WCAG basics
- Accessibility in UI (practical examples)`
            },
            {
                title: 'Week 11: Emotional UX, Systems & Product Thinking',
                content: `Saturday:
- Emotional design
- Human emotions in UX
- Hooked Model
- Maslow’s hierarchy of needs

Sunday:
- Design systems (basics)
- Components & consistency
- Product thinking
- User value vs Business value`
            },
            {
                title: 'Week 12: Prototyping, Testing & Career Prep',
                content: `Saturday:
- Prototyping
- Clickable prototypes
- Micro-interactions
- Usability testing basics

Sunday:
- Feedback analysis & iteration
- UX case study structure
- Storytelling in case studies
- Resume + Portfolio tips
- Interview & design challenge guidance`
            }
        ],
        features: [
            'Live Interactive Sessions',
            'Portfolio Building',
            'Design Tools Mastery (Figma)',
            'Real-world Case Studies',
            'Certificate of Completion'
        ],
        mentors: [
            { name: 'Riya Patel', role: 'Senior Product Designer', company: 'Swiggy' },
            { name: 'Amit Verma', role: 'UX Lead', company: 'Microsoft' },
        ]
    }
}

const ModuleItem = ({ module }: { module: { title: string; content: string } }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-black/10 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-brand-accent/30 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors gap-4 cursor-pointer"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-brand-accent">
                    {module.title}
                </h3>
                <span className={`shrink-0 transform transition-transform duration-300 text-brand-accent/80 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                        <p className="text-text-secondary leading-relaxed text-[0.95rem] whitespace-pre-line">
                            {module.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CohortDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const program = programData[slug]

    if (!program) {
        return notFound()
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-12 items-start">

                {/* Left Column: Content */}
                <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-bold uppercase tracking-wider">
                            {program.duration}
                            {program.format.includes('Live') && (
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                </span>

                            )}  {program.format}
                        </span>
                        <h1 className="text-[clamp(2.5rem,4vw+1rem,3.5rem)] leading-[1.1] font-medium text-text-primary">
                            {program.title}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            {program.subtitle}
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {program.description}
                        </p>
                    </div>

                    {/* Curriculum */}
                    <div className="rounded-3xl p-0 bg-transparent">
                        <h2 className="text-2xl font-semibold mb-8">Program Curriculum</h2>
                        <div className="space-y-4">
                            {program.modules.map((module, idx) => (
                                <ModuleItem key={idx} module={module} />
                            ))}
                        </div>
                    </div>

                    {/* Mentors */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-8">Meet Your Mentors</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {program.mentors.map((mentor, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
                                    <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden shrink-0">
                                        {/* Placeholder for now */}
                                        <div className="w-full h-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xl">
                                            {mentor.name[0]}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary">{mentor.name}</h4>
                                        <p className="text-sm text-text-secondary">{mentor.role}</p>
                                        <p className="text-xs text-brand-accent font-medium mt-0.5">{mentor.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:sticky lg:top-32 space-y-6">
                    <div className="p-8 rounded-3xl bg-white border border-black/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-accent to-brand-accent-highlight" />

                        <div className="mb-8">
                            <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Total Program Fee</span>
                            <div className="text-4xl font-bold text-text-primary mt-2">
                                {program.price}
                                <span className="text-base font-normal text-text-muted ml-2">/ student</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {program.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-brand-accent text-lg mt-0.5">✓</span>
                                    <span className="text-text-secondary">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/events/register?title=Cohort%20Application" className="block w-full py-4 rounded-full bg-brand-accent text-white font-semibold text-center hover:bg-brand-accent-highlight transition-all shadow-brand hover:shadow-lg hover:-translate-y-0.5">
                            Apply for Cohort
                        </Link>

                        <p className="text-xs text-center text-text-muted mt-4">
                            Limited seats available for the upcoming batch.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-secondary/50 border border-black/5">
                        <h4 className="font-semibold mb-2">Need help deciding?</h4>
                        <p className="text-sm text-text-secondary mb-4">
                            Book a free 15-minute consultation call with our admission team.
                        </p>
                        <button className="text-sm font-semibold text-brand-accent hover:underline">
                            Schedule a Call →
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}
