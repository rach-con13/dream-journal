// input field component for user signup and login. 
import React from 'react'
import style from "./field.module.css";
import PropTypes from "prop-types";
export default function AuthField(props) {

    return (
        <div className={`${style.inputFieldContainer} `} >
            <label htmlFor="username" className={style.inputLabel}>{props.label}</label>
            <input className={style.inputField} id={props.name} name={props.name} type={props.type} onChange={props.onChange} value={props.value} />
        </div>
    )
}
AuthField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}
