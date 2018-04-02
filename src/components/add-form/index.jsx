import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class AddForm extends Component {
  componentDidMount() {
    this.refs.itemValue.focus();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const value = this.refs.itemValue.value;
    
    if(value) {
      this.props.addItem(value);
      this.refs.form.reset();
    }
  }

  render () {
    const {className} = this.props;
    return (
      <form ref='form' onSubmit={this.onSubmit} className={['form-inline', className].join(' ')}>
        <input type='text' ref='itemValue' className='form-control input' placeholder='Add new todo item...'/>
        <button type='submit' className='btn btn-default'>Add item</button> 
      </form>
    );   
  }
}

AddForm.propTypes = {
  className: PropTypes.string,
  addItem: PropTypes.func.isRequired,
}