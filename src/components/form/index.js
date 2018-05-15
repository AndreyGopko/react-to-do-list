import React,{Component} from 'react';

let id = 0;
class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e){
        let value = e.target.value;
        this.setState({value},() => {console.log("ONCHANGE SUCCES")} )
    }

    submitHandler(e){
        e.preventDefault();
        const addFunc = this.props.addFunc;
        const value = this.state.value;
        if(value){
            addFunc({
                value,
                done: false,
                id:id++
            });
        }
        this.setState({value: ""});
        this.input.value = "";
        
        
    }

    
    render(){
        return (
            <form 
                className="todo-form" 
                onSubmit={ this.submitHandler }  
            >
                <input 
                    ref={node => this.input = node} 
                    onChange={this.changeHandler} 
                    placeholder="enter the task"
                    className="todo-input"
                />   
            </form>
        )
    }
}
export default Form;