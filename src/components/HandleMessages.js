import React from 'react';
import IncomingMessage from './messages/IncomingMessage';
import PostMessage from './messages/PostMessage';
import IncomingNotification from './messages/IncomingNotification';
import PostNotification from './messages/PostNotification';
import ConnectNotification from './messages/ConnectNotification';
import DisconnectNotification from './messages/DisconnectNotification';

//handle each type of message
const HandleMessages = (props) => {
    switch(props.message.type) {
        case "post_message":
            return <PostMessage message={props.message}/>
        case "incoming_message":   
            return <IncomingMessage message={props.message}/>
        case "post_notification":
            return <PostNotification message={props.message}/>
        case "incoming_notification":
            return <IncomingNotification message={props.message}/>
        case "connect_notification":
            return <ConnectNotification message={props.message}/>
        case "disconnect_notification":
            return <DisconnectNotification message={props.message}/>
    };
};

export default HandleMessages;
