import { remote } from 'electron';
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// ipcRenderer.on('main-render', (event: Event, args: string) => {
//   alert(args);
//   let sender = event.sender;
//   alert("sender is ipcrenderer:");
//   ipcRenderer.send('render-main', 'render-main');
// });
let win = new remote.BrowserWindow();
setInterval(() => {
  console.log("I'm in renderer process ", win);
}, 5 * 1000);