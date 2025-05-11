// import { useParams } from "react-router"
import PageContent from "../../components/pageContent/pageContent.js"
import image from "../../assets/images/default.png";
import "./exercise.css"
import EditableRow from "../../components/editableRow/editableRow.js";

export const ExercisePage = () => {
    // const { exerciseId } = useParams() as { exerciseId: string }

    const testEx = {
        id: 2,
        title: "лежать",
        sets: 4,
        reps: 10,
        weight: 20,
    }

    const saveValue = (key: keyof typeof testEx) => {
        //TODO fetch PUT
        return (value: string) => {
            if (typeof testEx[key] === 'number') {
                testEx[key] = Number(value)
            }
            if (typeof testEx[key] === 'string') {
                testEx[key] = value
            }
            alert(JSON.stringify(testEx))
        }
    }

    return (
        <PageContent>
            <img
                src={image}
                alt={testEx.title}
                className="exercise-banner"

            />
            <EditableRow name="Название" value={testEx.title} onSave={saveValue('title')} />
            <EditableRow name="Подходы" value={testEx.sets} onSave={saveValue('sets')} />
            <EditableRow name="Повторения" value={testEx.reps} onSave={saveValue('reps')} />
            <EditableRow name="Вес" value={testEx.weight} onSave={saveValue('weight')} />
        </PageContent >
    )
}