{
    function palindromechecker(str){
        let string = str.toLowerCase();
        for(let i=[0];i<string.length/2;++i){
            if(string[i] == string[string.length - 1 - i])
                return true
            else
                 return false
            
        }
    }
     const string="dad"
      console.log(palindromechecker(string))
}


{
    function numbertriangle(x) {
        for (let i = 1; i <= x; i++) {
            // console.log(x);
            let row = '';
            for (let y = 1; y <= i; y++) {
                row=x+y;
            } console.log(row);
        }
    } numbertriangle(10)
    
    
    
    
    
    
    
    
    
    
    
    
    
}