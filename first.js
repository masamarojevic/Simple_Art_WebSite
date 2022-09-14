
window.onload=function(){
    printname()


function printname (){
    console.log("mme");
    const forms = document.forms;
    console.log(forms);
    const addForm=forms['name']
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value=addForm.querySelector('input[type="text"]').value;
        console.log(value);
        
        document.getElementById("getanswer").innerHTML=value
    });
    
    
    
    
    
}
}

 window.onload=function(){
    printcomment()

    function printcomment (){
        
        console.log("hee");
        const forms=document.forms;
        console.log(forms);
        const addForm=forms['com']
        addForm.addEventListener('submit', function(e){
            e.preventDefault();
            const value=addForm.querySelector('textarea').value;
            console.log(value);
            
            document.getElementById("written").innerHTML=value

        });
    }
 }


 


    