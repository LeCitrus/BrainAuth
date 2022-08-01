import { SerialPort } from "serialport";

let BAUD_RATE = 115200;
let PATH = "COM4";

// Create a port
try {
  const port = new SerialPort({
    path: PATH,
    baudRate: BAUD_RATE,
  });
  console.log("port successfully found: ", port);
  const l = port.read(10);
  console.log(typeof l);
  console.log(l);
} catch (err) {
  console.log("Error connecting to port: ", err);
}
