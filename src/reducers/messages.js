const messagesReducerDefaultState = [];

//this get all the messages from actions and update state
const messagesReducer = (state = messagesReducerDefaultState, action) => {
    switch(action.type){
        case 'incoming_message':
            return [...state, action.message];
        case 'incoming_notification':
            return [...state, action.message];
        case 'post_message':
            return [...state, action.message];
        case 'post_notification':
            return [...state, action.message];
        case 'connect_notification':
            return [...state, action.message];
        case 'disconnect_notification':
            return [...state, action.message];
        default:
            return state;
    };
};

export default messagesReducer;