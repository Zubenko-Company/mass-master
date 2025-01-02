import { Button, Container, Form } from 'react-bootstrap'
import './Login.css'
import { FormEvent, useState } from 'react';


type FormData = {
    login: string;
    password: string;
}

function Login() {

    const [formData, setFormData] = useState<FormData>({
        login: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log({ name, value });

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submit behavior
        alert(JSON.stringify(formData))
    };

    return (
        <Container className="d-flex align-items-center h-100">
            <Form className='w-100' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control name="login" type="text" placeholder="Введите логин" onChange={handleInputChange} value={formData.login} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Введите пароль" onChange={handleInputChange} value={formData.password} />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                    Вход
                </Button>
            </Form>
        </Container>
    )
}

export default Login
