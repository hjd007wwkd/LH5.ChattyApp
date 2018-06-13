import React from 'react';
import HandleMessages from './HandleMessages';
import {connect} from 'react-redux';

//it contain all the messages, it is message container
class MessageList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidUpdate() {
        //scroll to bottom every message
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    render(){
        return (
            <main className="messages col-xs-9">
                    {this.props.messages.map((eachMessage, index) => (
                        <HandleMessages key={index} message={eachMessage}/>
                    ))}
                    {/*keep scroll down to this to into view, ref is to get the info of tag*/}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
            </main>
        );
    } 
};

//to get messages from state
const messagesProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(messagesProps)(MessageList);
