const Manager = require("../lib/Manager")
describe("test Manager constructor", ()=>{
    test("officeNumber", ()=>{
        const officeNumber= "123-456-7890"
        const e=new Manager("kevin", "1234", "email", officeNumber)
        expect(e.officeNumber).toBe(officeNumber)
    })
    test("getrole", ()=>{
        const officeNumber= "123-456-7890"
        const e=new Manager("kevin", "1234", "email", officeNumber)
        expect(e.getRole()).toBe("Manager")
    })
})