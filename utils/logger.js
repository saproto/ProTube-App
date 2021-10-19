require('colors');

let prefix = {
    socket: '[SOCKET] '.yellow,
    soundBoard: '[SOUNDBOARD] '.magenta,
    screenCode: '[SCREEENCODE] '.green,
    app: '[APP] '.blue,
    adblocker: '[ADBLOCKER]'.red
}

exports.socket = message => {
    console.log(prefix.socket + message.yellow);
};

exports.soundboard = message => {
    console.log(prefix.soundBoard + message.magenta);
}

exports.screenCode = message => {
    console.log(prefix.screenCode + message.green);
}

exports.app = message => {
    console.log(prefix.app + message.blue);
}

exports.adblocker = message => {
    console.log(prefix.adblocker + message.red);
}