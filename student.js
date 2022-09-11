var students = []
var student= {
    name:'Vibhor Mendhe',
    birthYear:1993,
    course: 'IFT 458',
    grade:90,
    active:true,
    age : function calculate(){
        if(this.active){
            return 2022 - this.birthYear
        }
    }

}

var student2 = {
    name:'Prajyot Dhotre',
    birthYear:1996,
    course: 'IFT 458',
    grade:80,
    active: false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear
        }
        else{
            return 0
        }
    }
}

students.push(student)
students.push(student2)

students.forEach((item)=> console.log(item.age()))

console.log(students)

// console.log(student['name'])
// console.log(student.name)
// console.log(student2.age())
// console.log(student.age())