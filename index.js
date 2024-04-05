const { SerialPort } = require('serialport');

// List serial ports
SerialPort.list().then(ports => {
  console.log('Available serial ports:');
  ports.forEach(portInfo => {
    console.log('Port path:', portInfo.path); // Log the path of each serial port
    const port = new SerialPort(portInfo.path); // Create a new SerialPort instance for each port
    
    // Listen for data
    port.on('data', data => {
      console.log('Received data:', data.toString());
    });
    
    // Handle errors
    port.on('error', err => {
      console.error('Error:', err);
    });
    
    // Close the port when done
    // port.close();
  });
}).catch(err => {
  console.error('Error listing serial ports:', err);
});

