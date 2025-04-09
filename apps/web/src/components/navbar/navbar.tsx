import { NavLink, useLocation } from "react-router";
import "./navbar.css";
import { BsHouseDoor, BsGraphUp } from "react-icons/bs";
import { useEffect, useRef } from "react";

export default function BottomNavbar() {
    const location = useLocation();
    const indicatorRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);

    // Обновляем позицию индикатора при изменении маршрута
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
            <NavLink to="/exercise" className="nav-link" ref={el => { linksRef.current[0] = el }} >
                <span><BsHouseDoor /> <span>hui</span></span>
            </NavLink>
            <NavLink to="/statistic" className="nav-link" ref={el => linksRef.current[1] = el}>
                <span><BsGraphUp /> <span>hui2</span></span>
            </NavLink>
            <div className="active-indicator" ref={indicatorRef}></div>
        </nav >
    );
}