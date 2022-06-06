
Webcam.set({
    width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById('camera').value;

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LLS9YKHEE/model.json',modelLoaded);
function check(){
    img = document.getElementById('captured');
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
if (error){
    console.error(error);
}else{
    console.log(gotResult);
document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}
function modelLoaded(){
    console.log('Model Loaded!');
}