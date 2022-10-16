const Engineer = require("../lib/Engineer")
describe("test engineer constructor", ()=>{
    test("github", ()=>{
        const github= "@ali"
        const e=new Engineer("kevin", "1234", "email", github)
        expect(e.github).toBe(github)
    })
    test("get github", ()=>{
        const github= "@ali"
        const e=new Engineer("kevin", "1234", "email", github)
        expect(e.getGithub()).toBe(github)
    })
    test("get role", ()=>{
        const github= "@ali"
        const e=new Engineer("kevin", "1234", "email", github)
        expect(e.getRole()).toBe("Engineer")
    })
})