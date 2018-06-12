import React from 'react';
import {connect} from 'react-redux';
import {outcomingMessage, outcomingNotification} from '../actions/messages';
import {changeName} from '../actions/currentUser';

class Chatbar extends React.Component{
    constructor(props) {
        super(props)
        this.handleUsernameKeyPress = this.handleUsernameKeyPress.bind(this);
        this.handleMessageKeyPress = this.handleMessageKeyPress.bind(this);
    }

    handleUsernameKeyPress(e){
        if (e.key === 'Enter'){
            this.props.dispatch(changeName(e.target.value, {message: `${this.props.currentUsername} changed their name to ${e.target.value}`}));
        }
    }

    handleMessageKeyPress(e){
        if (e.key === 'Enter'){
            this.props.dispatch(outcomingMessage({username: this.props.currentUsername, message: e.target.value}));
            e.target.value = '';
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" name='username' onKeyPress={this.handleUsernameKeyPress} placeholder="Your Name (Optional)" />
                <input className="chatbar-message" name='message' onKeyPress={this.handleMessageKeyPress} placeholder="Type a message and hit ENTER" />
            </footer>
        )
    }
}

const currentUsername = (state) => {
    return {
        currentUsername: state.currentUser.name
    }
}

export default connect(currentUsername)(Chatbar);