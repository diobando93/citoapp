const electron = require('electron')
let win

const {app, BrowserWindow} = electron
app.on('ready', ()=>{
    win = new BrowserWindow({
        height : 500,
        width: 400,
        webPreferences : {
            nodeIntegration: true
        }
    })
    win.loadFile('templates/index.html')
})
