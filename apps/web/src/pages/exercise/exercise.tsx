import { useParams } from "react-router"
import PageContent from "../../components/pageContent/pageContent.js"

export const ExercisePage = () => {
    const { exerciseId } = useParams() as { exerciseId: string }

    const testEx = {
        id: 2,
        title: "лежать",
        sets: 4,
        reps: 10,
        weight: 20,
    }

    return (
        <PageContent>
            <h1>Exercise {exerciseId}</h1>
        </PageContent>
    )
}