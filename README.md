# Local client
This is the local client application for ProTube of SaProto. It plays sounds from the sounboard it receives, displays the screen from the backend applicaton and displays the remotes authentication code.

## Installation
Open up a terminal and run 
```sh
npm install
```
To start he project run electron in the root, this is the macos command
```sh
./node_modules/electron/dist/Electron.app/Contents/MacOS/Electron .
```
This should start the remote and it shold connect to the backend app.

### Dotenv
###### CLIENT_IDENTIFIER
Local clients identification code for connecting to the backend application (it should be identical to the CLIENT_IDENTIFIER)
###### SOUND_LIBRARY_ABSOLUTE_PATH
Absolute path to the soundlibrary folder, used for the soundboard
###### SCREEN_URL
The url on which the backends screen is running (for dev most likely http://localhost:3000/protube/screen)
###### SOCKET_URL
The url on which the local client can create a socket connection to with the backend (for dev most likely http://localhost:3000/local-client)
###### CODE_SIZE
Relative size of the remote authentication code displayed inside the local client