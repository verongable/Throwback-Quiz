//Access Modal
const modal = document.getElementById("modal");
//Access Play Again button
const playAgain = document.querySelector(".play-again-btn");
playAgain.addEventListener('click', refreshPage);

//Reloads page on click. Goes to top of the page.
function refreshPage(){
    window.scrollTo(0,0)
    window.location.reload();
}//When user clicks submit
document.getElementById('quiz').onsubmit = function (){

    const modal = document.getElementById("modal");
    //Displays modal
    modal.style.display = "block";

    //Checks value of input user selects
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
    q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
    q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
    q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);
    q10 = parseInt(document.querySelector('input[name = "q10"]:checked').value);
    //Adds results
    score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10;
    document.getElementById('score').innerHTML = "Your score is: " + score + "/10";
    //Depending on score, img changes
    if (score == 0 || score == 1) {score2 = "You seem to be musically challenged. Better luck next time! <br /><img src='./images/poor.gif' width='450' />"};
    if (score == 2) {score2 = "You seem to be musically challenged. Better luck next time! <br /><img src='./images/poor.gif' width='450' />"};

    if (score == 3 || score == 4) {score2 = "Not the worst. But certainly not the best! <br /><img src='./images/eh.gif' width='400' />"};
    if (score == 5) {score2 = "Not the worst. But certainly not the best! <br /><img src='./images/eh.gif' width='400' />"};

    if (score == 6 || score == 7) {score2 = "Not too bad. I'm impressed!<br /><img src='./images/good.gif' width='450' />"};
    if (score == 8) {score2 = "Not too bad. I'm impressed! <br /><img src='./images/good.gif' width='450' />"};

    if (score == 9 || score == 10) {score2 = "You're a music genius! <br /><img src='./images/bestscore.gif' width='450' />"};
    //Gives user their score
    document.getElementById("score2").innerHTML = score2; 

    return false; //keeps browser from refreshing 
}

























// //HTML elements stored in variables
// const quizContainer = document.getElementById('quiz');
// const scoreContainer = document.getElementById('score');
// const submitButton = document.getElementById('submit');

// //Functions
// function buildQuiz() {

// }

// function displayResults() {

// }

// //run quiz immediately
// buildQuiz ();

// //when user submits, show the results
// submitButton.addEventListener('click', displayResults);