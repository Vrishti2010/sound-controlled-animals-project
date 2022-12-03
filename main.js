function startclassification(){

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.classifier("https://teachablemachine.withgoogle.com/models/9iquqEt6C/model.json")
}

function modelready() {
    classifier.classify(got_results);
}

function got_results(error, results){

    if(error){
        console.error(error);
    }

    else{

        console.log(results)
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;

    }
}