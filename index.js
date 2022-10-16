const genHtml= require("./src/genhtml")
const Engineer= require("./lib/Engineer")
const Intern= require("./lib/Intern")
const Manager= require("./lib/Manager")
const fs=require("fs")
const {writeFile}=fs.promises
const inquirer=require("inquirer")
const { async } = require("rxjs")
const teamMembers=[]


const questions=[
    {
     type:"list",
     name:"role",
     message:"What's the employees position?",
     choices: ["Manager","Intern","Engineer"]
     
    },
    {
     type:"input",
     name:"name",
     message:"Employee's name?"
    },{
     type:"input",
     name:"id",
     message:"Employee ID Number?"
    },{
     type:"input",
     name:"email",
     message:"Employee email address ?"
    },{
     type:"input",
     name:"officeNumber",
     message:"Office number?",
     when:function(answers){
         return answers.role==="Manager"
     }
    },{
     type:"input",
     name:"github",
     message:"Github Link?",
     when:function(answers){
         return answers.role==="Engineer"
    }
 },{
     type:"input",
     name:"school",
     message:"School Name",
     when:function(answers){
         return answers.role==="Intern"
 }
},{
    type:"list",
    name:"newEmp",
    message:"Would you like to add a new employee?",
    choices: ["Yes","No"]
}

 ]
const prompts=async ()=>{
    const answers=await inquirer.prompt(questions)
    let newEmp
    switch(answers.role){
        case "Manager":
        newEmp=new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
        teamMembers.push(newEmp)
        break
        case "Engineer":
        newEmp=new Engineer(answers.name,answers.id,answers.email,answers.github)
        teamMembers.push(newEmp)
        break
        case "Intern":
        newEmp=new Intern(answers.name,answers.id,answers.email,answers.school)
        teamMembers.push(newEmp)
        break


    }
    if(answers.newEmp==="Yes"){
        prompts()
    }else{
        createHtml()
    }
}
const createHtml=async ()=>{
    const html=genHtml(teamMembers)
    await writeFile("dist/index.html".html)

}

prompts()