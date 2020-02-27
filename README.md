# Electron Audio Player for Streaming

**Clone and run for a quick way to see Electron in action.**

This applications is a Audio Player for Streaming, for this example I used the Hunter FM url.

**About the files.**

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `innosetup.iss` - Is the InnoSetup Script for make a .exe build.
- `renderer.js` - Is the logic of the app.
- `style.css` - Is the layout css.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) (I prefer Yarn) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/felipepanegalli/electron-audio-player-for-streaming
# Go into the repository
cd electron-audio-player-for-streaming
# Install dependencies
npm install
# Run the app
npm start
# Build the app
npm build
# Make installer (has errors, fix in future) Use the InnoSetup Script
npm setup
```