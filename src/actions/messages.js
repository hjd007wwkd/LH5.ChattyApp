export const incomingMessage = (message) => (
    {
        type: 'incoming_message',
        message: message
    }
)

export const incomingNotification = (message) => (
    {
        type: 'incoming_notification',
        message: message
    }
)

export const postMessage = (message) => (
    {
        type: 'post_message',
        message: message
    }
)

export const postNotification = (message) => (
    {
        type: 'post_notification',
        message: message
    }
)

export const connectNotification = (message) => (
    {
        type: 'connect_notification',
        message: message
    }
)

export const disconnectNotification = (message) => (
    {
        type: 'disconnect_notification',
        message: message
    }
)