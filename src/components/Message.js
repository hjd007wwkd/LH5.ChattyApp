import React from 'react';

const Message = (props) => {
    const username = props.message.username ? <span className="message-username">{props.message.username}</span> : false
    return (
        <div className="message">
            {username}            
            <span className="message-content">{props.message.message}</span>
        </div>
    )
}

export default Message;
