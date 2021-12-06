import Icon from "./Icon";
import Button from "./Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import navBarLinks from "../lib/navBarLinks";

const Links = ({ link, number, linkName }) => {
    return (
        <ul className="font-barlow text-white">
            <li>
                <a href={link} className="text-lg">
                    <span className="font-bold">{number}</span> {linkName.toUpperCase()}
                </a>
            </li>
        </ul>
    );
};

const NavBar = ({ navBarColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`${navBarColor} flex justify-between items-center p-8`}>
            <section>
                <Icon classes="w-12">
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z" fill="#0B0D17" />
                    </svg>
                </Icon>
            </section>
            <section className="z-10">
                <Button onClick={() => setIsOpen(!isOpen)}>
                    <Icon classes="w-7 fill-current text-light-blue">
                        {isOpen ?
                            (<svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" />
                                    <rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" />
                                </g>
                            </svg>) :
                            (<svg viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="3" />
                                <rect y="9" width="24" height="3" />
                                <rect y="18" width="24" height="3" />
                            </svg>)}
                    </Icon>
                </Button>
            </section>
            <AnimatePresence>
                {isOpen ?
                    (<motion.section
                        initial={{ opacity: 0, x: 350 }}
                        animate={{ opacity: 1, x: 100 }}
                        exit={{ opacity: 0, x: 350 }}
                        transition={{ duration: 0.5 }}
                        className="fixed bg-black w-full h-screen px-5 flex flex-col justify-center"
                    >
                        {navBarLinks.map(({ link, number, linkName }) => (
                            <Links
                                link={link}
                                number={number}
                                linkName={linkName}
                                key={number}
                            />))}
                    </motion.section>)
                    : ""}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;