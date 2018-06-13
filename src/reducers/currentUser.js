const currentUserReducerDefaultState = {name: "Anonymous"};

//this get new username from actions and update state
const currentUserReducer = (state = currentUserReducerDefaultState, action) => {
    switch(action.type) {
        case 'change_name':
            return {name: action.name};
        default:
            return state;
    };
};

export default currentUserReducer;