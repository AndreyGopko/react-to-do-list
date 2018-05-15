import React, { Component } from 'react';
import ButtonComponent from './buttonComponent'
import InputComponent from './inputComponent'
import PropTypes from 'prop-types'; 
import './styles.css';

const TodoComponent = (props) => {
    const { el, handelDeleteClick, handelDoneClick, handelUpdateClick, index, inputRef, readonly, handelInput } = props
    return(
        <div id={index} className="todoItem">
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelDeleteClick(index)}
            value={"x"} 
            classNames="btn" 
        />
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelDoneClick(index)}
            value={"DONE"} 
            classNames={"btn"} 
        />
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelUpdateClick(index)}
            value={"UPDATE"} 
            classNames="btn" 
        /> 
        {
            <InputComponent 
            type={"text"} 
            inputRef={inputRef} 
            onInput={el.readonly ? (e) => handelInput(e, index) : null}
            classNames={el.flag ? "input done" : el.readonly ? "input edition" : "input"}
            value={el.readonly ? "" : el.value}
            readonly={el.readonly ? readonly : null}
            />
        }  
        
        <span className="span"> created at</span>
        <span>{new Date(el.date).toLocaleDateString()}</span>
      </div>
    )
} 

TodoComponent.propTypes = {
    el: PropTypes.object,
    handelDeleteClick: PropTypes.func, 
    handelDoneClick: PropTypes.func,
    handelUpdateClick: PropTypes.func, 
    index:  PropTypes.number, 
    inputRef: PropTypes.func,
    readonly: PropTypes.bool, 
    handelInput: PropTypes.func
}

export default TodoComponent;