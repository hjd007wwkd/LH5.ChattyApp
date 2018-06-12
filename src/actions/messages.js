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