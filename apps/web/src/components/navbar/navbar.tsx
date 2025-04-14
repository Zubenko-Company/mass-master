import { NavLink, useLocation } from "react-router";
import "./navbar.css";
import { BsHouseDoor, BsGraphUp, BsPersonCircle } from "react-icons/bs";
import { useEffect, useRef } from "react";

export default function BottomNavbar() {
    const location = useLocation();
    const indicatorRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);

    useEffect(() => {
        const activeLink = linksRef.current.find(
            link => link.getAttribute('href') === location.pathname
        );
        if (activeLink && indicatorRef.current) {
            const { offsetLeft, offsetWidth } = activeLink;
            indicatorRef.current.style.left = `${offsetLeft}px`;
            indicatorRef.current.style.width = `${offsetWidth}px`;
        }
    }, [location]);

    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-link" ref={el => { linksRef.current[0] = el }} >
                <div className="nav-content"><BsHouseDoor /> <span className="buttonName">Упражнения</span></div>
            </NavLink>
            <NavLink to="/statistic" className="nav-link" ref={el => linksRef.current[1] = el}>
                <div className="nav-content"><BsGraphUp /> <span className="buttonName">Статистика</span></div>
            </NavLink>
            <NavLink to="/profile" className="nav-link" ref={el => linksRef.current[2] = el}>
                <div className="nav-content"><BsPersonCircle /> <span className="buttonName">Статистика</span></div>
            </NavLink>
            <div className="active-indicator" ref={indicatorRef}></div>
        </nav >
    );
}