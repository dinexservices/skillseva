'use client'

import { useState } from 'react'

export const ModuleItem = ({ module }: { module: { title: string; content: string } }) => {
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
