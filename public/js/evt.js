

var conutl1 = 0 ;
var conutl2 = 0 ;
var conutl3 = 0 ;

var https = "http://";
var id = "192.168.1.40";

function led1_on(){
    $(".pic_light1").css("fill","white");
}
function led1_off(){
    $(".pic_light1").css("fill","black");
}

function led2_on(){
    $(".pic_light2").css("fill","white");
}
function led2_off(){
    $(".pic_light2").css("fill","black");
}

function led3_on(){
    $(".pic_light3").css("fill","white");
}
function led3_off(){
    $(".pic_light3").css("fill","black");
}

$( document ).ready(function() {

    $( "#eq1" ).click(function() {
        conutl1 ++;

        if(parseInt(conutl1) == 1){
            var st = "/led1-on";
            var url = https + id + st;

            $(this).load( url, function(){
                $(".leds1 .status").text("ON")
            });
            led1_on();
        }
        if(parseInt(conutl1) == 2){
            var st = "/led1-off";
            var url = https + id + st;
            $(this).load( url, function(){
                $(".leds1 .status").text("OFF")
            });
            led1_off();
            conutl1 = 0;
        }
    });
    $( "#eq2" ).click(function() {
        conutl2 ++;
        if(parseInt(conutl2) == 1){
            var st = "/led2-on";
            var url = https + id + st;

            $(this).load( url, function(){
                $(".leds2 .status").text("ON")
            });
            led2_on();
        }
        if(parseInt(conutl2) == 2){

            var st = "/led2-off";
            var url = https + id + st;

            $(this).load( url, function(){
                $(".leds2 .status").text("OFF")
            });
            led2_off();
            conutl2 = 0;
        }
    });
    $( "#eq3" ).click(function() {
        conutl3 ++;
        if(parseInt(conutl3) == 1){
            var st = "/led3-on";
            var url = https + id + st;

            $(this).load( url, function(){
                $(".leds3 .status").text("ON")
            });
            led3_on();
        }
        if(parseInt(conutl3) == 2){
            var st = "/led3-off";
            var url = https + id + st;

            $(this).load( url, function(){
                $(".leds3 .status").text("OFF")
            });
            led3_off();
            conutl3 = 0;
        }
    });
});