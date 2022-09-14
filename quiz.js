
		 function myResult(){
         
         const forms=document.forms;
         const addForm=forms["minQuiz"]
         let firstq=addForm.querySelector('#correct1').value;
         let secondq=addForm.querySelector('#correct2').value;
         let thirdq=addForm.querySelector('#correct3').value;
         let quiz=[firstq,secondq,thirdq];
         for(let i=0; i<quiz.length;i++){
            console.log(quiz[i]);
           
         }
         if(firstq==correct1 || secondq==correct2 || thirdq==correct3){
            alert("Congratulation! You answered all questions correctly! Contact us for further information.")
        }
        else{
            document.getElementById("resultq").innerHTML="More luck next time!"
        }
        }
        
                
     