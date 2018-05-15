import React from 'react';
import './styles.css';
import PropTypes from 'prop-types'; 


const ButtonComponent = (props) => {
    const { type, value, classNames, handelClick } = props
    return(
    <input 
        onClick={handelClick || null}
        type={type} 
        value={value} 
        className={Array.isArray(classNames) ? classNames.join(" ") : classNames} 
    />
 )
} 

ButtonComponent.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string, 
    classNames: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array       
    ]),
    handelClick: PropTypes.func
}

export default ButtonComponent