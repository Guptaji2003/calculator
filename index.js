let result=document.querySelector("#result");
// result.data=999;
let data="";
function calculate(s){
   if(s==='='){
    data=eval(data);
    result.value=data;
    //  console.log(eval(data));
     return;
    }else if(s==='C'){
        data="";
    result.value=data;

        return;
    }else if(data===""&&s==='='){
        // data="";
    result.value="";
return;
    }else if(s==='DEL'){
        data=data.slice(0,-1);
    }else{
   data+=s;
    }

   result.value=data;
//    console.log(data);
   
   
}

const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
button.addEventListener("click",(e)=>
calculate(e.target.innerHTML)  
)
})