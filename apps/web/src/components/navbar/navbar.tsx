import { Link } from "react-router";
import "./BottomNavbar.css"; // Стили (см. ниже)

export default function BottomNavbar() {
    return (
        <nav className="bottom-nav">
            <Link to="/exercise" className="nav-link">
                Упражнения
            </Link>
            <Link to="/statistic" className="nav-link">
                Статистика
            </Link>
        </nav>
    );
}