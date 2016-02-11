# LightPi
A simple node server to control some led lights, connected to the GPIOs of a Raspberry Pi. This Repo is not maintained, but feel free to use this code according to the GNU GPL v3 license.

## Functionality:

- Toggle the status of a directly connected LED on the GPIO17 pin.

- Set the color of a RGB LED strip, using the RS232 interface of the Pi. The RGB values are sent as string <code>rrr,ggg,bbb!</code> to a microcontroller, which serves as an analog-digital-converter and controls the color of the RGB LEDs. 

- Turn the RGB LEDs off by sending the string <code>000,000,000!</code>.

## Running the server:

- Clone this repo onto your Pi.
- Start the server with <code>sudo node node_server.js</code>. <code>sudo</code> is needed because of the wiringPi library and the use of port 80.

## Requirements:

You will need [node.js](https://nodejs.org/en/), the [express](http://expressjs.com/) framework and eugeneware's [wiringPi](https://github.com/eugeneware/wiring-pi) library.

