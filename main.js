const electron = require('electron')
let win

const {app, BrowserWindow} = electron
app.on('ready', ()=>{
    win = new BrowserWindow({
        height : 1000,
        width: 1000,
        webPreferences : {
            nodeIntegration: true
        }
    })
    win.loadFile('templates/index.html')
})
