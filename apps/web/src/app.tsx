import { Route, } from "react-router";
import BottomNavbar from "./components/navbar/navbar.js";
import { ExercisePage } from "./pages/exercise/exercise.js";
import { StatisticPage } from "./pages/statistic/statistic.js";
import './app.css'
import AnimationRutes from "./components/animationRutes/animationRutes.js";

export default function App() {
    return (
        <div className="appContainer">
            <AnimationRutes>
                <Route path="/" element={<ExercisePage />} />
                <Route path="/exercise" element={<ExercisePage />} />
                <Route path="/statistic" element={<StatisticPage />} />
            </AnimationRutes>
            <BottomNavbar />
        </div>
    );
}