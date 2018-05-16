import React, { Component } from 'react';
import ButtonComponent from './buttonComponent'
import InputComponent from './inputComponent'
import PropTypes from 'prop-types'; 
import './styles.css';

const TodoComponent = (props) => {
    const { el, handelDeleteClick, handelDoneClick, handelUpdateClick, inputRef, readonly, handelInput } = props
    return(
        <div id={el.id} className="todoItem">
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelDeleteClick(el.id)}
            value={"x"} 
            classNames="btn" 
        />
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelDoneClick(el.id)}
            value={"DONE"} 
            classNames={"btn"} 
        />
        <ButtonComponent 
            type={"submit"} 
            handelClick={() => handelUpdateClick(el.id)}
            value={"UPDATE"} 
            classNames="btn" 
        /> 
        {
            <InputComponent 
            type={"text"} 
            inputRef={inputRef} 
            onInput={el.readonly ? (e) => handelInput(e, el.id) : null}
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
    inputRef: PropTypes.func,
    readonly: PropTypes.bool, 
    handelInput: PropTypes.func
}

export default TodoComponent;