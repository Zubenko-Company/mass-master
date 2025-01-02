import { Button, Container, Form } from "react-bootstrap";

import "./Login.css";

import { FormEvent, useState } from "react";

import { trpcClient } from "../../client/client.js";

type FormData = {
  login: string;
  password: string;
};

function Login() {
  const [formData, setFormData] = useState<FormData>({
    login: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submit behavior
    const token = await trpcClient.token.token.mutate(formData);

    console.log(token);
  };

  return (
    <Container className="d-flex align-items-center h-100">
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            name="login"
            type="text"
            placeholder="Введите логин"
            onChange={handleInputChange}
            value={formData.login}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={handleInputChange}
            value={formData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Вход
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
