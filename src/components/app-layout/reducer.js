export default (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let add = state.items.concat({id: Date.now(), value: action.value, done: false, editing: false});
            add = {...state, items: add};
            add = JSON.stringify(add);
            return JSON.parse(add);

        case 'RM_ITEM':
            let rm = state.items.filter(item => item.id !== action.id);
            rm = {...state, items: rm};
            rm = JSON.stringify(rm);
            return JSON.parse(rm);

        case 'DONE_ITEM':
            let tmp = state.items;
            for (let i = 0; i < tmp.length; i++) {
                 if (tmp[i].id === action.id) {
                     tmp[i].done = !tmp[i].done;
                 }
            }
            tmp = {...state, items: tmp};
            tmp = JSON.stringify(tmp);
            return JSON.parse(tmp);

        case 'EDIT_ITEM':
            let edit = state.items;
            for (let i = 0; i < edit.length; i++) {
                if (edit[i].id === action.id && !edit[i].editing) {
                    edit[i].editing = !edit[i].editing;
                } else if (edit[i].id === action.id && edit[i].editing){
                    edit[i].editing = !edit[i].editing;
                    edit[i].value = action.value;
                }
            }
            edit = {...state, items: edit};
            edit = JSON.stringify(edit);
            return JSON.parse(edit);

        default:
            return state;
    }

};