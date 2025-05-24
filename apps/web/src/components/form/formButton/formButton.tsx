import "./formButton.css"

type FormButtonProps = {
    type: "submit" | "reset" | "button" | undefined,
    text: string
}

export const FormButton = ({ type, text }: FormButtonProps) => {
    return (
        <button type={type} className="form-btn">{text}</button>
    )
}