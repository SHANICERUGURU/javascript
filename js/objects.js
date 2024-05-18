{
    const car={
        type:"nissan",
        color:"blue",
        type:"Y789"

    }
    const car2={
        type:"honda",
        color:"white",
        type:"B2"}

        console.log(car.type)
        console.log(car2.color)
}


{
    const person1={
        firstname:"shanice",
        lastname:"ruguru",
        age:"17",
        fullname:function(){
            console.log(this.firstname + " "+ this.lastname)
        }
    
    }
    person1.firstname;
    person1.fullname()


    const person2={
        firstname:"ethan",
        lastname:"ndungu",
        age:"9"
    }
    
    const person={
        fname:"john",
        lname:"doe",
        yob:"2005",
        nameandyob:function(){
            console.log(this.fname+" " +this.lname +" " + this.yob) 
        },
        age:function (currentyear){
            return currentyear- this.yob
        }   

    }

    person.fname;
    person.nameandyob()
    console.log (person.age(2024))
}