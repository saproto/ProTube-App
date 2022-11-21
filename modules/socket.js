// const socket = require('socket.io');
// const io = require('socket.io-client');
// const logger = require('../utils/logger');

// //initiate server connection with header+handshake authorization
// const server = io(process.env.SOCKET_URL, {
//   auth: {
//     token: process.env.CLIENT_IDENTIFIER //socket handshake token
//   },
//   reconnection: true,
//   autoConnect: true,
// });

// server.on('connect', () => {
//     logger.socket(`Server connection established`);
//     communicator.emit('screen-connectSucces');
//   });
  
//   //error on connection (most likely invalid token)
//   server.on('connect_error', err => {
//     logger.socket(`Connection failed! | ${err.message}`);
//   });
  
//   server.on('disconnect', () => {
//     logger.socket(`Connection lost!`);
//     communicator.emit('screen-disconnect');
//   })
  
//   server.on('newScreenCode', (code) => {
//     logger.socket(`Received new screen code: ${code}`);
//     communicator.emit('screencode-newCode', code);
//   });
  
//   server.on('playsound', (sound) => {
//     logger.socket(`Soundboard requested for ${sound}`);
//     communicator.emit('soundboard-playSound', sound);
//   })