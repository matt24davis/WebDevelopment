function undergrad(){
document.getElementById('undergradDisplay').style.display="block";
document.getElementById('gradDisplay').style.display="none"
}
function grad(){
    document.getElementById('gradDisplay').style.display="block"
    document.getElementById('undergradDisplay').style.display="none";
}


function calcGrade(){ 
    var grade1 = parseFloat(document.getElementById('underClass1').value);
    var grade2 = parseFloat(document.getElementById('underClass2').value);
    var grade3 = parseFloat(document.getElementById('underClass3').value);
    var grade4 = parseFloat(document.getElementById('underClass4').value);
    var final = (grade1 + grade2 + grade3 + grade4)/4
    var result = document.getElementById('result');


    if(!final){
        alert('Please select a grade for each class');
    }

     if (final < 3.2) {
    result.innerHTML = "Your GPA is " + final + ". Thank you for your interest in the undergraduate application. Sorry, you are inelibible to apply because your GPA does not meet the requirements.";
    document.getElementById("link").style.display="none";
    }
    else {
    result.innerHTML = "Your GPA is " + final + ". You are eligible to apply for a student position. Please follow this link to the application.";
    document.getElementById("link").style.display="block";
    
    }
}
