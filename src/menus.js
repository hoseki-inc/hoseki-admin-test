const { app, Menu } = require('electron');

const isMac = process.platform === 'darwin';

const template = [
    // { role: 'appMenu' },
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'quit' },
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            {
                label: 'Open File',
                click: async () => {
                    console.log('Open File');
                }
            }
        ]

    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                        { role: 'startSpeaking' },
                        { role: 'stopSpeaking' }
                    ]
                }
            ]
                : [
                    { role: 'delete' },
                    { type: 'separator' },
                    { role: 'selectAll' }
                ])
        ]
    }
]

const mainMenu = Menu.buildFromTemplate(template);



const ctxTemplate = [
    { label: 'Options',
        submenu: [
            {
                label: 'Do something crazy',
                click: async () => {
                    console.log('Crazy shit is happening');
                }
            }
        ] },
    { label: 'Some More Options',
        submenu: [
            {
                label: 'Stinky Ricky',
                click: () => {
                    alert('Caca frita!');
                }
            }
        ]
    },
    { type: 'separator' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { type: 'separator' },
    { label: 'Item 5' },
    { label: 'Item 6' },
    { type: 'separator' },
    { label: 'Item 7' },
    { label: 'Item 8' },
]

const ctxMenu = Menu.buildFromTemplate(ctxTemplate);

module.exports = {
    mainMenu,
    ctxMenu
}
