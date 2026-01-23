import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ModuleItem } from '@/components/ModuleItem'
import Image from 'next/image'
import { Metadata } from 'next'

// Dummy Data
const programData: Record<string, {
    title: string;
    subtitle: string;
    link:string;
    description: string;
    duration: string;
    button:string;
    format: string;
    price: string;
    modules: { title: string; content: string }[];
    features: string[];
    mentors: { name: string; role: string; company: string,image:string }[];
}> = {

    'skillseva-mern-stack-cohort': {
        title: 'MERN Stack Cohort',
        subtitle: 'Master Full Stack Development',
        description: 'A comprehensive program covering Web Fundamentals, JavaScript Core, Git, and the complete MERN stack to build production-ready applications.',
        duration: '12 Weeks',
        link:"#",
        button:"coming soon",
        format: 'Live',
        price: '₹5310',
        modules: [
         {
  title: 'Week 1: WEB & JAVASCRIPT FOUNDATION',
  content: `- How the web works (Browser, Server, HTTP)
- HTML basics and semantic structure
- CSS fundamentals and styling
- JavaScript basics (variables, data types)
- Git and GitHub fundamentals
- Version control concepts
- JavaScript functions
- Arrays and objects
- Loops
- map / filter / reduce
`
},
{
  title: 'Week 2: ADVANCED JAVASCRIPT',
  content: `- Scope and closures
- Currying and higher-order functions
- Call, Apply, Bind
- Promises
- DOM manipulation
- Events and event handling
- JavaScript Event Loop
- async / await
- ES6 modules
`
},
{
  title: 'Week 3: REACT FUNDAMENTALS',
  content: `- Why React
- JSX syntax
- React Fiber (concept)
- Components and component structure
- Props and state
- State lifting
- Introduction to React Hooks
- useState
- useEffect
- useReducer
- useRef
- useMemo
- useCallback
- Component lifecycle (conceptual)
`
},
{
  title: 'Week 4: FORMS, ROUTING & UI',
  content: `- Controlled components
- Form handling concepts
- Formik basics
- Validation fundamentals
- Yup validation
- React Router
- Protected routes
- State flow in multi-page apps
- CSS Modules
- Tailwind CSS
- Responsive design principles
`
},
{
  title: 'Week 5: ADVANCED REACT & FRONTEND ARCHITECTURE',
  content: `- Context API
- State management concepts (Context / Zustand)
- Custom hooks
- Performance optimization basics
- React best practices
- Frontend project structure
- Scalable UI architecture
`
},
{
  title: 'Week 6: NODE.JS & EXPRESS BASICS',
  content: `- Introduction to Node.js
- Node runtime and use cases
- NPM fundamentals
- Project setup
- Express.js introduction
- Routing in Express
- Middleware concepts
- Request and Response lifecycle
`
},
{
  title: 'Week 7: AUTHENTICATION & BACKEND ARCHITECTURE',
  content: `- Authentication fundamentals
- JWT authentication
- Password hashing with bcrypt
- Authentication flow
- Role-based access control
- MVC architecture
- Service pattern
- Folder structure best practices
- Centralized error handling
`
},
{
  title: 'Week 8: API VALIDATION & BACKEND PROJECT',
  content: `- Input validation strategies
- API best practices
- Production-ready API structure
- Auth + CRUD backend architecture
- Admin vs User roles (conceptual)
`
},
{
  title: 'Week 9: DATABASES & ORM',
  content: `- MongoDB fundamentals
- NoSQL concepts
- PostgreSQL fundamentals
- Relational database concepts
- ORM concepts
- Prisma overview
- Database integration with backend
`
},
{
  title: 'Week 10: FULL STACK INTEGRATION & DEVOPS',
  content: `- Frontend and Backend integration
- API consumption in frontend
- Token handling
- Error and loading state management
- Docker fundamentals
- Dockerizing full-stack applications
- CI/CD concepts
`
},
{
  title: 'Week 11: CAPSTONE PROJECT – LMS',
  content: `- Full-stack application development
- Monorepo architecture
- PostgreSQL integration
- Authentication system
- Scalable application architecture
`
},
{
  title: 'Week 12: COHORT WRAP-UP & INTERVIEW PREPARATION',
  content: `
- Course recap
- Interview preparation strategies
- Resume and portfolio tips
- Real-world project discussion
- Career guidance
`
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
            { name: 'Aditya Raj', role: 'Full Stack Developer', company: 'TechStart',image: '/mentors/aditya.png' },
            { name: 'Sneha Gupta', role: 'Senior Engineer', company: 'Innovate',image: '/mentors/sneha.png' },
        ]
    },
    'skillseva-ui-ux-design-cohort': {
        title: 'UI/UX Design Cohort',
        subtitle: 'Master Design Thinking & User Experience',
        description: 'A comprehensive 12-week program covering everything from design basics, user research, and wireframing to advanced prototyping and career preparation.',
        duration: '12 Weeks',
        button:"Apply for Cohort",
        format: 'Live',
        link:'https://rzp.io/rzp/EgXNjbJ',
        price: '₹5310',
        modules: [
            {
                title: 'Week 1: DESIGN & UX BASICS',
                content: `
- Course Overview and expectations
- What is design
- Design vs art
- Design in everyday life
- UX, UI and product design overview
- UX vs UI roles
- UX mindset
- Design thinking process
- Real-life UX examples`
            },
            {
                title: 'Week 2: UX FOUNDATION & THINKING',
                content: `
- User-centered design
- Problem-first approach
- Empathy in design
- Introduction to user research
- Research vs assumptions
- Qualitative vs quantitative research
- Mini research activity`
            },
            {
                title: 'Week 3: USER RESEARCH & EMPATHY',
                content: `
- Persona creation exercise
- Empathy mapping
- User personas
- 5 Whys technique
- Problem statement framing
- Research insights`
            },
            {
                title: 'Week 4: JOURNEYS & ANALYSIS',
                content: `
- User journey mapping
- Touchpoints
- Emotions and pain points
- Competitive analysis
- Direct vs indirect competitors
- UX comparison matrix
- Opportunity identification`
            },
            {
                title: 'Week 5: UX LAWS & USABILITY',
                content: `
- UX laws
- Hick’s Law
- Fitts’s Law
- Jakob’s Law
- Miller’s Law
- Gestalt’s laws
- 3-Click Rule
- Heuristic evaluation deep dive`
            },
            {
                title: 'Week 6: Usability & Information Structure',
                content: `
- Affordance, Signifiers & Feedback
- Usability principles with real-world examples
- Common usability mistakes
- Information Architecture (IA)
- Sitemaps & User flows
- Usability issues identification
- Mini UX audit exercise`
            },
            {
                title: 'Week 7: Wireframing & Layout Thinking',
                content: `
- Wireframing basics
- Low vs High fidelity
- Layout thinking
- Card sorting (intro + use cases)
- Wireframe practice (guided)
- Critique & iteration`
            },
            {
                title: 'Week 8: UI Foundations & Visual Design',
                content: `
- Visual design fundamentals
- Visual hierarchy
- Spacing & alignment
- Typography
- Readability
- UI consistency principles`
            },
            {
                title: 'Week 9: Colour, Grid & Accessibility Basics',
                content: `
- Colour theory
- Colour psychology
- Accessibility contrast
- Grid systems
- 8pt grid
- Layout practice with grid`
            },
            {
                title: 'Week 10: Responsive, Platforms & Accessibility',
                content: `
- Responsive vs Adaptive design
- Mobile-first approach
- Web vs App UX
- Accessibility fundamentals
- Disabilities overview
- WCAG basics
- Accessibility in UI (practical examples)`
            },
            {
                title: 'Week 11: Emotional UX, Systems & Product Thinking',
                content: `
- Emotional design
- Human emotions in UX
- Hooked Model
- Maslow’s hierarchy of need
- Design systems (basics)
- Components & consistency
- Product thinking
- User value vs Business value`
            },
            {
                title: 'Week 12: Prototyping, Testing & Career Prep',
                content: `
- Prototyping
- Clickable prototypes
- Micro-interactions
- Usability testing basics
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
            { name: 'Garima Mehra', role: 'Mentor', company: 'SkillSeva',image: '/mentors/garima.jpg' },
            { name: 'Shaily Goel', role: 'UX Lead', company: 'Ameriprise',image: '/mentors/shaily.jpg' },
        ]
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const program = programData[params.slug]
    if (!program) {
        return {
            title: 'Cohort Not Found',
        }
    }
    return {
        title: program.title,
        description: program.description,
        openGraph: {
            title: program.title,
            description: program.description,
            type: 'website',
        }
    }
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
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
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

                        <Link href={program.link} className="block w-full py-4 rounded-full bg-brand-accent text-white font-semibold text-center hover:bg-brand-accent-highlight transition-all shadow-brand hover:shadow-lg hover:-translate-y-0.5">
                          {program.button}
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
                        <a href="https://calendly.com/skillsevaofficial/30min" className="text-sm font-semibold text-brand-accent hover:underline">
                            Schedule a Call →
                        </a>
                    </div>
                </div>

            </div>
        </main>
    )
}
