let request = new XMLHttpRequest();

var url = "https://api.adviceslip.com/advice";

request.open('GET' , url , true);

//onload will make page load when opened 
request.onload = function(){
    
    //begin accessing JSON data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    //conditional onky populate when request is succesful 
    if (request.status >= 200 && request.status < 400){
        //fills advice object with advice from data
        advice.innerHTML = data.slip.advice;
    }
    
};

request.send();