// input field component for user signup and login.
import React from 'react';
import style from './field.module.css';
import PropTypes from 'prop-types';
import { FaRegistered } from 'react-icons/fa';
export default function AuthField(props) {
  return (
    <div className={`${style.inputFieldContainer} `}>
      <label htmlFor="username" className={style.inputLabel}>
        {props.label}
      </label>
      <input
        className={style.inputField}
        {...props.register}
        id={props.name}
        name={props.name}
        type={props.type}
      />
    </div>
  );
}
AuthField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  register: PropTypes.func,
};
