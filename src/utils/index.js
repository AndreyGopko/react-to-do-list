export function getTodoById(arr, id){
    return arr.find((item) => item.id === id )
}