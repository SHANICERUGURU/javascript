{
    const numbers= [56,78,89,90]
    function maxvalueinarray(arr){
        let currentgreatest = numbers[0]
        for (let i of arr){
            if(i > currentgreatest){
                currentgreatest = i;
            }
        }
        return currentgreatest;
    }
    console.log(maxvalueinarray(numbers));
}

{
    const numbers= [56,78,89,90]
    function maxvalueinarray(arr){
        let currentgreatest = numbers[0]
        for (let i in arr){
            if(numbers[i] > currentgreatest){
                currentgreatest = numbers[i];
            }
        }
        return currentgreatest;
    }
    console.log(maxvalueinarray(numbers));
}


// while loops
{
    let x=0;
    while(x<=10){
        console.log(x) 
         x++
    }
  

}

{
    const numbers= [56,78,89,90]
    function getsum(arr){
    let x=0;
    sum=0;
    while(x<arr.length){
       
        sum=sum+arr[x]
        x++
    }
    
    
    return sum

}
console.log(getsum(numbers))
}