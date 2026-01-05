'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8, // Increased for a more "laggy"/smooth feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Scroll Reveal Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    if (target.classList.contains('hero')) {
                        target.classList.add('hero--visible');
                    } else if (target.classList.contains('section--stats')) {
                        target.classList.add('section--stats-visible');
                    } else {
                        target.classList.add('reveal--visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and the hero
        document.querySelectorAll('.hero, section, .section').forEach(section => {
            if (!section.classList.contains('hero') && !section.classList.contains('section--stats')) {
                section.classList.add('reveal--initial');
            }
            observer.observe(section);
        });

        // Handle internal anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href')?.substring(1);
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        lenis.scrollTo(targetElement);
                    }
                }
            });
        });

        return () => {
            lenis.destroy()
            observer.disconnect(); // Clean up observer
        }
    }, [pathname])

    return <>{children}</>
}
