import React from 'react';

const IncomingNotification = (props) => {
    return(
        <div className="message system">
            {props.message.content}
        </div>
    )
}

export default IncomingNotification;