import { ReactNode } from "react"
import "./formGroup.css"

export const FormGroup = ({ children }: { children: ReactNode }) => {
    return (
        <div className="form-group">
            {children}
        </div>
    )
}