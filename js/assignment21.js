{
    function palindromechecker(str){
        let string = str.toLowerCase();
        for(let i=[0];i<string.length/2;++i){
            if(string[i] == string[string.length - 1 - i])
                console.log("false")
            else(
                 console.log("true")
            )
        }
    }
     const string="a man, a plan, a canal, panama"
      console.log(palindromechecker(string))
} 