import "./card.css"
// import { BsFillPencilFill } from "react-icons/bs";

type ExerciseCardProps = {
    title: string;
    image: string;
    sets: number;
    reps: number;
    weight: number;
}

export const ExerciseCard = ({ title, image, reps, sets, weight }: ExerciseCardProps) => {
    return <div className="exercise-card">
        <img
            src={image}
            alt={title}
            className="exercise-image"
        />
        <div>
            <div className="exercise-info">
                <h3>{title}</h3>
                <p>{sets} x {reps}</p>
                <p>{weight} кг</p>
            </div>
        </div>
        {/* <button className="editButton"><BsFillPencilFill size={'2em'} /></button> */}
    </div>
}