export function setLocalStorage(el){
    localStorage.setItem("todos", JSON.stringify(el))
}
  
export function getLocalStorage(){
    const todos = localStorage.getItem("todos")
    const parsedTodos = (todos && JSON.parse(todos)) || []
    console.log("GET STORAGE", parsedTodos)
    return parsedTodos
}

export function changeState(option, id, arr){
return arr.map((el, index) => {
        if(el.id == id){
          return el = Object.assign(el, {[option]: !arr[index][option]})
        } else {
          return el
        }
    })
}