import { ExerciseCard } from "./card/card.js"
import image from "../../assets/images/default.png"
import "./exercise.css"
import { ex1, ex2 } from "../../testData/exercises.js"


export const ExercisePage = () => {
    return <div className="exercise-page">
        <ExerciseCard key={ex1.title} {...ex1} image={image} />
        <ExerciseCard key={ex2.title} {...ex2} image={image} />
    </div>
}