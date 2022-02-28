class person{
    constructor(name,age,id,qualification,address,phone,email){
        this.name = name
        this.age = age
        this.id = id
        this.qualification = qualification
        this.address = address
        this.phone = phone
        this.email = email
    }
}
var p1 = new person('test1',22, 1027,'B.E','cbe',9876,'test@gmail.com')
console.log(p1)