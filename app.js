
 var num3 = Math.floor(Math.random()*10);







    document.querySelectorAll("button")[0].addEventListener("click" , function (){

        var num = document.getElementById("userInput1");

        var num2 = (num.value)

        

       

        

        if(num2>num3)
        {
            document.querySelectorAll("h2")[0].innerHTML =  "Your Guess is too high";

        }
        else if(num2<num3)
        {
            document.querySelectorAll("h2")[0].innerHTML =  "Your Guess is too low";
        }
        else
        {
            document.querySelectorAll("h2")[0].innerHTML =  "You GOt it . Burrah ! " ;
        }


        
    });