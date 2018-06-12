import React from 'react';
import {connect} from 'react-redux';
import {incomingMessage, incomingNotification, postMessage, postNotification} from '../actions/messages';
import {changeUserList} from '../actions/userList';
import {changeName} from '../actions/currentUser';
import Nav from './Nav';
import ChatBar from './ChatBar';
import MessageList from './MessageList';
import UserList from './UserList';

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
            switch(message.type) {
                case "incoming_notification":
                    this.props.dispatch(incomingNotification(message));
                    break;
                case "incoming_message":
                    this.props.dispatch(incomingMessage(message));
                    break;
                case "post_notification":
                    this.props.dispatch(postNotification(message));
                    break;
                case "post_message":
                    this.props.dispatch(postMessage(message))
                    break;
                case "change_userList":
                    this.props.dispatch(changeUserList(message.userList))
                    break;
                case "change_username":
                    this.props.dispatch(changeName(message.username))
                    break;
                default:
                    throw new Error("Unknown event type " + message.type);
            }
        }
    }

    render(){
        return(
            <React.Fragment>
                <Nav />
                <div className='row'>
                    <div className='col-md-9'>
                        <MessageList/>
                        <ChatBar socket={this.socket}/>
                    </div>
                    <div className='col-md-3'>
                        <UserList />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect()(Main);