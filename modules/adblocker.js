const { ElectronBlocker, Request } = require('@cliqz/adblocker-electron');
const fetch = require('cross-fetch');
const logger = require('../utils/logger');

communicator.on('adblocker-enable', () => {
  ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInSession(mainWindow.webContents.session);
    blocker.on('request-blocked', (request = Request) => {
      //logger.adblocker(`blocked: ${request.tabId} from: ${request.url}`);
    });
  });
  logger.adblocker('Enabled adblocker!');
});