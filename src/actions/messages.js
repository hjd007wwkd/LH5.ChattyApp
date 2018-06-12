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