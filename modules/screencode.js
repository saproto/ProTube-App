// const { BrowserView } = require('electron');
// const logger = require('../utils/logger');
// let codeOSD;

// communicator.on('screencode-initializeCodeOSD', () => {
//     codeOSD = new BrowserView();
//     codeOSD.setAutoResize({ width: true, height: true, horizontal: true, vertical: true });
//     mainWindow.setBrowserView(codeOSD);
//     codeOSD.setBounds({ x: 0, y: 0, width: Number(process.env.CODE_SIZE), height: Number(process.env.CODE_SIZE) });
//     logger.screenCode(`Screencode initialized`)
// });

// communicator.on('screencode-newCode', (code) => {
//     logger.screenCode(`Displayed new sceencode: ${code}`)
//     codeOSD.webContents.loadURL(`file://${process.cwd()}/webpages/codeOSD/index.html?code=${code}`);
// });

// communicator.on('screencode-isVisible', (visibility) => {
//     //if(!visibility) codeOSD.hide();
//     //else codeOSD.show();
// });