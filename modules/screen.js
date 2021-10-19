const { BrowserWindow } = require('electron');
const logger = require('../utils/logger');

communicator.on('screen-initializeMainWindow', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    //fancy loading screen before it has connected to protube
    mainWindow.loadURL(`file://${process.cwd()}/webpages/loading_screen/index.html`);
    mainWindow.isClosable(true);
    mainWindow.isFullScreenable(true);
    
    communicator.emit('soundboard-initializeSoundBoard');
    
    communicator.emit('adblocker-enable');

    logger.app(`Screen initialized!`);
});

communicator.on('screen-disconnect', () => {
    mainWindow.loadURL(`file://${process.cwd()}/webpages/loading_screen/index.html`);
    communicator.emit('screencode-isVisible', false);
    logger.app(`Loaded loadingscreen`);
});

communicator.on('screen-connectSucces', () => {
    mainWindow.loadURL(process.env.SCREEN_URL);
    logger.app(`Loaded protube`);
    communicator.emit('screencode-initializeCodeOSD');
});

communicator.emit('screen-muteMainWindow', (isMuted) => {
    mainWindow.webContents.setAudioMuted(isMuted);
    logger.app(`Muted app: ${isMuted}`);
});