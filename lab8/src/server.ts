import * as http from 'http'
import * as websocket from 'ws'
// import '../styles/style.scss'

const server = http.createServer();
const socket = new websocket.Server({server});
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      broadcast(message.toString());      
      console.log('received: %s', message);
    });
  
    ws.send('New user connected!');
  });

function broadcast(data: string): void {
    socket.clients.forEach(client => {
      client.send(data);
    });	
};

server.listen(8080, () => console.log('Listening on port 8080...!'));