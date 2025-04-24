import React from 'react'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react';

const TypedText = ({theme}) => {
    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Full Stack Developer",
                "Web Developer",
                "UI-UX Designer",
                "Backend Developer",
                "Coder",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 1000,
        });
    
        return () => {
            typed.destroy();
        };
    }, []);
    

    return (
        <div>
            <span className= {`text-3xl font-semibold ${theme === 'light' ? 'text-pink' : 'text-green'}`} ref={typedRef}></span>
        </div>
    )
}

export default TypedText