import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, toggle }) => {
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
                py-8 px-6 xs:px-20 sm:px-30 rounded shadow-glass-inset text-center space-y-8">
                <p className="font-light">Do you like to play the background music?</p>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={toggle} className="px-8 py-6 border border-accent/60 border-solid rounded">Yes</button>
                    <button onClick={onClose} className="px-8 py-6 border border-accent/60 border-solid rounded">No</button>
                </div>
            </div>
        </div>,
        document.getElementById("my-modal")
    );
};

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleFirstUserInteration = () => {
            const musicConsent = localStorage.getItem("musicConsent");
            if (musicConsent === "true" && !isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
            ["click", "keydown", "touchStart"].forEach((event) =>
                document.removeEventListener(event, handleFirstUserInteration)
            );
        };

        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");

        if (consent && consentTime && new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()) {
            setIsPlaying(consent === "true");

            if (consent === "true") {
                ["click", "keydown", "touchStart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteration)
                );
            }
        } else {
            setShowModal(true);
        }
    }, [isPlaying]); // Added isPlaying to the dependency array

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem("musicConsent", String(newState));
        localStorage.setItem("consentTime", new Date().toISOString());
        setShowModal(false);
    };

    return (
        <div className='fixed top-5 right-2.5 xs:right-4 z-50 group'>
            {showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />}
            <audio ref={audioRef} loop>
                <source src={"/Leaf-Zhi.mp3"} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 xs:w-10 xs:h-10 text-foreground rounded-full flex 
                items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 "
                aria-label={"home"}
                name={"home"}
            >
                {
                    isPlaying ?
                        <Volume2 className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                        :
                        <VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                }
            </motion.button>
        </div>
    );
}

export default Sound;
