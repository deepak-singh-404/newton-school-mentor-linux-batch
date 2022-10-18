
/*
Object 
1- properties
2- method

*/

/*
Getter => to get properties of an object
Setter => to oupdate value of property of an object.
*/


// class School{
//     constructor(name, address){
//         this.name = name
//         this.address = address
//     }
    
//     //Setter (name)
//     setName(name){
//         this.name = name
//         return this.name
//     }

//     //Setter (address)
//     setAddress(address){
//         this.address = address
//         return this.address
//     }

//     //Getter(name)
//     getName(){
//         return this.name
//     }

//     //Getter (address)
//     getAddress(){
//         return this.address
//     }
// }


// let School1 = new School("DPS", "Delhi")

// console.log(School1.getAddress())
// console.log(School1.setAddress("NOIDa"))


class School{
    constructor(){
        this.students = []
    }
    add(student){
        this.students.push(student)
    }
    latest(){
        if(this.students.length == 0){
            return null
        }
        else{
            return this.students[this.students.length -1]
        }
    }
}

let school = new School()
school.add("DEEPAK")
school.add("PUSHKAR")

console.log(school.latest())