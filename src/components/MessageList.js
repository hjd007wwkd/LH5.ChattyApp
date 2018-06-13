import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

class MessageList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    render(){
        return (
            <main className="messages col-xs-9">
                    {this.props.messages.map((eachMessage, index) => (
                        <Message key={index} message={eachMessage}/>
                    ))}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
            </main>
        )
    } 
};

const messagesProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(messagesProps)(MessageList);
