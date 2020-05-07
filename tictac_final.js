var btn = document.querySelectorAll("button");
var table_data = document.querySelectorAll("td");
var count = 0;
var letter;
var base = 0;
var player1_message = document.getElementById("player1_status");
var player2_message = document.getElementById("player2_status");
var message = "You Win";
var player1_id = document.getElementById("p1_name");
var player2_id = document.getElementById("p2_name");
var player1_name;
var player2_name;
var first_player;
var second_player;
var z = -1;


var obj = {
    player1: "X",
    player2: "O"
};

player1_id.addEventListener('keydown',function(){
    first_player = logname(player1_id);
    console.log(first_player);
    
 });
 player2_id.addEventListener('keydown',function(){
    second_player =logname(player2_id);
    console.log(second_player);
    
 });

function display(i) {

    count++;
    z ++;
    if(z == 0 || z == 2 || z == 4 || z == 6 || z == 8){
        player1_message.textContent = second_player +"'s turn" ;
        player2_message.textContent = " " ;
    }
    else{
        player2_message.textContent = first_player +"'s turn" ;
        player1_message.textContent = " " ;
    }
    if (count % 2 != 0) {
        letter = obj.player1;
        //player1_message.textContent = first_player +"'s turn" ;
    }
     else {
        letter = obj.player2;
        //player2_message.textContent = second_player +"s turn" ;
    }
    table_data[i].textContent = letter;
    table_data[i].style.fontSize = 50;
    // console.log(table_data[i].textContent);
    if(count % 2 == 0){
        table_data[i].style.color = "white";
    }
    if(count ==5){
        compare_data();
    }
    else if(count == 6){
        compare_data();
    }
    else if(count == 7){
        compare_data();
    }
    else if(count == 8){
        compare_data();
    }
    else{
        compare_data();
    }
}
    function compare_data(){
        foo: {  
                var r1c2 = base + 1;
                var r1c3 = base + 2;
                var r2c1 = base + 3;
                var r2c2 = base + 4;
                var r2c3 = base + 5;
                var r3c1 = base + 6;
                var r3c2 = base + 7;
                var r3c3 = base + 8;

                if ((table_data[base].textContent === table_data[r1c2].textContent) && (table_data[base].textContent === table_data[r1c3].textContent) &&(table_data[base].textContent != " ")&&(table_data[r1c2].textContent != " ")&&(table_data[r1c3].textContent != " ")) {
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        
                        break foo;
                    } else { //horizontal 1
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        
                        break foo;
                    }
                } else if ((table_data[r2c1].textContent === table_data[r2c2].textContent) && (table_data[r2c1].textContent === table_data[r2c3].textContent)&&(table_data[r2c1].textContent != " ")&&(table_data[r2c2].textContent != " ")&&(table_data[r2c3].textContent != " ")) {
                    if (table_data[r2c1].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //horizontal 2
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[r3c1].textContent === table_data[r3c2].textContent) && (table_data[r3c1].textContent === table_data[r3c3].textContent)&&(table_data[r3c1].textContent != " ")&&(table_data[r3c2].textContent != " ")&&(table_data[r3c3].textContent != " ")) {
                    if (table_data[r3c1].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //horizontal 3
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[base].textContent === table_data[r2c2].textContent) && (table_data[base].textContent === table_data[r3c3].textContent)&&(table_data[base].textContent != " ")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c3].textContent != " ")){
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //diagonal 1
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[r1c3].textContent === table_data[r2c2].textContent) && (table_data[r1c3].textContent === table_data[r3c1].textContent)&&(table_data[r1c3].textContent != " ")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c1].textContent != " ")) {
                    if (table_data[r1c3].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //diagonal 2
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[base].textContent === table_data[r2c1].textContent) && (table_data[base].textContent === table_data[r3c1].textContent)&&(table_data[base].textContent != " ")&&(table_data[r2c1].textContent != " ")&&(table_data[r3c1].textContent != " ")) {
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //vertical 1
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[r1c2].textContent === table_data[r2c2].textContent) && (table_data[r1c2].textContent === table_data[r3c2].textContent)&&(table_data[r1c2].textContent != " ")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c2].textContent != " ")) {
                    if (table_data[r1c2].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { //vertical 2
                        console.log("Player 2 Wins");
                        player2_message.textContent = message;
                        break foo;
                    }
                } else if ((table_data[r1c3].textContent === table_data[r2c3].textContent) && (table_data[r1c3].textContent === table_data[r3c3].textContent)&&(table_data[r1c3].textContent != " ")&&(table_data[r1c3].textContent != " ")&&(table_data[r2c3].textContent != " ")&&(table_data[r3c3].textContent != " ")) {
                    if (table_data[r1c3].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        player1_message.textContent = message;
                        break foo;
                    } else { // vertical 3
                        console.log("Player 2 Wins");
                        console.log(table_data[r1c3].textContent);
                        console.log(table_data[r2c3].textContent);
                        player2_message.textContent = message;
                        break foo;
                    }
                } else {
                    break foo;
            }
        }
    }
btn.forEach(element => {
    element.addEventListener("click", function () {
        display(element.id);
        // console.log(element.id);
        // console.log("working fine")
    });

}); 


function logname(id){
    name = id.value;
    return name;
    
}