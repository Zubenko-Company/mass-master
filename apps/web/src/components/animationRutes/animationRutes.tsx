import { ReactNode, useEffect, useState } from "react";
import { Routes, useLocation } from "react-router";

import "./animationRutes.css";

export default function AnimationRutes({ children }: { children: ReactNode }) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("in");

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage("out");
        }
    }, [location]);

    const handleAnimationEnd = () => {
        if (transitionStage === "out") {
            setTransitionStage("in");
            setDisplayLocation(location);
        }
    };

    return (
        <div className="slide-container">
            <div
                className={`slide-${transitionStage}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <Routes location={displayLocation}>{children}</Routes>
            </div>
        </div>
    );
}
