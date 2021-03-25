var flag=1;

function func(e){
    let button = document.getElementById(e);
    if (flag==1){
        button.value="X";
        button.disabled=true;
        flag=0;
    }else{
        button.value="O";
        button.disabled=true;
        flag=1;
    }
    computeResult();
}

function computeResult(){

    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    //Checking the winning condition for Row 1
    //if( !!b1 && !! b2 && !! b3)
    if( b1 == 'X' && b2 == 'X' && b3 == 'X'){
        declareWinner('X');
    }else  if( b1 == 'O' && b2 == 'O' && b3 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for Row 2
    else if( b4 == 'X' && b5 == 'X' && b6 == 'X'){
        declareWinner('X');
    }else  if( b4 == 'O' && b5 == 'O' && b6 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for Row 3
    else if( b7 == 'X' && b8 == 'X' && b9 == 'X'){
        declareWinner('X');
    }else  if( b7 == 'O' && b8 == 'O' && b9 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for Col 1 
    else if( b1 == 'X' && b4 == 'X' && b7 == 'X'){
        declareWinner('X');
    }else  if( b1 == 'O' && b4 == 'O' && b7 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for Col 2
    else if( b2 == 'X' && b5 == 'X' && b8 == 'X'){
        declareWinner('X');
    }else  if( b2 == 'O' && b5 == 'O' && b8 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for Col 3
    else if( b3 == 'X' && b6 == 'X' && b9 == 'X'){
        declareWinner('X');
    }else  if( b3 == 'O' && b6 == 'O' && b9 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for diagnol \
    else if( b1 == 'X' && b5 == 'X' && b9 == 'X'){
        declareWinner('X');
    }else  if( b1 == 'O' && b5 == 'O' && b9 == 'O'){
        declareWinner('O');
    }
    //Checking the winning condition for diagnol /
    else if( b3 == 'X' && b5 == 'X' && b7 == 'X'){
        declareWinner('X');
    }else  if( b3 == 'O' && b5 == 'O' && b7 == 'O'){
        declareWinner('O');
    }
    //Tie Condition
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' 
    || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
    b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
    b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('result').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }else {
    // Here, Printing Result
        if (flag == 1) {
            document.getElementById('result')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('result')
                .innerHTML = "Player 0 Turn";
        }
    }
}

function declareWinner(val){
    let result = document.getElementById('result');
    const buttons= document.querySelectorAll('.button');

    result.innerHTML="Player "+ val + " won!";
    buttons.forEach(disableButton);
    //buttons.disabled=true;
    window.alert("Player "+ val + " won!");
}

function disableButton(item, index) {
    item.disabled=true;
}

// Function to reset game
function reset() {
    location.reload();
    const buttons= document.querySelectorAll('.button');
    buttons.forEach(clearValue);
}

function clearValue (item){
    item.value='';
    flag=1;

}