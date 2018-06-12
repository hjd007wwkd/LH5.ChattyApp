export const changeName = (name = 'Annoymous', message) => ({
    type: 'change_name',
    name: name,
    message: message
})