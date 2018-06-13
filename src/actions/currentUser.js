
//this change current username
// format of name is 'username'
export const changeName = (name = 'Annoymous') => ({
    type: 'change_name',
    name: name
});