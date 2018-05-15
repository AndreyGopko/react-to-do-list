import React, { Component } from 'react';
import './styles.css';

class Item extends Component {

    render() {
        return (
            <li className='list-value' data-id={this.props.id} data-editing={this.props.editing}>
                <div className='purchase-text'>
                    <input type='checkbox' className='checkbox' />
                    <span className={this.props.hidden ? 'hidden' : ''}>{this.props.text}</span>
                    <input type='text' className={this.props.hidden ? '' : 'hidden' } defaultValue={this.props.inputValue} />
                </div>
                <div className='purchase-btns'>
                    <div className='btn btn-edit' onClick={(event) => this.props.editItem(this.props.id, event)} />
                    <div className='btn btn-rm' onClick={() => this.props.rmItem(this.props.id)} />
                </div>
            </li>
        )
    }
}

class Card extends Component {
    constructor(){
        super();
        this.state = {items: [], hidden: [], inputValue: []};
    }

    addItem = () => {
        if(this.input.value) {
            let tmpItems = this.state.items;
            tmpItems.push(this.input.value);
            let tmpHidden = tmpItems.map(item => false);
            let tmpInputValue = this.state.inputValue;
            tmpInputValue.push(this.input.value);
            this.setState({items: tmpItems, hidden: tmpHidden, inputValue: tmpInputValue});
            this.input.value = '';
        }
    };

    rmItem = (id) => {
        let tmpItems = this.state.items;
        tmpItems.splice(id, 1);
        let tmpHidden = tmpItems.map(item => false);
        this.setState({items: tmpItems, hidden: tmpHidden});
    };

    editItem = (id, event) => {
        if(event.target.closest('.list-value').dataset.editing === 'false') {
            let tmpInputValue = this.state.inputValue;
            tmpInputValue[id] = event.target.closest('.list-value').querySelector('span').innerText;
            let tmpHidden = this.state.hidden;
            tmpHidden[id] = true;
            this.setState({hidden: tmpHidden, inputValue: tmpInputValue});
        } else {
            if(event.target.closest('.list-value').querySelector('input[type=text]').value) {
                let tmpInputValue = this.state.inputValue;
                tmpInputValue[id] = event.target.closest('.list-value').querySelector('span').innerText;
                let tmpItems = this.state.items;
                tmpItems[id] = event.target.closest('.list-value').querySelector('input[type=text]').value;
                let tmpHidden = this.state.hidden;
                tmpHidden[id] = false;
                this.setState({items: tmpItems, hidden: tmpHidden, inputValue: tmpInputValue});
            } else {
                alert('The field cannot be empty!')
            }
        }
    };

    progress = (id, event) => {

    };

    render() {
        let items = this.state.items.map((item, index) => <Item hidden={this.state.hidden[index]}
                                                                editItem={this.editItem}
                                                                rmItem={this.rmItem}
                                                                state={this.state}
                                                                editing={this.state.hidden[index]}
                                                                progress={this.progress}
                                                                inputValue={this.state.inputValue[index]}
                                                                key={index}
                                                                id={index}
                                                                text={item} />);
        return (
            <div className='card-place'>
                <div className='card-title'>
                    <span>To-Do-List</span>
                </div>
                <ul className='list-items'>
                    {items}
                </ul>
                <div className='card-footer'>
                    <div className='card-input-place'>
                        <input className='card-input' ref={node => this.input = node}/>
                        <div className='btn btn-add' onClick={this.addItem}/>
                    </div>
                    <div className='card-progress-bar'>0%</div>
                </div>
            </div>
        )
    }
}

class AppLayout extends Component {
  render() {
    return (
      <div className='main'>
        <header className='header'>
          <h1 className='title'>Welcome to React</h1>
        </header>
          <Card />
      </div>
    );
  }
}

export default AppLayout;
