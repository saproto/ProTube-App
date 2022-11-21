require('dotenv').config();
const electron = require('electron');
const app = electron.app;
global.mainWindow; 
global.logger = require('./utils/logger');

const { enableAdBlocker } = require('./modules/adblocker');
// const soundboard = require('./modules/soundboard');

if(process.env.ALLOW_INSECURE_HTTPS) app.commandLine.appendSwitch('ignore-certificate-errors')

app.on('ready', () => {
    //setting up main window
    mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(process.env.SCREEN_URL);
    mainWindow.isClosable(true);
    mainWindow.isFullScreenable(true);
    
    enableAdBlocker();
    electron.session.defaultSession.clearStorageData([], (data) => {})

    electron.session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        details.requestHeaders['Authorization'] = `Bearer ${process.env.CLIENT_IDENTIFIER}`
        // details.requestHeaders['Cookie'] = `protube=${process.env.CLIENT_IDENTIFIER}`
        console.log('overwriting header...');
        console.log(details.requestHeaders);
        callback({ requestHeaders: details.requestHeaders })
    });

    logger.app(`Screen initialized!`);
});

// Modify the user agent for all requests to the following urls.
const filter = {
  urls: [`${process.env.SCREEN_COOKIE_URL}`]
}
