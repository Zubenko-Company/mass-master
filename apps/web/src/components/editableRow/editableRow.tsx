import { BsPencilFill } from "react-icons/bs";
import "./editableRow.css"
import { useRef } from "react";

type EditableRowProps = { name: string; value: string | number; onSave: (value: string) => MabePromise<void> }

export default function EditableRow({ name, value, onSave }: EditableRowProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="editable-row">
            <span className="row-name">{name}: </span>
            <input ref={inputRef} className="row-value" type={typeof value === 'string' ? 'text' : 'number'} defaultValue={value} />
            <BsPencilFill onClick={async () => {
                if (inputRef.current) {
                    if (onSave instanceof Promise) {
                        await onSave(inputRef.current.value)
                    } else {
                        onSave(inputRef.current.value)
                    }
                }

            }} />
        </div>
    );
}