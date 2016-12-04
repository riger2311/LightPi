# LightPi
A simple node server to control some led lights via a webbrowser. The LEDs are connected to the GPIOs of a Raspberry Pi. This Repo is not maintained, but feel free to use this code according to the GNU GPL v3 license.

## Functionality:

- Toggle the status of a directly connected LED on the GPIO17 pin.

- Set the color of a RGB LED strip, using the RS232 interface of the Pi. The RGB values are sent as string <code>rrr,ggg,bbb!</code> to a microcontroller, which serves as an analog-digital-converter and controls the color of the RGB LEDs. 

- Turn the RGB LEDs off by sending the string <code>000,000,000!</code>.

## Running the server:

- Clone this repo onto your Pi.
- Start the server with <code>sudo node node_server.js</code>. <code>sudo</code> is needed because of the wiringPi library and the use of port 80.

## Requirements:

You will need [node.js](https://nodejs.org/en/), the [express](http://expressjs.com/) framework with the [body-parser](https://github.com/expressjs/body-parser) and eugeneware's [wiringPi](https://github.com/eugeneware/wiring-pi) library.

## Autostart:

To start the server when the after the Pi booted, you can add a startup script to your <code>/etc/rc.local</code>. Every script in there will be run with <code>sudo</code>-rights, so you don't need that in your script.

First create a script with the content
<code>
node /full/path/to/cloned/repository/node_server.js &
<code>

Ensure that your script is executable with <code>chmod +x yourStartScript.sh</code>.

Then, add your script to </code>/etc/rc.local</code>, right before <code>exit</code> is called, so that it looks like 
<code>
#!/bin/sh -e

# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
  printf "My IP address is %s\n" "$_IP"
fi

/path/to/your/script/yourStartScript.sh

exit 0
</code>
