import { useEffect, useState } from 'react'
import { useAuth } from '../../components/context/AuthContext.js'
import ExBlock from './exBlock/ExBlock.js'
import './Exercises.css'
import Header from './header/Header.js'
import { trpcClient } from '../../client/client.js'


const exersesesQ = [
    {
        id: 1,
        name: 'Жим штанги',
        value: 120,
    },
    {
        id: 2,
        name: 'Нижняя тяга',
        value: 90,
    }
]

const option = [
    { value: 1, text: 'руки' },
    { value: 2, text: 'ноги' }
]

type Exercises = {
    id: number,
    name: string,
    value: number,
}

function Exercises() {
    const [exercises, setExercises] = useState<Exercises[]>([])
    const { getToken } = useAuth()
    console.log(getToken());

    useEffect(() => {
        const getData = async () => {
            const data = await trpcClient.exercises.userExercises.query(null, {
                
            })
            setExercises(data)
        }
        getData()
    }, [])




    return (
        <>
            <Header options={option} />
            {exercises.map(ex => <ExBlock key={ex.id} exName={ex.name} value={ex.value} />)}
        </>
    )
}

export default Exercises
