// -- Libraries --
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var wpi = require('wiring-pi');

// -- LED Spots --
var ledSpotPin = 0;
var ledSpotValue = 0;

// -- Serial Connection --
var serialDevice = "/dev/ttyAMA0";
var baudRate = 9600;



// ---------------------
// -- Wiring PI Setup --
wpi.setup('wpi');
wpi.pinMode(ledSpotPin, wpi.OUTPUT);

// ----------------
// -- WEB Server --
app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', function(req, res) {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.post('/*', function(req, res){

    if(req.body.color_value){
        console.log("Got POST data: " + req.body.color_value);
        writeToSerial(req.body.color_value);
    } else {
        toggleLEDSpot();
    }

    res.status(200).sendFile(__dirname + '/index.html');
});
app.listen(80);


// -------------------
// -- Functionality --
function toggleLEDSpot(){
    ledSpotValue = invertPinValue(wpi.digitalRead(ledSpotPin));
    console.log("Toggling LED with new value " + ledSpotValue);
    wpi.digitalWrite(ledSpotPin, ledSpotValue);

}

function writeToSerial(color){
    var rgbColor = hexToRgb(color);
    var fd = wpi.serialOpen(serialDevice, baudRate); //standard file descriptor
    console.log("Beginning serial transmission with: " + rgbColor);

//    do{
        wpi.serialPuts(fd, rgbColor + "!");
        wpi.serialFlush(fd);
//    } while (wpi.serialGetchar(fd) != "0"); //will block for 10 seconds

    wpi.serialClose(fd);
    console.log("Finished serial transmission.");
}

//from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return leftPad(r,3) + "," + leftPad(g,3) + "," + leftPad(b,3);
}

//inverting the value binary-wise, because js doesn't support casts...
function invertPinValue(value){
    if(value == 1){
        return 0;
    } else {
        return 1;
    }
}

http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}