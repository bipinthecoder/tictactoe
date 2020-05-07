var btn = document.querySelectorAll("button");
var table_data = document.querySelectorAll("td");
var count = 0;
var letter;
var base = 0;
var flag = false;


var obj = {
    player1: "X",
    player2: "O"
};

function display(i) {
    
    count++;
    if (count % 2 != 0) {
        letter = obj.player1;
    } else {
        letter = obj.player2;
    }
    table_data[i].textContent = letter;
    table_data[i].style.fontSize = 50;
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
    else if(count == 9){
        compare_data();
    }
    else{
        // console.log("Draw");
        console.log("It isn't 5 moves yet!!!")
    }
    if(count ==9 && flag == false){
        console.log("Draw");
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
                
                if ((table_data[base].textContent === table_data[r1c2].textContent) && (table_data[base].textContent === table_data[r1c3].textContent) &&(table_data[base].textContent == "X"|"Y")&&(table_data[r1c2].textContent != " ")&&(table_data[r1c3].textContent != " ")) {
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //horizontal 1
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[r2c1].textContent === table_data[r2c2].textContent) && (table_data[r2c1].textContent === table_data[r2c3].textContent)&&(table_data[r2c1].textContent == "X"|"Y")&&(table_data[r2c2].textContent != " ")&&(table_data[r2c3].textContent != " ")) {
                    if (table_data[r2c1].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //horizontal 2
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[r3c1].textContent === table_data[r3c2].textContent) && (table_data[r3c1].textContent === table_data[r3c3].textContent)&&(table_data[r3c1].textContent == "X"|"Y")&&(table_data[r3c2].textContent !== " ")&&(table_data[r3c3].textContent !== " ")) {
                    if (table_data[r3c1].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //horizontal 3
                        console.log("Player 2 Wins");
                        console.log(table_data[r3c1].textContent);
                        console.log(table_data[r3c2].textContent);
                        console.log(table_data[r3c3].textContent);
                        break foo;
                    }
                } else if ((table_data[base].textContent === table_data[r2c2].textContent) && (table_data[base].textContent === table_data[r3c3].textContent)&&(table_data[base].textContent == "X"|"Y")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c3].textContent != " ")){
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //diagonal 1
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[r1c3].textContent === table_data[r2c2].textContent) && (table_data[r1c3].textContent === table_data[r3c1].textContent)&&(table_data[r1c3].textContent == "X"|"Y")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c1].textContent != " ")) {
                    if (table_data[r1c3].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //diagonal 2
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[base].textContent === table_data[r2c1].textContent) && (table_data[base].textContent === table_data[r3c1].textContent)&&(table_data[base].textContent == "X"|"Y")&&(table_data[r2c1].textContent != " ")&&(table_data[r3c1].textContent != " ")) {
                    if (table_data[base].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //vertical 1
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[r1c2].textContent === table_data[r2c2].textContent) && (table_data[r1c2].textContent === table_data[r3c2].textContent)&&(table_data[r1c2].textContent == "X"|"Y")&&(table_data[r2c2].textContent != " ")&&(table_data[r3c2].textContent != " ")) {
                    if (table_data[r1c2].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { //vertical 2
                        console.log("Player 2 Wins");
                        flag = true;
                        break foo;
                    }
                } else if ((table_data[r1c3].textContent === table_data[r2c3].textContent) && (table_data[r1c3].textContent === table_data[r3c3].textContent)&&(table_data[r1c3].textContent == "X"|"Y")&&(table_data[r1c3].textContent != " ")&&(table_data[r2c3].textContent != " ")&&(table_data[r3c3].textContent != " ")) {
                    if (table_data[r1c3].textContent === obj.player1) {
                        console.log("Player 1 Wins");
                        flag = true;
                        break foo;
                    } else { // vertical 3
                        console.log("Player 2 Wins");
                        flag = true;                        
                        break foo;
                    }
                }   else {
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