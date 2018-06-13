import React from 'react';

const ConnectNotification = (props) => {
    return(
        <div className="message system" style={{color: 'blue'}}>
            {props.message.content}
        </div>
    )
}

export default ConnectNotification;