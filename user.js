const user  = {
    name:"dalia",
    age:23,
    salary:2000,
    printUserDetails:function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp  = {
    name:"sojood",
    age:23,
    salary:2000,
    printUserDetails:function(){
        console.log(this.name,this.age,this.salary);
    }
}

export {user,emp}
