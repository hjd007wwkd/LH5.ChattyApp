import React from 'react';

const DisconnectNotification = (props) => {
    return(
        <div className="message system" style={{color: 'red'}}>
            {props.message.content}
        </div>
    )
}

export default DisconnectNotification;