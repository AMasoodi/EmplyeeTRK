const Employee = require("../lib/Employee")

describe("test employee constructor", ()=>{
    test("Object created", ()=>{
        const e=new Employee()
        expect(typeof e).toBe("object")
    })
    test("output name", ()=>{
        const name= "Kevin"
        const e= new Employee(name)
        expect(e.name).toBe(name)
    })
    test("output id", ()=>{
        const id= "1234"
        const e= new Employee("kevin", id)
        expect(e.id).toBe(id)
    })
    test("output email", ()=>{
        const email= "1234"
        const e= new Employee("kevin", "1234", email)
        expect(e.email).toBe(email)
    })
    test("output getName", ()=>{
        const name= "Kevin"
        const e= new Employee(name)
        expect(e.getName()).toBe(name)
    })
    test("output getId", ()=>{
        const id= "1234"
        const e= new Employee("kevin", id)
        expect(e.getId()).toBe(id)
    })
    test("output GetEmail", ()=>{
        const email= "1234"
        const e= new Employee("kevin", "1234", email)
        expect(e.getEmail()).toBe(email)
    })
})