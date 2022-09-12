
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

// window.onload=function(){
//     printcomment()

    function printcomment (){
        const forms=document.forms;
        console.log(forms);
        const addForm=forms['com']
        addForm.addEventListener('submit', function(e){
            e.preventDefault();
            const value=addForm.querySelector('input[type="submit"]').value;
            console.log(value);
            const element=document.getElementById("send").innerHTML;
            document.getElementById("written").innerHTML=value

        });
    }



    