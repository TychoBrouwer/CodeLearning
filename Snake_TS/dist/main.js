var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
// include the Node.js 'path' module
var path = require('path');
// modify your existing openApplication() function
function openApplication() {
    var win = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.setAutoHideMenuBar(true);
    win.setMenuBarVisibility(false);
    win.loadFile(path.join(__dirname, "../index.html"));
}
app.whenReady().then(function () {
    openApplication();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0)
            openApplication();
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
//# sourceMappingURL=main.js.map