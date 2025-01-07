import { useAuth } from '../../components/context/AuthContext.js'
import ExBlock from './exBlock/ExBlock.js'
import './Exercises.css'
import Header from './header/Header.js'


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

function Exercises() {

    const { getToken } = useAuth()
    console.log(getToken());


    return (
        <>
            <Header options={option} />
            {exersesesQ.map(ex => <ExBlock key={ex.id} exName={ex.name} value={ex.value} />)}
        </>
    )
}

export default Exercises
