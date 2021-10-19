require('dotenv').config();
const electron = require('electron');
const app = electron.app;
global.mainWindow; 

const logger = require('./utils/logger');

//Create a global EventEmitter for all modules to communicate with each other
const {EventEmitter} = require('events');
global.communicator = new EventEmitter();

const adblocker = require('./modules/adblocker');
const screencode = require('./modules/screencode');
const socket = require('./modules/socket');
const screen = require('./modules/screen');
const soundboard = require('./modules/soundboard');


app.on('ready', () => {
    //setting up main window
    communicator.emit('screen-initializeMainWindow');
})
