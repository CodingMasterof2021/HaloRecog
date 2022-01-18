Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

var obj = "Can not recognize";
var acc = "0%";

function check() {
    document.getElementById("Obj").innerHTML = obj;
    document.getElementById("Acc").innerHTML = acc;
}