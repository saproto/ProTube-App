const musicPlayer = require("sound-play");
const { BrowserWindow } = require('electron');
const logger = require('../utils/logger');
let soundBoardWindow;

communicator.on('soundboard-initializeSoundBoard', () => {
    soundBoardWindow = new BrowserWindow({ width: 800, height: 600, parent: mainWindow ,modal: true, show: false})
    soundBoardWindow.setBackgroundColor("#242f3f");
    logger.soundboard(`Soundboard initialized`);
});

communicator.on('soundboard-playSound', (sound) => {
    communicator.emit('screen-muteMainWindow', true);

    soundBoardWindow.setSize(mainWindow.getSize()[0], mainWindow.getSize()[1], false); //set overlay to protube screens format
    soundBoardWindow.loadURL(`file://${process.cwd()}/webpages/audio_playing/index.html?sound=${sound}`);  //set text to the soundboard screen
    soundBoardWindow.show();
    //soundboardWin.webContents.openDevTools();
    
    logger.soundboard(`Playing sound ${sound}`);

    //play the soundboard sound
    musicPlayer.play(`${process.env.SOUND_LIBRARY_ABSOLUTE_PATH}${sound}`).catch((err) => {
      //catch errors and resume as if nothing happened
      logger.soundboard(`Error during playing of ${process.env.SOUND_LIBRARY_ABSOLUTE_PATH}${sound}: ${err}`);
      soundBoardWindow.hide();

      communicator.emit('screen-muteMainWindow', false);
    }).then((response) => {
      //audio finished, resume protube
      logger.soundboard(`Playing sound ${sound} finished, resumed protube screen`);
      soundBoardWindow.hide();

      communicator.emit('screen-muteMainWindow', false);
    });  
});
