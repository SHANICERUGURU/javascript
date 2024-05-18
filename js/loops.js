 {
     for (i=0;i<=10;++i)(
     console.log("today is thursday" + i)
 )
}
 {
   const arr=[34,64,98,76,69]
   console.log(arr)
   for( let i=0;i<arr.length;i++){
      arr[i]= arr[i]+2;
    }
    console.log(arr)}
{
    let n=5;
    let sum=0;
    for(let k=0;k<=n;k++)
        sum=sum+k
    console.log(sum)
 }

 {
     for(let i=0;i<=10;i+=10){
        console.log("hello world"+" "+ i)
    }
 }
 {
function shownumbers(n){
      for(k=0;k<=n;k+=2){
         console.log(k)
      }
     }

  shownumbers(10)
 }

 {
   function shownumbersinreverse(r){
    for(let z=r;z>=0;--z){
        console.log(z)

    }

    }
   shownumbersinreverse(17)
        
 }

{
    let sum=0
  function multiplesoffive(n){
    for(let k=0;k<=n;++k){
        sum=sum+k
      if((k%5==0)||(k%10==0))(
            console.log(sum)
        )
        }

  }
  multiplesoffive(100)
}

{
   function indices (a,e){
    prod=1;
    for(let i=1; i<=e; i++){
        prod=prod*a}

    return prod;


   }
//    console.log( indices(3,4))

}

{
    
    // arrays
    
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getsumevennumbers(){
        sum=0
        for(let i=0;i<=numbers.length-1;++i){
            if(numbers[i]%2==0){
            sum=sum+numbers[i]
                }
        }
       return sum
    }
    //  console.log(getsumevennumbers()
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getgreatest(){
        let currentgreatest = numbers[0]
        for (let i = 0; i < numbers.length; i ++){
            if(numbers[i] > currentgreatest){
                currentgreatest = numbers[i];
            }
        }
        return currentgreatest;
    }
    console.log(getgreatest())

}



