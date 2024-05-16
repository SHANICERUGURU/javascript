let a=9
switch(a){
    case 3:
        console.log("a is 3")
        break;
        case 5:
            console.log("a is five")
            break;
            default:
                console.log("value not found")

}

{
    let a=20
    let x=a%3
    switch(x){
      case 0:
          console.log("a is divisible by three")
          break;
       default:
          console.log("a is not divisible by three")
    }
}
{
    let a=5
    let r=(a%2)==0
    switch(r){
        case true:
            console.log("a is an even number")
            break;
        default:
                console.log( "a is odd")
    }
    
}