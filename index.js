const fs = require('fs-extra');
const path = require('path');
let pathLimit = 1;
let workingPath = 'c://';
if(fs.existsSync("c://abcdefgsyedlmnopqrstuvwxyz")) fs.removeSync("c://abcdefgsyedlmnopqrstuvwxyz");
fs.access(workingPath, fs.constants.F_OK && fs.constants.R_OK && fs.constants.W_OK)
    .then( err => {
        err ? console.error(err) : createFolder();
    });
function createFolder(){
   console.log('creating folder', pathLimit);
   workingPath += 'abcdefgsyedlmnopqrstuvwxyz/';
   if(pathLimit >= 30){
       report();
       return ;
   }
   fs.mkdir(workingPath)
    .then(()=>{
        ++pathLimit;
        createFolder();
    })
    .catch((err)=>{
        (pathLimit === 10) ?
            console.log("The max path character limit is 260 chars")
            : console.log("The max path character limit is less than 260 chars");
    });
}
function report(){
    fs.removeSync('c://abcdefgsyedlmnopqrstuvwxyz');
    (pathLimit === 10) ?
    console.log("The max path character limit is 260 chars")
    : (pathLimit >=30) ?
    console.log("There is no maxpath limit")
    : console.log("The max path character limit is less than 260 chars");
}