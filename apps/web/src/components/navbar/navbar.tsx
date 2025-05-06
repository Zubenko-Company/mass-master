import { NavLink, useLocation } from "react-router";
import "./navbar.css";
import { BsHouseDoor, BsGraphUp, BsPersonCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const buttons = [
    {
        name: 'Упражнения',
        href: '/',
        icon: <BsHouseDoor />
    },
    {
        name: 'Статистика',
        href: '/statistic',
        icon: <BsGraphUp />
    },
    {
        name: 'Профиль',
        href: '/profile',
        icon: <BsPersonCircle />
    }
]

export default function BottomNavbar() {
    const location = useLocation();
    const indicatorRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);
    // const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        const button = buttons.find(button => button.href === location.pathname)
        if (button) {

            if (indicatorRef.current) {
                const activeLink = linksRef.current.find(
                    link => link.getAttribute('href') === location.pathname
                );
                if (activeLink) {
                    const { offsetLeft, offsetWidth } = activeLink;
                    indicatorRef.current.style.left = `${offsetLeft}px`;
                    indicatorRef.current.style.width = `${offsetWidth}px`;
                }

            }
        }
    }, [location]);

    return (
        <nav className="bottom-nav">
            {buttons.map((button, index) => {
                let className = "nav-link";
                if (location.pathname === button.href) {
                    className = "nav-link nav-link-active"
                } else {
                    if (indicatorRef.current) {
                        indicatorRef.current.style.left = `0px`;
                        indicatorRef.current.style.width = `0px`;
                    }
                }

                return <NavLink to={button.href} className={className} ref={el => { linksRef.current[index] = el }} >
                    <div className="nav-content">{button.icon} <span className="buttonName">{button.name}</span></div>
                </NavLink>
            }
            )}
            <div className="active-indicator" ref={indicatorRef}></div>
        </nav >
    );
}