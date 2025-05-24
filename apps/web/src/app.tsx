import { Route, } from "react-router";
import BottomNavbar from "./components/navbar/navbar.js";
import { MainPage } from "./pages/main/main.js";
import { StatisticPage } from "./pages/statistic/statistic.js";
import './app.css'
import AnimationRutes from "./components/animationRutes/animationRutes.js";
import { ExercisePage } from "./pages/exercise/exercise.js";
import { LoginPage } from "./pages/login/loginPage.js";

export default function App() {
    return (
        <div className="appContainer">
            <AnimationRutes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/exercise" element={<MainPage />} />
                <Route path="/exercise/:exerciseId" element={<ExercisePage />} />
                <Route path="/statistic" element={<StatisticPage />} />
            </AnimationRutes>
            <BottomNavbar />
        </div>
    );
}