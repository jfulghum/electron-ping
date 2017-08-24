const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('/Users/johannafulghum/Desktop/pic.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
    {label: 'Quit!', role: 'quit'},
    {label: 'Clickable', click(){console.log("We clicked!")}}


  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

})
