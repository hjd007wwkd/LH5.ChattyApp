//these handle various message type

//format of message is {type: 'incoming_message', username: 'username', content: 'aasd', color: '#color', id: 'uuid'}
export const incomingMessage = (message) => (
    {
        type: 'incoming_message',
        message: message
    }
);

//{type: 'incoming_notification', content: 'Annoymous1 changed their name to asdf', id: "uuid"}
export const incomingNotification = (message) => (
    {
        type: 'incoming_notification',
        message: message
    }
);

//{type: 'post_message', username: 'username', content: 'aasd', color: '#color', id: 'uuid'}
export const postMessage = (message) => (
    {
        type: 'post_message',
        message: message
    }
);

//{type: 'post_notification', content: 'Annoymous1 changed their name to asdf', id: "uuid"}
export const postNotification = (message) => (
    {
        type: 'post_notification',
        message: message
    }
);

//{type: 'connect_notification', content: 'Annoymous2 is connected'}
export const connectNotification = (message) => (
    {
        type: 'connect_notification',
        message: message
    }
);

//{type: 'disconnect_notification', content: 'Annoymous2 is disconnected'}
export const disconnectNotification = (message) => (
    {
        type: 'disconnect_notification',
        message: message
    }
);