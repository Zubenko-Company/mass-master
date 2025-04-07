import "./card.css"

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
    </div>
}