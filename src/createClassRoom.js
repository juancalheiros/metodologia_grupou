const Chance = require('chance');
const { configClassRoom } = require('./configClass.js');
const { createGroupsDestinationFiles } = require("./util");


const main = (classNumber, qntdStudents, hardskill, hardSkillWeight, softskills) => {
  const buildedClassRoom = configClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight, softskills)
  const { turma, hardskills_atividade } = buildedClassRoom;

  const chance = new Chance(turma);
  require('./addAnalyzerInClassroom.js')(chance)

  const { alunos, analise_hardskills_turma } = chance.classroom(buildedClassRoom);
  const stringJSON = JSON.stringify({ alunos, analise: analise_hardskills_turma, hardskills_atividade }, null, 2)
  
  createGroupsDestinationFiles(turma, stringJSON)
}

module.exports = {
  main,
}


// Valores de exemplo para teste 
// const classNumber = 151
// const qntdStudents = 5
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

// main(classNumber, qntdStudents, hardskill, hardSkillWeight, softskills)

