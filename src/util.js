const fs = require('fs');


const messageError = err => {
    if (err) throw err;
    console.log('complete');
}

const createGroupsDestinationFiles = (classNumber, stringJSON, groupsDestinationPath='turmas') => {
    const filePathDestiny = `${groupsDestinationPath}/${classNumber}.json`
    fs.writeFile(filePathDestiny, stringJSON, messageError );
}


module.exports = {
    createGroupsDestinationFiles
}