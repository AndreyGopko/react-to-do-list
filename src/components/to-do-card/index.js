import React, {Component} from "react";
import ToDoList from '../to-do-list/index'
import FilterBtn from '../filterBtn/index'

class ToDoCard extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        };
        this.arrForLIst = [];
        this.id = 1;
        this.newArr;
    }
    addToList(e){
        e.preventDefault();
        if (this.newTask.value){
            this.arrForLIst.push({
                id: this.id,
                text: this.newTask.value,
                checked: false
            });
            this.id++;
            this.setState({list: this.arrForLIst});
            this.newTask.value= '';
        }
    }
    onRemove = (id) => {
        this.arrForLIst = this.arrForLIst.filter( (item) => {
            return item.id !== id
        });
        this.setState({list: this.arrForLIst})
    };
    onCheck = (id) => {
       const checked = this.arrForLIst.find( (item) => {
            return item.id === id
        });
        const indexInArr = this.arrForLIst.indexOf(checked)
        this.arrForLIst[indexInArr].checked = this.arrForLIst[indexInArr].checked?false:true
        this.setState({list: this.arrForLIst})

    };
    doneFilter = (value) =>{
        if(value === 'Done'){
            this.newArr = this.arrForLIst.filter( (item) => item.checked)
            this.setState({listFiltered: this.newArr})
        }else if (value === 'In progress'){
            this.newArr = this.arrForLIst.filter( (item) => !item.checked)
            this.setState({listFiltered: this.newArr})
        }else{
            this.setState({listFiltered: this.arrForLIst})
        }
    };
    render() {
        this.list = this.state.listFiltered?(<ToDoList
            list={this.state.listFiltered}
            removeToDoItem={this.onRemove}
            checkToDoItem={this.onCheck}/>)
            : (<ToDoList
            list={this.state.list}
            removeToDoItem={this.onRemove}
            checkToDoItem={this.onCheck }
        />);
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
                                {this.list}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <FilterBtn doneFilter={this.doneFilter} value="All"/>
                                <FilterBtn doneFilter={this.doneFilter} value="Done"/>
                                <FilterBtn doneFilter={this.doneFilter} value="In progress"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoCard;