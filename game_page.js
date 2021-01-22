player1_name = localStorage.getItem("name1");
player2_name = localStorage.getItem("name2")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :   "
document.getElementById("player2_name").innerHTML = player2_name + " :   "

document.getElementById("player1_score").innerHTML = " "+player1_score;
document.getElementById("player2_score").innerHTML = " " +player1_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name

operation = document.getElementById("operation").Selectedvalue;
function send(){

selectElement = document.querySelector("#operation");               
output =  selectElement.options[selectElement.selectedIndex].value; 
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
if(output == "+"){
    actual_answer = parseInt(number1) + parseInt(number2)
}
else if(output== "-")
{
    actual_answer = parseInt(number1) - parseInt(number2)
}
else if(output== "X")
{
    actual_answer = parseInt(number1) * parseInt(number2)
}
else
{
    actual_answer = parseInt(number1) / parseInt(number2)
}

question_number = "<h4>" + number1 + output + number2 + "</h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'>" 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button
document.getElementById("output").innerHTML = row
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
question_turn = "player1"
answer_turn = "player2"
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score=player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;

    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;

    }
    document.getElementById("output").innerHTML = "";
}
