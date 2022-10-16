const Intern = require("../lib/Intern")
describe("test Intern constructor", ()=>{
    test("school", ()=>{
        const school= "UofU"
        const e=new Intern("kevin", "1234", "email", school)
        expect(e.school).toBe(school)
    })
    test("getschool", ()=>{
        const school= "UofU"
        const e=new Intern("kevin", "1234", "email", school)
        expect(e.getSchool()).toBe(school)
    })
    test("getrole", ()=>{
        const school= "UofU"
        const e=new Intern("kevin", "1234", "email", school)
        expect(e.getRole()).toBe("Intern")
    })
})