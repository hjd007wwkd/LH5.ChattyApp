import React from 'react';

const Message = (props) => {
    switch(props.message.type) {
        case "post_message":
            return (
                <div className="message">
                    <span className="message-username">{props.message.username}</span>           
                    <span className="message-content">{props.message.content}</span>
                </div>
            )
        case "incoming_message":
            return (
                <div className="message">
                    <span className="message-username">{props.message.username}</span>          
                    <span className="message-content">{props.message.content}</span>
                </div>
            )
        case "post_notification":
            return (
                <div className="message system">
                    {props.message.content}
                </div>
            )
        case "incoming_notification":
            return (
                <div className="message system">
                    {props.message.content}
                </div>
            )
    }
}

export default Message;
