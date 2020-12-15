const fs = require('fs')

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

//Notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
//     //this
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);        
//     }

//     console.log('=============');

//     //Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if(err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});
