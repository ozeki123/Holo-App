import React from "react";
import "./TextInput.scss"

const TextInput = ({label, name, placeholder, defaultValue, handleChange}) => {
  return (
    <div className="text-input-container">
      <label>{label}</label>
      <input type="text" name={name} placeholder={placeholder} defaultValue={defaultValue} onChange={handleChange}/>
    </div>
  )
}

export default TextInput;