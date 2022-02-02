





function getInputValue(){
    

     var e = document.getElementById("myList");
     var inputVal=e.value;
     var inputVa2 = document.getElementById("myRange").value;
     var inputVa3 = document.getElementById("amount").value;
     var result=inputVa3*inputVal*inputVa2/100;
     
  
   
     document.getElementById("result").innerHTML = "If you deposit " + "<span class='highlight'>" + inputVa3 + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + inputVa2 + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + result + "</span>" + ", <br> in the year " + "<span class='highlight'>" + inputVal + "</span>";
   


    
    

    
  return false;

}



