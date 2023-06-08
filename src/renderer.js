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

import '../css/main.css';


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

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  /** @type {HTMLElement} */
  const el = e.target;

  const table = el?.closest('.table');

  console.log({table});

  if(table) {

    /**
     * @type {HTMLElement}
     */
    const row = el?.closest('.row');

    if (row) {

      console.log({

        name: row.getAttribute('name'),
        age: row.getAttribute('age'),
        job: row.getAttribute('job'),
      });

      window.electronAPI.headingMenu({
        name: row.getAttribute('name'),
        age: row.getAttribute('age'),
        job: row.getAttribute('job'),
      });
    }
  }
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  e.target.name === 'Tyler' ? window.electronAPI.nameMenu({
    name: e.target.name,
    age: e.target.age,
    job: e.target.job,
  }) : null;
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  window.electronAPI.contextMenu();
});


/// Get the button and dialog elements
const openDialogButton = document.getElementById('openDialogButton');
const infoDialog = document.getElementById('infoDialog');

// Get the input elements
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const jobInput = document.getElementById('jobInput');

// Get the table element
const table = document.querySelector('.table.jobs');

// Listen for button click to open the dialog
openDialogButton.addEventListener('click', () => {
  infoDialog.showModal();
});

// Get the OK button inside the dialog
const okButton = document.getElementById('okButton');

// Listen for click on the OK button
okButton.addEventListener('click', () => {
  // Get the input values
  const name = nameInput.value;
  const age = ageInput.value;
  const job = jobInput.value;

  // Create a new row
  const newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.setAttribute('name', name);
  newRow.setAttribute('age', age);
  newRow.setAttribute('job', job);

  // Create cell elements and set their content
  const nameCell = document.createElement('div');
  nameCell.classList.add('cell');
  nameCell.textContent = name;

  const ageCell = document.createElement('div');
  ageCell.classList.add('cell');
  ageCell.textContent = age;

  const jobCell = document.createElement('div');
  jobCell.classList.add('cell');
  jobCell.textContent = job;

  // Append the cells to the new row
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(jobCell);

  // Append the new row to the table
  table.appendChild(newRow);

  // Clear the input fields
  nameInput.value = '';
  ageInput.value = '';
  jobInput.value = '';

  // Close the dialog
  infoDialog.close();
});


