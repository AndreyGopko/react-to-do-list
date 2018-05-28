import React from 'react';


function FilterBtn(props){
    let runFilter = () =>{
        props.doneFilter(props.value)
    }
    let classBtn = 'btn'
    if (props.value === 'Done'){
        classBtn += ` btn-success`
    }else if (props.value === 'In progress'){
        classBtn += ` btn-warning`
    }else if (props.value === 'All'){
        classBtn += ` btn-secondary`
    }

    return(
        <button className={classBtn} onClick={runFilter}> {props.value}</button>
    )
}

export default FilterBtn
