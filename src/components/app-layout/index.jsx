import React, { Component } from 'react';
import './styles.css';

class Item extends Component {

    render() {
        return (
            <li className='list-value' data-id={this.props.id}>
                <div className='purchase-text'>
                    <input type='checkbox' className='checkbox' />
                    <span className={this.props.editing ? 'hidden' : ''}>{this.props.text}</span>
                    <input type='text' className={this.props.editing ? '' : 'hidden'} defaultValue={this.props.text} ref={node => this.newInput = node}/>
                </div>
                <div className='purchase-btns'>
                    <div className='btn btn-edit' onClick={() => this.props.editItem(this.props.id, this.newInput)} />
                    <div className='btn btn-rm' onClick={() => this.props.rmItem(this.props.id)} />
                </div>
            </li>
        )
    }
}

class Card extends Component {
    constructor(){
        super();
        this.state = {items: []};
    }

    addItem = () => {
        if(this.input.value) {
            let tmpItems = this.state.items;
            tmpItems.push({id: Math.random().toFixed(2), editing: false, value: this.input.value});
            this.setState({items: tmpItems});
            console.log(this.state.items);
            this.input.value = '';
        }
    };

    rmItem = (id) => {
        let tmpItems = this.state.items;
        for (let i = 0; i < tmpItems.length; i++) {
            if(tmpItems[i].id == id) {
                tmpItems.splice(i, 1);
                break
            }
        }
        this.setState({items: tmpItems});
    };

    editItem = (id, newInput) => {
        let tmpItems = this.state.items;
        let index;
        for (let i = 0; i < tmpItems.length; i++) {
            if (tmpItems[i].id == id){
                index = i;
                break
            }
        }
        if(tmpItems[index].editing == false) {
            tmpItems[index] = {id: tmpItems[index].id, editing: true, value: tmpItems[index].value};
            this.setState({items: tmpItems});
        } else {
            if(tmpItems[index].editing == true) {
                let tmpValue = newInput;
                tmpItems[index] = {id: tmpItems[index].id, editing: false, value: newInput.value};
                this.setState({items: tmpItems});
            } else {
                alert('The field cannot be empty!')
            }
         }
    };

    // progress = (id, event) => {
    //
    // };

    render() {
        let items = this.state.items.map((item, index) => <Item editing={item.editing}
                                                                editItem={this.editItem}
                                                                rmItem={this.rmItem}
                                                                state={this.state}
                                                                key={index}
                                                                id={item.id}
                                                                text={item.value} />);
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
