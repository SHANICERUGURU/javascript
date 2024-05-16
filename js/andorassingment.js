{
    let maths="pass"
    let english="fail"
    let chemistry="pass"
    let physics="fail"
    let kiswahili="pass"
    let history="fail"
    let geography="pass"

    if((maths=="pass")&&(kiswahili=="pass")&&(english=="pass")&&(chemistry=="pass")&&(physics="pass") &&(history=="pass") &&(geography=="pass"))
        {console.log("qualifies for all courses")}
         
   else if((maths=="pass")&&(kiswahili=="pass")&&(english=="pass")&&((history=="pass")||(geography=="pass"))){
        console.log("qualifies for journalism")}
    
     else if ((maths=="pass")&&((kiswahili=="pass")||(english=="pass"))&&((physics=="pass")||(chemistry=="pass"))){
        console.log("qualifies for engineering")
    }
     else if  ((maths=="pass")&&((kiswahili=="pass")||(english=="pass"))&&(chemistry=="pass") ((geography=="pass")||(history=="pass"))){
        console.log( "qualifies for medicine")
    }
    else if ((maths=="pass")&&((kiswahili=="pass")||(english=="pass")) &&((physics=="pass")||(chemistry=="pass")))
        {console.log("qualifies for computerscience")}
    else{
        console.log("does not qualify for any course")
    }
}