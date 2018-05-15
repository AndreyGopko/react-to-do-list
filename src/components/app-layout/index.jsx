import React, { Component } from 'react';
import './styles.css';

class AppLayout extends Component {
    constructor(){
        super()
        this.state = {
            goods: [

            ],

        }

    }

    onClick = (e) => {
         e.preventDefault();
         const tempGoods = this.state.goods;
        tempGoods.push(this.goods.value);
         this.setState({
            goods: tempGoods,
         })

     };



    render()
        {
        let rez = '';
        if (this.state.goods){
           rez = <li>
               {this.state.goods}
               <button onClick = {this.remove}>remove</button>
               </li>;
        }


    return (
      <div className='main'>
        <header className='header'>
          <h1 className='title'>My to do</h1>
        </header>
        <div className='container'>
            <input ref = {(node)=> this.goods = node}/>
            <button onClick = {this.onClick}>add-goods</button>
            <List list={this.state.goods} />
        </div>
      </div>
    );
  }
}




export default AppLayout;


function List(props) {
    return (
        <ul>
            {props.list.map((item, index) => {
                return <li key={index}>{item} </li>;
            })}
        </ul>
    )
}