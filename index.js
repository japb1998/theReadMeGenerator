//node modules to use
const inquirer = require('inquirer');
const fs = require('fs');
// const {
//     title
// } = require('process');


//inquirer to generate the questions
inquirer.prompt(
    [{
            type: 'input',
            message: `What's the desire title`,
            name: 'title',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'how do you install your app?',
            name: 'installation',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'instructions to be followed?',
            name: 'instructions',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'any credits?',
            name: 'credit',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'how to use it?',
            name: 'usage',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        }
        ,
        {
            type: "list",
            message: 'what kind?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License','Apache license','GNU license','N/A'],
            
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'git',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'any contributor?',
            name: 'constribution',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Linkedin username',
            name: 'linkedin',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: "input",
            message: 'E-mail',
            name: 'email',
            validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution,
}) => {
    if(!license){
        license = 'Not license used for this project'
    }
  
    //template to be used 
    let template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instructions 
${instructions}
## Credits
${credit}
## License 
${license}

# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;
  //pick badges
  if(license.includes('The MIT License')){
      template = `![NPM](https://img.shields.io/badge/license-MIT-blue)
 ${template}`
}
if(license.includes('The GPL License')){
    template = `![NPM](https://img.shields.io/badge/license-GPL-green)
${template}`
}
if(license.includes('Apache license')){
    template = `![NPM](https://img.shields.io/badge/license-apache-green)
${template}`
}
if(license.includes('GNU license')){
    template = `![NPM](https://img.shields.io/badge/license-GNU-green)
${template}`
}


    // console.log(title, installation, instructions, credit, license, git, linkedin, email, usage);

    writeFileAs(title,template);
});


//generate file
function writeFileAs(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been succesfully generated');
    })
}