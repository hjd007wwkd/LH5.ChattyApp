import React from 'react';
import {connect} from 'react-redux';
import {incomingMessage, incomingNotification} from '../actions/messages';
import Nav from './Nav';
import ChatBar from './ChatBar';
import MessageList from './MessageList';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.socket =  new WebSocket('ws://0.0.0.0:3001');
    }
    componentDidMount() {
        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            if(message.type === "incomingNotification"){
                this.props.dispatch(incomingNotification(message))
            } else if(message.type === "incomingMessage"){
                this.props.dispatch(incomingMessage(message))
            }
        }
    }

    render(){
        return(
            <React.Fragment>
                <Nav />
                <MessageList/>
                <ChatBar socket={this.socket}/>
            </React.Fragment>
        )
    }
}

export default connect()(Main);