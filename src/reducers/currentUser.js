const currentUserReducerDefaultState = {name: "Anonymous"};

const currentUserReducer = (state = currentUserReducerDefaultState, action) => {
    switch(action.type) {
        case 'change_name':
            return {name: action.name}
        default:
            return state;
    }
}

export default currentUserReducer;