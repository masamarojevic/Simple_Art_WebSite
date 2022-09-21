
		 function myResult(){
            console.log("hej inne") //check if i am in the function
         
         const forms=document.forms;//this is creating an object that contains the form
         const addForm=forms["minQuiz"];// here is where minQuiz form is added in that object container

         let quiz=[firstq,secondq,thirdq]; //declaration of the array with first,second and third question
         const fraga1=document.getElementsByName('moderna');//create a varible for first,second and third question
         const fraga2=document.getElementsByName('artist');
         const fraga3=document.getElementsByName('fashion');
         let fraga1res=false; //declare the correct answers to be false
         let fraga2res=false;
         let fraga3res=false;
         
         for(let i=0; i<quiz.length;i++){
            //first it will loop the right answer to one question
            console.log(quiz[i]);
            if (fraga1[i].checked == true) {     //this option to the question is checked and true
               if(fraga1[i].value == '1958') {  //correct answer to this option is the value of the right question
                fraga1res=true; //this answer is true
               }

            }
            console.log(quiz[i]);
            if (fraga2[i].checked == true) {
               if(fraga2[i].value == 'Vincent') {
                fraga2res=true;
               }

            }
            console.log(quiz[i]);
            if (fraga3[i].checked == true) {
               if(fraga3[i].value == 'Gianni') {
                fraga3res=true;
               }

            }

            
           
        }
        if(fraga1res|| fraga2res|| fraga3res){ //if those answers are true which they are then get alert
            
            alert("Congratulation! You answered all questions correctly! Contact us for further information.")
           
            
            
        }

        
        else{ //if answers are not then get message

            document.getElementById("resultq").innerHTML="More luck next time!"
            
        }
        }
        myResult() //we call upon the function
        
                
     