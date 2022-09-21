


 window.onload=function(){
    printcomment()

    function printcomment (){
        
        console.log("hee");
        const forms=document.forms;
        console.log(forms);
        const addForm=forms['com']
        addForm.addEventListener('submit', function(e){ //here addeventlistener is added and is waiting for the user to click on the submit
            e.preventDefault();
            const value=addForm.querySelector('textarea').value;//selection of the area where the text will be written to later print it out
            console.log(value);
            
            document.getElementById("written").innerHTML="Your comment: " + value //the printout.you add in the comment and value to the html element

        });
    }
 }


 


    