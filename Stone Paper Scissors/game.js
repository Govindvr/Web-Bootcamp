
function kindi(clicked) {
    var user_Score = 0;
    var comp_score = 0;

    var btn = document.getElementsByClassName("option");
    var user_choice;
    user_choice=clicked.id;
    console.log(user_choice);

    
    var num = Math.floor((Math.random() * 3) + 1);
    if (num == 1){
        var comp_choice="Rock";
        document.getElementById("padam").src="https://miro.medium.com/max/800/1*3X1eYQWyyKAg3r14-rZ2cA.jpeg";
        
        if(user_choice == "Rock"){
            document.getElementById("result").innerHTML= "Draw";
        }
        else if(user_choice == "Paper"){
            document.getElementById("result").innerHTML= "User won";
        }
        else{
            document.getElementById("result").innerHTML= "Computer won";
        }
    }
    else if (num == 2) {
        
        var comp_choice = "Paper";
        document.getElementById("padam").src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/crumbled-piece-of-paper-social-1617406895.jpg";
        
        if(user_choice == "Paper"){
            document.getElementById("result").innerHTML= "Draw";
        }
        else if(user_choice == "Scissors"){
            document.getElementById("result").innerHTML= "User won";
        }
        else{
            document.getElementById("result").innerHTML= "Computer won";
        }
    }
    else{
        var comp_choice="Scissors";
        document.getElementById("padam").src="https://rukminim1.flixcart.com/image/416/416/kcc9q4w0/scissor/u/t/n/professional-parlour-use-shear-haircut-barber-scissors-for-women-original-imafthuuemxjf4g8.jpeg?q=70";
        
        if(user_choice == "Scissors"){
            document.getElementById("result").innerHTML= "Draw";
        }
        else if(user_choice == "Rock"){
            document.getElementById("result").innerHTML= "User won";
        }
        else{
            document.getElementById("result").innerHTML= "Computer won";
        }
    }
    document.getElementById("systemchoice").innerHTML= "choice of computer is "+comp_choice;
    document.getElementById("userchoice").innerHTML= "choice of user is "+user_choice;
    
    

}  


