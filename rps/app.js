let u_sc=0;
let c_s=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const cid=choice.getAttribute("id");
        playGame(cid);
    })
})

const genCompChoice=()=>{
    const opt=["rock","paper","scissor"];
    const randId=Math.floor(Math.random()*3);
    return opt[randId];
}
const playGame=(cid)=>{
    console.log("user choice is =" ,cid);
    const comp_choice=genCompChoice();
    console.log("comp chose",comp_choice)
    if(cid===comp_choice){
        draw_game();
    }else{
        user_win=true;
        if(cid==="rock"){
            user_win=comp_choice==="scissor"?true :false;
        }
        if(cid==="paper"){
            user_win=comp_choice==="scissor"?false:true;
        }
        if(cid==="scissor"){
            user_win=comp_choice==="rock"?false:true;
        }
        showWinner(user_win,cid,comp_choice);
    }


}
const draw_game=()=>{
    console.log("Game was Draw");
    msg.innerText="Draw!!"
    msg.style.backgroundColor="Aqua";
}

const showWinner=(user_win,cid,comp_choice)=>{
    if(user_win===true) {
        console.log("U win");
        msg.innerText=`You Win!Your ${cid} beats Computer's ${comp_choice}`;
        msg.style.backgroundColor="Green";
        u_sc++;
        userScore.innerText=u_sc;
    }else{
        console.log("Comp win");
        msg.innerText=`You Lost!Computer's ${cid} beats Your ${comp_choice}`;
        msg.style.backgroundColor="Red";
        c_s++;
        compScore.innerText=c_s;
    }
}