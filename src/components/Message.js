import React from 'react';

const Message = (props) => {
    const recImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    switch(props.message.type) {
        case "post_message":
            const postImage = recImage.exec(props.message.content);
            return (
                <div className="message">
                    <span className="message-username" style={{color: props.message.color}}>{props.message.username}</span>           
                    {postImage ? <span className="message-content"> {props.message.content.replace(recImage, ' see image below. ')} <br /> <img className='image_msg' src={postImage[0]}/></span> : <span className="message-content">{props.message.content}</span>} 
                </div>
            )
        case "incoming_message":
            const incomingImage = recImage.exec(props.message.content);
            return (
                <div className="message">
                    <span className="message-username" style={{color: props.message.color}}>{props.message.username}</span>          
                    {incomingImage ? <span className="message-content"> {props.message.content.replace(recImage, ' see image below. ')} <br /> <img className='image_msg' src={incomingImage[0]}/></span> : <span className="message-content">{props.message.content}</span>}
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
        case "connect_notification":
            return (
                <div className="message system" style={{color: 'blue'}}>
                    {props.message.content}
                </div>
            )
        case "disconnect_notification":
            return (
                <div className="message system" style={{color: 'red'}}>
                    {props.message.content}
                </div>
            )
    }
}

export default Message;
