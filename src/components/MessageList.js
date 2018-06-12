import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

const MessageList = (props) => {
    return (
        <main className="messages">
            {props.messages.map((eachMessage) => (
                <Message message={eachMessage}/>
            ))}
        </main>
    )
};

const messagesProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(messagesProps)(MessageList);
