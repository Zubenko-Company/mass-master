// import { useParams } from "react-router"
import { useState } from "react"
import { FormButton } from "../../components/form/formButton/formButton.js"
import { FormGroup } from "../../components/form/formGroup/formGroup.js"
import PageContent from "../../components/pageContent/pageContent.js"
import './loginPage.css'
import { trpcClient } from "../../client/client.js"

export const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const hui = await trpcClient.token.token.mutate({ login: formData.username, password: formData.password })
            alert(JSON.stringify(hui))

        } catch (e) {
            alert(e)
        }
    };

    return (
        <PageContent>
            <h1>Авторизация</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="username">Логин:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="Введите ваш логин"
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Введите ваш пароль"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </FormGroup>

                <FormButton type="submit" text="Войти" />

            </form>
            <div className="links">
                <a href="/forgot-password">Забыли пароль?</a> |
                <a href="/register">Регистрация</a>
            </div>
        </PageContent >
    )
}