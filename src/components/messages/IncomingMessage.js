import React from 'react';

const IncomingMessage = (props) => {
    //regular exp to find http://as.asd.asd/asd.jpg/gif/png
    const recImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    //get the url from content
    const image = recImage.exec(props.message.content);
    //if there is image, change to image from url
    return(
        <div className="message">
            <span className="message-username" style={{color: props.message.color}}>{props.message.username}</span>          
            {image ? <span className="message-content"> {props.message.content.replace(recImage, ' see image below. ')} <br /> <img className='image_msg' src={image[0]}/></span> : <span className="message-content">{props.message.content}</span>}
        </div>
    )
}

export default IncomingMessage;