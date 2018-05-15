import React, { Component } from 'react';
import ButtonComponent from './buttonComponent'
import InputComponent from './inputComponent'
import PropTypes from 'prop-types'; 
import './styles.css';

const FormComponent = (props) => {
    const { handelSubmit, inputRef } = props
    return(
        <form onSubmit={handelSubmit}>
        <span className="inputLabel">Input your todo: </span>
        <InputComponent type={"text"} inputRef={inputRef} classNames="input" />
        <ButtonComponent type={"submit"} value="submit" classNames="input" />
      </form>
    )
} 

FormComponent.propTypes = {
    handelSubmit: PropTypes.func,
    inputRef: PropTypes.func,
}
export default FormComponent
  