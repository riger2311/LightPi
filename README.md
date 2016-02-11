# LightPi
A simple node server to control some led lights, connected to the GPIOs of a Raspberry Pi. This Repo is not maintained, but feel free to use this code according to the GNU GPL v3 license.

## Functionality:

Toggle the status of a directly connected LED on the GPIO17 pin.

Set the color of a RGB LED strip, using the RS232 interface of the Pi. The RGB values are sent as string "rrr,ggg,bbb!" to a microcontroller, which serves as an analog-digital-converter and controls the color of the RGB LEDs. 

Turn the RGB LEDs off by sending the string "000,000,000!".
