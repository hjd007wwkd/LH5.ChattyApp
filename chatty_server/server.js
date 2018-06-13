const express = require('express');
const SocketServer = require('ws');
const uuid = require('uuid');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

function randomColor(){
    const digit = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d'];
    let color = '#'
    for(let i = 0; i < 6; i++){
        const randomNum = Math.floor(Math.random()*14);
        color += digit[randomNum];
    }
    return color;
}

function sendUserList(socket){
    const userList = [];
    socket.clients.forEach(function each(client){
        if (client.readyState === SocketServer.OPEN){
            userList.push(client.username);
        }
    })
    socket.clients.forEach(function each(client){
        if (client.readyState === SocketServer.OPEN){
            client.send(JSON.stringify({type: 'change_userList', userList: userList}));
        }
    })
}

function sendConDisMessage(socket, username, status){
    let content;
    let type;
    if(status === 'connect'){
        type = 'connect_notification'
        content = `${username} is connected`
    } else if (status === 'disconnect'){
        type = 'disconnect_notification'
        content = `${username} is disconnected`
    }
    socket.clients.forEach(function each(client){
        if (client.readyState === SocketServer.OPEN){
            client.send(JSON.stringify({type: type, content: content}));
        }
    })
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.username = 'Annoymous'+ (wss.clients.size);
    ws.color = randomColor();
    sendConDisMessage(wss, ws.username, 'connect');
    ws.send(JSON.stringify({type: 'change_username', username: ws.username}));
    sendUserList(wss);

    ws.on('message', function incoming(message) {
        const messageJSON = JSON.parse(message);
        messageJSON.color = ws.color;

        if(messageJSON.type === 'change_name'){
            ws.username = messageJSON.username;
            sendUserList(wss);
        } else {
            const messageType = messageJSON.type.split('_');
            messageJSON.id = uuid();

            wss.clients.forEach(function each(client) {
                if (client.readyState === SocketServer.OPEN) {
                    if(client === ws){
                        messageType[0] = 'post';
                    } else {
                        messageType[0] = 'incoming';
                    }
                    messageJSON.type = messageType.join('_');
                    client.send(JSON.stringify(messageJSON));
                }
            })
        }
    });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
      console.log('Client disconnected')
      sendConDisMessage(wss, ws.username, 'disconnect');
      sendUserList(wss);
    });
});