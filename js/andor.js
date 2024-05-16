// {
//     let age=21;
//     let gender="male";

// if((age>=18) && (gender == "male")){
//     console.log("allowed in")
// }else{
//     console.log("not allowed")
// }
// }


{
    let maths="pass"
    let english="fail"
    let chemistry="fail"
    let physics="pass"
    let kiswahili="pass"

    if((maths=="pass")&&(kiswahili=="pass")&&(english=="pass")&&(chemistry=="pass")&&(physics="pass"))
        {console.log("qualifies for all courses")}
         
   else if((maths=="pass")&&(kiswahili=="pass")&&(english=="pass")){
        console.log("qualifies for journalism")}
    
     else if ((maths=="pass")&&(kiswahili=="pass")||(english=="pass")&&(physics=="pass")){
        console.log("qualifies for engineering")
    }
     else if  ((maths=="pass")&&(kiswahili=="pass")||(english=="pass")&&(chemistry=="pass")){
        console.log( "qualifies for medicine")
    }
    else if ((maths=="pass")&&((kiswahili=="pass")||(english=="pass")))
        {console.log("qualifies for computerscience")}
    else{
        console.log("does not qualify for any course")
    }
    
    }


