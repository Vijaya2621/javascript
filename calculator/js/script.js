let str="";
function fun(valu){
   
    if(valu=="Del"){
        str=str.slice(0,-1);
        document.getElementById("disp").value=str;
        
    }
    else if(valu=="C"){
      str="";
      document.getElementById("disp").value=str;
    }
    
   else if(valu!=="=" ){
        str=str+valu;
        document.getElementById("disp").value=str;
    }
    else if(valu=="=")
    {
        document.getElementById("disp").value=eval(str);
    }
   
}