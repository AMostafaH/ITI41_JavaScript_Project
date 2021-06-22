/*================ Start Quiz ==================*/

function check()
{
    var answer1 = document.getElementById("firstQuestion");
    var answer2 = document.getElementById("secondQuestion");
    var answer3 = document.getElementById("thirdQuestion");
    var answer4 = document.getElementById("fourthQuestion");
    var answer5 = document.getElementById("fifthQuestion");

    var score = 0;
    
    if(answer1.value.toLowerCase() == "cairo")
    {
        score += 20;
        answer1.value = "";
    } else {
        answer1.value = "Correct Answer Is Cairo";
    }
    /*------------------------------------------------*/
    if(answer2.value.toLowerCase() == "doha")
    {
        score += 20;
        answer2.value = "";
    } else {
        answer2.value = "Correct Answer Is Doha";
    }
    /*------------------------------------------------*/
    if(answer3.value.toLowerCase() == "paris")
    {
        score += 20;
        answer3.value = ""; 
    } else {
        answer3.value = "Correct Answer Is Paris";
    }
    /*------------------------------------------------*/
    if(answer4.value.toLowerCase() == "rome")
    {
        score += 20;
        answer4.value = "";
    } else {
        answer4.value = "Correct Answer Is Rome";
    }
    /*------------------------------------------------*/
    if(answer5.value.toLowerCase() == "lisbon")
    {
        score += 20;
        answer5.value = "";
    }
    else {
        answer5.value = "Correct Answer Is Lisbon";
    }
    /*------------------------------------------------*/
    alert("Your Score is "+score+ " of 100")
}
/*================ End Quiz ==================*/
