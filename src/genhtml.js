const genHtml= (teamMembers)=>{
    const genManager= (members)=>{
       const html= []
       members.forEach(member => {
        html.push(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${member.getRole()}</h5>
          <p class="card-text">Name: ${member.name} </p>
          <p class="card-text">ID: ${member.id} </p>
          <p class="card-text">Email: ${member.email} </p>
          <p class="card-text">Office Number: ${member.officeNumber} </p>
        </div>
      </div>`)
      return html.join("")
       });
    }
    const genEngineer= (members)=>{
        const html= []
        members.forEach(member => {
         html.push(`<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${member.getRole()}</h5>
           <p class="card-text">Name: ${member.name} </p>
           <p class="card-text">ID: ${member.id} </p>
           <p class="card-text">Email: ${member.email} </p>
           <p class="card-text">Github: ${member.github} </p>
         </div>
       </div>`)
       return html.join("")
        });
     }
     const genIntern= (members)=>{
        const html= []
        members.forEach(member => {
         html.push(`<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${member.getRole()}</h5>
           <p class="card-text">Name: ${member.name} </p>
           <p class="card-text">ID: ${member.id} </p>
           <p class="card-text">Email: ${member.email} </p>
           <p class="card-text">School: ${member.school} </p>
         </div>
       </div>`)
       return html.join("")
        });
     }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="row"> 
    ${genManager(teamMembers.filter(member =>member.getRole()==="Manager"))}
    ${genEngineer(teamMembers.filter(member =>member.getRole()==="Engineer"))}
    ${genIntern(teamMembers.filter(member =>member.getRole()==="Intern"))}
    </div>
</body>
</html>
    `
}
module.exports=genHtml