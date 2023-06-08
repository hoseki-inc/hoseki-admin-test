const { contextBridge, ipcRenderer, ipcMain } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  customNotification: () => ipcRenderer.invoke('custom-notification'),
  headingMenu: (data) => ipcRenderer.invoke('heading-menu', data),
  nameMenu: (data) => ipcRenderer.invoke('name-menu', data),
})





