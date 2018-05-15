import React from 'react';
import TodoItem from "../todoitem";

const List = ({list,changeProps,deleteFunc}) => (
    <div className="list-wrap" >
        <h2 children="OUR LIST" />
        { 
            list ? 
            <ul className="todo-list" >
                {
                    list.map(item => <TodoItem 
                        key={item.id} 
                        data={item}
                        changeProps={changeProps}
                        deleteFunc={deleteFunc}
                    />)
                }
            </ul> : 
            null 
        }
    </div>
)


export default List;