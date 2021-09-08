import React from "react"
import "./css/inputfield.css"


const InputFields = ({ name, value, type, label, placeholder, onChange }) => {
    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(value, e.target.value)
        }
    }
    return (
        <div className="input_fields">
            <label className="label-name">{label}<br /><input name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} /></label><br />

        </div>
    )

}


export default InputFields