//node modules to use
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
//vars


inquirer.prompt(
     [
         {
             type:'input',
             message:`What's the desire title`,
             name:'title',
         },
         {
             type:'input',
             message:'how do you install your app?',
             name:'installation',
         },
         {
             type:'input',
             message:'instructions to be followed?',
             name:'instructions',
         },
         {
             type:'input',
             message:'any credits?',
             name:'credit',
         },
         {
            type:'input',
            message:'how to use it?',
            name:'usage',
        },
         {
             type:"checkbox",
             message:'any license?',
             name:'license',
             choices:['The MIT License','The MIT License','The GPL License']
         },
         {
             type:'input',
             message:'GitHub username',
             name:'git',
         },
         {
             type:'input',
             message:'Linkedin username',
             name:'linkedin'
         },
         {
             type:"input",
             message:'E-mail',
             name:'email'
        }
     ]
).then(({title,installation,instructions,credit,license,git,linkedin,email,usage})=>
{
    let template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
# Usage
${usage}
### instructions 
${instructions}
# Credits
${credit}
# License 
${license}

# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;

    console.log(title,installation,instructions,credit,license,git,linkedin,email,usage);

    fs.writeFile(`./${title.toLowerCase().split(' ').join('')}.md`,template,(err)=>{
        if(err){console.log(err)}
        console.log('Your README has been succesfully generated');
    })
})