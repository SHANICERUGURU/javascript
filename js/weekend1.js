{
    
    function fizzbuzz(n){
      for(let k=0;k<=n;++k){
         if((k%3==0)&&(k%6==0))(
            console.log("fizzbuzz")
        )
          else if(k%6==0)(
            console.log("buzz")
          )
          else if (k%3==0)(
            console.log("fizz")
        )
          
          else(
            console.log(k)
          )
          }
  
    }
    fizzbuzz(100)
  }
