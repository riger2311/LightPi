/**
 * Created by riger2311 on 31.01.16.
 */

//elements $(p)
//classes $('.class')
//id $('#id')

//see http://wiringpi.com/pins/
//and https://github.com/eugeneware/wiring-pi/blob/master/DOCUMENTATION.md#serial

$(document).ready(function(){


    $('#color_button').click(function(event){

        $.post("index.html", {
            color_value: "#000000"
        }, function(data, status){});

    });


    $('#color_picker').on('change', function(){

        $.post("index.html", {
            color_value: $('#color_picker').val()
        }, function(data, status){});
    });


    $('#toggle_led_button').click(function(event){

    });


    //from http://www.html5canvastutorials.com/labs/html5-canvas-color-picker/

});

