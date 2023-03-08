import {useState, useEffect} from "react";
import {GlobeIcon} from "../utils";
function Globe({ setShowGlobe }) {
    const [textIndex, setTextIndex] = useState(0);
    const [loadDashboard, setLoadDashboard] = useState(false);
    const statuses = [
        "Rebooting system...",
        "Reboot complete.",
        "Welcome back, Hal.",
        "It is good to see you.",
        "It has been 73,050 days since your last login.",
        "Would you like to proceed to the dashboard?"
    ];

    const handleButtonClick = () => {
        setLoadDashboard((prev) => !prev);
        setTimeout(() => setShowGlobe(false), 2000);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (textIndex < statuses.length - 1) {
                setTextIndex(textIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 3500);

        return () => clearInterval(timer);
    }, [textIndex, statuses.length]);

    return (
        <div className={`container ${loadDashboard ? "fade-out" : ""}`}>
            <div className="scene">
                <GlobeIcon />
            </div>
            <div className="typing-container">
                <p className="typing">{statuses[textIndex]}<span>|</span></p>
            </div>
            {statuses.map((status, index) => (
                <div key={status}>
                    {index === statuses.length - 1 && textIndex === statuses.length - 1 && (
                        <div>
                            <button
                                className="dashboard-button"
                                onClick={handleButtonClick}
                            >Dashboard
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
)}

export default Globe;