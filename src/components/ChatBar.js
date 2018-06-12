import React from 'react';
import {connect} from 'react-redux';
import {changeName} from '../actions/currentUser';

class Chatbar extends React.Component{
    constructor(props) {
        super(props)
        this.handleUsernameKeyPress = this.handleUsernameKeyPress.bind(this);
        this.handleMessageKeyPress = this.handleMessageKeyPress.bind(this);
    }

    handleUsernameKeyPress(e){
        if (e.key === 'Enter'){
            let name = e.target.value;
            if(name === ''){
                name = 'Anonymous'
            }
            this.props.dispatch(changeName(name));
            this.props.socket.send(JSON.stringify({type: 'incomingNotification', content: `${this.props.currentUsername} changed their name to ${name}`}));
        }
    }

    handleMessageKeyPress(e){
        if (e.key === 'Enter'){
            this.props.socket.send(JSON.stringify({type: 'incomingMessage', content: e.target.value, username: this.props.currentUsername}));
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