{
function getsumn(n){
    sum= (n*(n+1))/2
    return sum
}
let ans=getsumn(5)
console.log (ans)
}
// {  recursion method
    function getsum(n){
        if (n==10)
            return 0
        

        return getsum (n-1)+n;
    }
    console.log(getsum(25));

 {
    function areaoftrapezium(a,b,h){
        return(((a+b)/2)*h)

    }
    let ans= areaoftrapezium(10,20,8)
    console.log(ans)

 } 