function addUser(){
    name1 = document.getElementById("player1_name_input").value;
    name2 = document.getElementById("player2_name_input").value;


    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);

    //window.location="quiz_game.html"
    if(name1 =="" || name2 == ""){
        alert("Please Enter Username")
    }
    else{
        window.location="quiz_game.html"
}
}
