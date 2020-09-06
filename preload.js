// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const { ipcRenderer } = require('electron');

process.once('loaded', () => {
  window.addEventListener('message', event => {
    
    const message = event.data;

    

    if (message.myTypeField === 'Open Window') {
      
      ipcRenderer.send('custom-message', message);
    }
  });
});

  





