import { ExerciseCard } from "./card/card.js"
import image from "../../assets/images/default.png"
import "./exercise.css"
import { testExercises } from "../../testData/exercises.js"


export const ExercisePage = () => {
    return <>
        <div className="greeting">
            <p>Доброе утро</p>
            <h1>Антон Зубенко</h1>
        </div>
        <h2>Занятия на сегодня</h2>
        <div className="exercise-page">
            {testExercises.map(ex => <ExerciseCard key={ex.id} {...ex} image={image} />)}
        </div>
    </>
}