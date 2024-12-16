const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.removeMenu()
    win.maximize()
    win.loadFile('app/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})