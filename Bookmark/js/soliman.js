
var arr=[];
var x=` `
var y=` `
var z=` `
var i=0;
function submitt()
{
    
    
    
    var input1=document.getElementById("first").value;
    var input2=document.getElementById("second").value;
    
    if(input1 == '')
    {
        x +=`<h4 class="alert  my-2">Name is required</h4>`
        document.getElementById("error1").innerHTML = x;
    }
 
 
    if
    (input2 == '')
    {
        
        y +=`<h4 class="alert  my-2">Url Field is required</h4>`
        document.getElementById("error2").innerHTML = y;
    }
    
    else
    {

        i+=1;
        var input1=document.getElementById("first").value;
        var input2=document.getElementById("second").value;
            var website={wname:input1  ,wurl:input2 };

            arr.push(website);
            localStorage.setItem("webstrore",JSON.stringify(arr))
            
            z+=`<div id="real" class="col-8 d-flex justify-content-between h-100 my-2">
            <div class=" align-content-center d-flex h-100">
            <h1 class="mt-4">`+input1+`</h1>
            </div>
            <div>
            <a href="`+input2+`"><button id="visit" onclick="visit()"  class=" py-2 my-5 bg-primary rounded border-0 px-4 text-white">Visit</button> </a>

            <button onclick="deletes(`+i+`)" class=" py-2 my-5 bg-danger rounded border-0 px-5 text-white">Delete</button>
            </div>
            </div>`
            document.getElementById("optional").innerHTML=z;


        

        

       
        
    }
    
    document.getElementById("first").value="";
    document.getElementById("second").value='';

    
}


function deletes(indexo){

    
arr.splice(indexo,1);
localStorage.setItem("webstore",JSON.stringify(arr))
display();

}
