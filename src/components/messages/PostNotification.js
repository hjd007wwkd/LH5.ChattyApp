import React from 'react';

const PostNotification = (props) => {
    return(
        <div className="message system">
            {props.message.content}
        </div>
    )
}

export default PostNotification;