const userListReducerDefaultState = [];

const userListReducer = (state = userListReducerDefaultState, action) => {
    switch(action.type) {
        case 'change_userList':
            return action.userList
        default:
            return state;
    }
}

export default userListReducer;
