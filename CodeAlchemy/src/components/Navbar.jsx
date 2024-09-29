import React, { useState, useRef, useEffect } from "react";
import { gsap } from 'gsap';

const Navbar = () => {

    const AboutRef = useRef(null)
    const SkillsRef = useRef(null)
    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)
    const HireRef = useRef(null)

    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen(!isOpen);
    };
    useEffect(() => {
        const tl = gsap.timeline();

        const refs = [AboutRef, SkillsRef, ProjectsRef, ContactRef, HireRef];

        if (isOpen) {
            refs.forEach(ref => {
                if (ref.current) {
                    gsap.set(ref.current, { x: 100, opacity: 0 });
                }
            });

            refs.forEach(ref => {
                if (ref.current) {
                    tl.to(ref.current, { x: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" });
                }
            });

        }
        return () => {
            tl.kill();
        };
    }, [isOpen]);


    const logoPath = import.meta.env.VITE_LOGO_PATH;
    return (

        <>
            <div className="w-full flex mt-3 items-center justify-between ">
                <div className="w-28 ml-8 max-[768px]:w-24 max-[1024px]:ml-4 max-[768px]:ml-2 "><img src={logoPath} alt="CodeAlchemy" className="inline-flex cursor-pointer" /></div>
                <div className="flex items-center gap-16 mr-12 max-[1024px]:gap-10 max-[1024px]:mr-8 max-[768px]:gap-6 max-[768px]:mr-6 max-[468px]:hidden">
                    <ul className="flex gap-16 text-base items-center max-[1024px]:gap-10 max-[768px]:gap-6 max-[768px]:text-base ">
                        <li className="text-Text cursor-pointer relative group">About
                            <span className="absolute block h-1 w-0 bg-Highlight transition-all duration-300 group-hover:w-full bottom-0 left-0"></span>
                        </li>
                        <li className="text-Text cursor-pointer relative group">Skills
                            <span className="absolute block h-1 w-0 bg-Highlight transition-all duration-300 group-hover:w-full bottom-0 left-0"></span>
                        </li>
                        <li className="text-Text cursor-pointer relative group">Projects
                            <span className="absolute block h-1 w-0 bg-Highlight transition-all duration-300 group-hover:w-full bottom-0 left-0"></span>
                        </li>
                        <li className="text-Text cursor-pointer relative group">Contact
                            <span className="absolute block h-1 w-0 bg-Highlight transition-all duration-300 group-hover:w-full bottom-0 left-0"></span>
                        </li>
                    </ul>
                    <div className="relative inline-flex items-center justify-center p-[4px] rounded-xl cursor-pointer text-base text-nowrap max-[768px]:text-base group overflow-hidden border-solid border-black border-[1.5px]">
                        <span className="absolute inset-0 rounded-xl bg-Menu transform translate-x-[-100%] translate-y-[100%] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="relative z-10 text-Text cursor-pointer">Hire Me</span>
                    </div>
                </div>
                <div className="w-10 hidden max-[468px]:flex mr-8 relative" onClick={toggleMenu} >
                    <div className="flex flex-col w-full h-8 gap-[8px] items-center cursor-pointer" >
                        <span className={`bg-Text w-full h-1 block transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-3' : ''}`}></span>
                        <span className={`bg-Text w-full h-1 block transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-Text w-full h-1 block transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[-12px]' : ''}`}></span>
                    </div>
                    {isOpen && <div className="absolute top-[60px] mr-6 left-[-100px]">
                        <div className="flex flex-col gap-4">
                            <div ref={AboutRef} className="text-Text text-xl bg-Menu rounded-xl flex items-center justify-center p-[3px] w-40">About</div>
                            <div ref={SkillsRef} className="text-Text text-xl bg-Menu rounded-xl flex items-center justify-center p-[3px]">Skills</div>
                            <div ref={ProjectsRef} className="text-Text text-xl bg-Menu rounded-xl flex items-center justify-center p-[3px]">Projects</div>
                            <div ref={ContactRef} className="text-Text text-xl bg-Menu rounded-xl flex items-center justify-center p-[3px]">Contact</div>
                            <div ref={HireRef} className="text-nowrap text-xl text-Text bg-Menu rounded-xl flex items-center justify-center p-[3px]">Hire Me</div>
                        </div>
                    </div>}
                </div>

            </div>
        </>
    )
}

export default Navbar;