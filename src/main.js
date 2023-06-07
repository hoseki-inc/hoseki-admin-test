const electron = require('electron');
const { app, BrowserWindow, ipcMain, dialog, Notification, Menu, Tray } = electron;
const { mainMenu, ctxMenu } = require('/Users/bear/projects/electron-test/hoseki-admin/src/menus');
const path = require('path');
require('update-electron-app')();





const options = {
  title: 'Ricky is super gay',
  body: 'He sniffs Danilo\'s farts with delight',
  icon: path.join(__dirname, '/Users/bear/projects/electron-test/hoseki-admin/src/images/logo@1x.png'),
  hasReply: true,
  replyPlaceholder: 'Reply to the message',
  urgency: 'critical',
  closeButtonText: 'Close',
  actions: [{
    type: 'button',
    text: 'Button text'
  }]
};

const customNotification = () => {
  const notification = new Notification(options);
  notification.show();
}

const context = () => {
  ctxMenu.popup();
}

// App hot reload
try {
  require('electron-reloader')(module)
} catch (e){
  console.log(e);
}


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
};



function handleSetTitle (event, title) {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  win.setTitle(title)
}

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (!canceled) {
    return filePaths[0];
  }
}

const NOTIFICATION_TITLE = 'Suck My Ass'
const NOTIFICATION_BODY = 'Notification from Danilo\'s Gooch'



const showNotification = () => {
  new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
    icon: path.join(__dirname, './icon/logo.ico')
  }).show()
}

const createWindow = () => {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: '/Users/bear/Users/bear/projects/electron-test/hoseki-admin/src/images/logo@3x.png',
    frame: true,
    trafficLightPosition: {
      x: 735,
      y: 5,
    },
    width: 1600,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: true,
    },
  });

  mainWindow.setWindowButtonVisibility(true);

  Menu.setApplicationMenu(mainMenu);

  mainWindow.webContents.on('context-menu', (e) => {
      e.preventDefault();
      context();
    }
  );



  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();




};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {

  ipcMain.on('set-title', handleSetTitle);
  ipcMain.handle('dialog:openFile', handleFileOpen);
  ipcMain.handle('custom-notification', customNotification);
  ipcMain.handle('ctx-alert', context);
  // ipcMain.handle('show-notification', showNotification);
  const appIcon = new Tray('/Users/bear/projects/electron-test/hoseki-admin/src/images/logo@3x.png');
  createWindow();
  showNotification();

  console.log(appIcon, mainWindow);

});


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('close', () => {
  app.quit();
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

