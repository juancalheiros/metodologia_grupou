const fs = require("fs");

const main = (classNumber) => {
    const rawdata = fs.readFileSync(`groupResponses/${classNumber}.json`);
    const { grupos } = JSON.parse(rawdata) 
    
    let auxGroups = []
    
    for (let index in grupos){
        const group = grupos[index]
        let auxGroup = [] 
        
        group.map( student => {
            let auxStudent = {"name": `${student.nome_completo}`, "grauHardSkill": `${student.grauHardSkill.nota}`}
            auxGroup.push(auxStudent)
        })

        auxGroups.push(auxGroup)
    }

    return auxGroups
}

module.exports = {
    main
}


console.log("main ", main(155))