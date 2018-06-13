import React from 'react';
import {connect} from 'react-redux';
import {changeName} from '../actions/currentUser';

//chatbar on the bottom
class Chatbar extends React.Component{
    constructor(props) {
        super(props);
        this.handleUsernameKeyPress = this.handleUsernameKeyPress.bind(this);
        this.handleMessageKeyPress = this.handleMessageKeyPress.bind(this);
    }

    //when you type username and press enter
    handleUsernameKeyPress(e){
        if (e.key === 'Enter'){
            let name = e.target.value;
            //when you delete the username, back to Anonymous
            if(name === ''){
                name = 'Anonymous';
            };
            this.props.dispatch(changeName(name));
            this.props.socket.send(JSON.stringify({type: 'change_name', username: name}));
            this.props.socket.send(JSON.stringify({type: 'post_notification', content: `${this.props.currentUsername} changed their name to ${name}`}));
        };
    }

    //when you type message and press enter
    handleMessageKeyPress(e){
        if (e.key === 'Enter'){
            this.props.socket.send(JSON.stringify({type: 'post_message', content: e.target.value, username: this.props.currentUsername}));
            e.target.value = '';
        };
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" name='username' onKeyPress={this.handleUsernameKeyPress} placeholder="Your Name (Optional)" />
                <input className="chatbar-message" name='message' onKeyPress={this.handleMessageKeyPress} placeholder="Type a message and hit ENTER" />
            </footer>
        );
    }
};

//get current username from state
const currentUsername = (state) => {
    return {
        currentUsername: state.currentUser.name
    };
};

export default connect(currentUsername)(Chatbar);