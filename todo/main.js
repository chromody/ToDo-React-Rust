const { app, BrowserWindow } = require('electron');
const path = require("path");
const { spawn } = require('child_process');

// Path to your Rust executable
const rocketServer = process.platform === 'win32' 
  ? path.join(__dirname, './backend.exe')
  : path.join(__dirname, './backend');

let rocketProcess = null;

function startRocketServer() {
  rocketProcess = spawn(rocketServer);

  rocketProcess.stdout.on('data', (data) => {
    console.log(`Backend stdout: ${data}`);
  });

  rocketProcess.stderr.on('data', (data) => {
    console.error(`Backend stderr: ${data}`);
  });

  rocketProcess.on('close', (code) => {
    console.log(`Backend process exited with code ${code}`);
  });
}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Check if we're in development or production
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // In development, load from React dev server
    win.loadURL('http://localhost:3000');
    // Open DevTools automatically (optional)
    win.webContents.openDevTools();
  } else {
    // In production, load the built React app
    win.loadFile(path.join(__dirname, '../build/index.html'));
  }
}

app.whenReady().then(() => {
  startRocketServer();
  createWindow();
});

// Handle window behavior on macOS
app.on('window-all-closed', () => {
  if (rocketProcess) {
    rocketProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});