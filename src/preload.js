const path = require('path');
const url = require('url');

const customTitleBar = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
  // Title bar implementation
  new customTitleBar.Titlebar({
    backgroundColor: customTitleBar.Color.fromHex('#444'),
    icon: url.format(path.join(__dirname, 'icon/logo.ico')),
  });

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

