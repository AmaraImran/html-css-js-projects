const questions=[
    {
        question:"Which is the largest animal on Earth?",
        answers:[
            {text:"shark" ,correct:false},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
            {text:"Blue Whale", correct:true},
            
        ]

    }
    ,{
        question:"What is the largest planet in our solar system?",
        answers:[
            {text:"Earth" ,correct:false},
            {text:"jupyter", correct:true},
            {text:"Uranus", correct:false},
            {text:"saturn", correct:false},
            
        ] 
    },
    {
        question:"What was the name of the famous ship that sank in 1912?",
        answers:[
            {text:"Olympic" ,correct:false},
            {text:"Titanic", correct:true},
            {text:"Lusitania", correct:false},
            {text:"Britannic", correct:false},
            
        ]
    },
    {
        question:"Which river is the longest??",
        answers:[
            {text:"Amazon River" ,correct:true},
            {text:"Orinoco", correct:false},
            {text:"Parana River", correct:false},
            {text:"Magdalena", correct:false},
            
        ]
    },
    {
        question:" MAXIMUM AGE OF TURTLE IS?",
        answers:[{text:'56', correct:false},
       {text:'75' ,correct:true},
       {text:"105",correct:false},
       {text:"15",correct:false}
        ]
    },
{
    question:"Which is the largest Ocean in the World?",
    answers:[{text:'pacific ocean', correct:true},
   {text:'Atlantic Ocean' ,correct:false},
   {text:"Antarctic Ocean",correct:false},
   {text:"indian ocean",correct:false}
   
    ]
},{
    question:" Bull is the logo of Which Car?",
    answers:[{text:'Lamborgni', correct:true},
   {text:'Ferrari' ,correct:false},
   {text:"Mcclaren",correct:false},
   {text:"Rolls Royce",correct:false}
    ]
}

];
const questionelemet=document.getElementById("question");
const answerbtn=document.getElementById('options');
const nextbtn=document.getElementById('next-btn');
let crntquestionindex=0;
score=0;
function startquiz(){
    crntquestionindex=0;
    score=0;
    nextbtn.innerText="Next";
    showQuestions();
}
function resetState(){
    nextbtn.style.display='none';
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function showQuestions(){
    resetState();
    let currentquestion=questions[crntquestionindex];
    let questionno=crntquestionindex+1;
    questionelemet.innerHTML=questionno+ "."+currentquestion.question;
    currentquestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn')
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectanswer)

    });
}
function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==='true';
    if(iscorrect){
        selectedbtn.classList.add("Correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('Correct');
        }
        button.disabled='true';

    });
    nextbtn.style.display='block';

}
function showScore(){
    resetState();
    questionelemet.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML='play Again';
    nextbtn.style.display='block';
}
function handlenextbtn(){
    crntquestionindex++;
    if(crntquestionindex<questions.length){
        showQuestions();}
        else{showScore()}
}
nextbtn.addEventListener("click",()=>{
    if(crntquestionindex<questions.length){
        handlenextbtn()
    }
    else{
        startquiz();
    }
})
startquiz();