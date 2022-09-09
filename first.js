
window.onload=function(){
    printname()


function printname (){
    const forms = document.forms;
    console.log(forms);
    const addForm=forms['name']
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value=addForm.querySelector('input[type="text"]').value;
        console.log(value);
        const element=document.getElementById("username").innerHTML;
        document.getElementById("getanswer").innerHTML=value
    });
    
    
    
    
    
}
}


    