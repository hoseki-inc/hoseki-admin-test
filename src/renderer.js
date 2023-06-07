/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';


// const path = require('path');

console.log('👋 This message is being logged by "renderer.js", included via Vite');

// const triggerAlert = () => {
//     alert('Danilo brushes his teeth with anchovy paste and hotdog water!');
// }

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

const btn2 = document.getElementById('btn2');
const filePathElement = document.getElementById('filePath');

btn2.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

// const NOTIFICATION_TITLE = 'Title'
// const NOTIFICATION_BODY =
//   'Notification from the Renderer process. Click to log to console.'
// const CLICK_MESSAGE = 'Notification clicked'

// new Notification(
//   NOTIFICATION_TITLE,
//   {
//     body: NOTIFICATION_BODY,
//     icon: path.join(__dirname, './icon/logo.ico')
//    }).onclick =
//   () => console.log(CLICK_MESSAGE)


const btn = document.querySelector('.alert');

btn.addEventListener('click', function(e) {
  window.electronAPI.customNotification();
});




