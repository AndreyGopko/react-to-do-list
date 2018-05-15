import React, { Component } from 'react';
import './styles.css';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {liArr: props.list};
    }

    render(){
        const removeBtn = <span className="icon" onClick={(e) => this.props.removeToDoItem(e.target.closest('li').id)}><i className="fas fa-trash"></i></span>;
        const checkbox = <input type="checkbox" onChange={(e) => this.props.checkToDoItem(e.target.closest('li'), e.target)}/>;
        const AllLi = (this.state.liArr.map((elem) =><li id={elem.id} key={elem.id} className="list-group-item">
            {checkbox}{removeBtn}{elem.text}
            </li>));
        return(
        <ul className="list-group list-group-flush">
            {AllLi}
        </ul>
        )
    }
}

class ToDoCard extends Component {
    constructor(){
        super();
        this.state = {};
        this.arrForLIst = [];
        this.id = 1
    }
    addToList(e){
        e.preventDefault();
        if (this.newTask.value){
            this.arrForLIst.push({id: this.id, text: this.newTask.value});
            this.id++;
            this.setState({list: this.arrForLIst});
            this.newTask.value= '';
        }
    }
    onRemove = (id) => {
        this.itemForRemmove = this.arrForLIst.find( (item, i) => {
            return item.id==id
        });
        this.indexForRemove = this.arrForLIst.indexOf(this.itemForRemmove)
        this.arrForLIst.splice(this.indexForRemove, 1)
        this.setState({list: this.arrForLIst})
    };
    onCheck = (element, checkbox) => {
        element.classList.add('checked');

    };
    render() {
        return (
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-md-6">
                       <div className="card">
                           <div className="card-header">TO DO LIST</div>
                           <div className="card-body">
                               <form action="" onSubmit={this.addToList.bind(this)} className="d-flex">
                                   <input type="text" className="new-task" ref={(node) => this.newTask = node}/>
                                   <button type="submit" className="btn btn-light">+</button>
                               </form>
                               {this.state.list && <ToDoList list={this.state.list} removeToDoItem={this.onRemove} checkToDoItem={this.onCheck}/>}

                           </div>
                       </div>
                   </div>
               </div>
           </div>

        );
    }
}

export default ToDoCard;
