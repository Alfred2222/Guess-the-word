player1_score=0
player2_score=0

name_player1=localStorage.getItem("player1_name")
name_player2=localStorage.getItem("player2_name")

document.getElementById("player1_name").innerHTML=name_player1+":"
document.getElementById("player1_score").innerHTML=player1_score

document.getElementById("player2_name").innerHTML=name_player2+":"
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("qturn").innerHTML="Question turn -"+name_player1
document.getElementById("aturn").innerHTML="Answer turn -"+name_player2

function sent(){
    console.log("inside sent function")
    get_word=document.getElementById("word").value
    console.log(get_word)
    word=get_word.toLowerCase();
    console.log(word)
    console.log("word in lower case ="+word)

    charAt1=word.charAt(1)
    console.log(charAt1)

    length_divided2=Math.floor(word.length/2)
    charAt2=word.charAt(length_divided2)

    length_1=word.length-1
    charAt3=word.charAt(length_1)

    removeAtCharAt1=word.replace(charAt1,"_")
    removeAtCharAt2=removeAtCharAt1.replace(charAt2,"_")
    removeAtCharAt3=removeAtCharAt2.replace(charAt3,"_")
    console.log(removeAtCharAt3)

    q_word="<h4 id='word_display'>Q. "+removeAtCharAt3+"</h4>";
    input_box="</br> Answer: <input type='text' id='input_check_box'>";
    check_button="</br></br><button class='btn btn-info' onclick='check()'> CHECK </button>";
    row=q_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    
}




question_turn="player_1"
answer_turn="player_2"

function check(){
get_answer=document.getElementById("input_check_box").value
answer=get_answer.toLowerCase()
console.log("answer in lower case ="+answer)

if(answer==word){
    if(answer_turn=="player_1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score
    }
}
if(question_turn=="player_1"){
question_turn="player_2"
document.getElementById("qturn").innerHTML="Question turn-"+name_player2
}
else{
    question_turn="player_1"
    document.getElementById("qturn").innerHTML="Question turn-"+name_player1
    } 
    
    if(answer_turn=="player_1"){
        answer_turn="player_2"
        document.getElementById("aturn").innerHTML="Answer turn-"+name_player2
        }
        else{
            answer_turn="player_1"
            document.getElementById("aturn").innerHTML="Answer turn-"+name_player1
            } 
}

