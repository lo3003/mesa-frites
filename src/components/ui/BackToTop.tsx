"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-mesaGold text-black p-4 rounded-full shadow-[0_0_30px_rgba(240,196,80,0.5)] hover:scale-110 hover:shadow-[0_0_40px_rgba(240,196,80,0.7)] transition-all duration-300 animate-fade-in group"
                    aria-label="Retour en haut"
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce-slow" />
                </button>
            )}
        </>
    );
}
