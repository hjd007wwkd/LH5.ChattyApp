import React from 'react';
import Nav from './Nav';
import ChatBar from './ChatBar';
import MessageList from './MessageList';

class Main extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <React.Fragment>
                <Nav />
                <MessageList />
                <ChatBar />
            </React.Fragment>
        )
    }
}

export default Main;