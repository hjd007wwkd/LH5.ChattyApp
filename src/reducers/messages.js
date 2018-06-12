const messagesReducerDefaultState = [];

const messagesReducer = (state = messagesReducerDefaultState, action) => {
    switch(action.type){
        case 'incoming_message':
            return [...state, {type: "incoming_message", ...action.message}]
        case 'incoming_notification':
            return [...state, {type: 'incoming_notification', ...action.message}]
        case 'outcoming_message':
            return[...state, {type: 'outcoming_message', ...action.message}]
        case 'change_name':
            return[...state, {type: 'outcoming_notification', ...action.message}]
        default:
            return state;
    }
}

export default messagesReducer;