window.onload=function(){
    printname()


function printname (){
    console.log("mme");//checking if i am in the function
    const forms = document.forms;//this is creating an object that contains the form
    const addForm=forms['name']// here is where name form is added in that object container
    addForm.addEventListener('submit', function(e){  //here addeventlistener is added and is waiting for the user to click on the submit
        e.preventDefault();
        const value=addForm.querySelector('input[type="text"]').value;//selection of the area where the text will be written to later print it out
        console.log(value);
        const element=document.getElementById("username").innerHTML;
        
        document.getElementById("getanswer").innerHTML="Do not forget your username: " + value //the printout.you add in the comment and value to the html element

    });
    
    
    
    
    
}
}