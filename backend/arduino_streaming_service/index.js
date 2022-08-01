import { SerialPort } from "serialport";
import { SerialPortStream } from "@serialport/stream";
import * as fs from "fs";

let BAUD_RATE = 115200;
let PATH = "COM4";

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

// Create a port
try {
  const port = new SerialPort({
    path: PATH,
    baudRate: BAUD_RATE,
  });
  // const stream = new SerialPortStream({
  //   path: PATH,
  //   baudRate: BAUD_RATE,
  // });
  // const r = stream.read();
  // console.log(r);
  console.log("port successfully found: ", port);
  const l = port.read(10);
  console.log(typeof l);
  console.log(l);
  logChunks(l);
} catch (err) {
  console.log("Error connecting to port: ", err);
}
