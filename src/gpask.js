const createGroup = require("./createGroup").main
const createClassRoom = require("./createClassRoom").main
const _ = require("lodash")

const main = (
    classNumber, 
    qntdStudents,
    hardskill, 
    hardSkillWeight, 
    softskills,
    numberMembersInGroup
    ) => {
    
        createClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight, softskills)
        
        const debounce_function = _.debounce(() => createGroup(`turmas/${classNumber}.json`, numberMembersInGroup), 2000)
        debounce_function()
    }


module.exports = {
    main,
}

//Valores de exemplo para teste 
// const classNumber = 150
// const qntdStudents = 9
// const numberMembersInGroup = 3
// const hardskill = ["API", "REST", "FIREBASE"] 
// const hardSkillWeight = [20,40,40]
// const softskills = [ 
//   "Calmo", 
//   "Paciência", 
//   "Colaboração",
//   "Conversação", 
//   "Questionador",
//   "Auto-Controle",
//   "Produtividade",
//   "Gestão de Tempo",
//   "Comunicação Eficaz",
//   "Resolução de Problemas",
// ]

// main(classNumber, qntdStudents, hardskill, hardSkillWeight, softskills, numberMembersInGroup)