import { ExerciseCard } from "./card/card.js"
import defImage from "../../assets/images/default.png"
import "./exercise.css"

const testprop = {
    title: "Присяд",
    image: defImage,
    sets: 4,
    reps: 10,
    weight: 20
}

const testprop2 = {
    title: "лежать",
    image: defImage,
    sets: 4,
    reps: 10,
    weight: 20
}

export const ExercisePage = () => {
    return <div className="exercise-page">
            <ExerciseCard key={testprop.title} {...testprop} />
            <ExerciseCard key={testprop2.title} {...testprop2} />
    </div>
}