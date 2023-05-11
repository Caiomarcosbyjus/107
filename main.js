function StartClassification(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/YvgwT9SzK/model.json",modelRead)
}
function modelRead(){
    classifier.classify(gotResult)
}
function gotResult(error,results){
console.log(results)
if(error){
    console.error(error)
}
else{
    rondnumberred= Math.floor(Math.random()*255)+1
    rondnumbergreen= Math.floor(Math.random()*255)+1
    rondnumberblue= Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML="posso ouvir"+ results[0].label
    document.getElementById("result_confidence").innerHTML="posso ouvir"+ results[0].label
    img1 = document.getElementById("alien1")
    img2 = document.getElementById("alien2")
    img3 = document.getElementById("alien3")
    img4 = document.getElementById("alien4")
if(results[0].label=="palmas"){
    img1.src="aliens-01.gif"
    img2.src="aliens-02.png"
    img3.src="aliens-03.png"
    img4.src="aliens-04.png"
}else if(results[0].label=="son de chuva"){
    img1.src="aliens-01.png"
    img2.src="aliens-02.gif"
    img3.src="aliens-03.png"
    img4.src="aliens-04.png"

}else if(results[0].label=="batidas"){
    img1.src="aliens-01.png"
    img2.src="aliens-02.png"
    img3.src="aliens-03.gif"
    img4.src="aliens-04.png"
}else if(results[0].label=="uuuu"){
    img1.src="aliens-01.png"
    img2.src="aliens-02.png"
    img3.src="aliens-03.png"
    img4.src="aliens-04.gif"}
}}