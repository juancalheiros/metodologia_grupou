const fs = require("fs");
const _ = require("lodash")
const formGroups = require("./formGroups").main
const listGroups = require("./listGroups").main
const { createGroupsDestinationFiles } = require("./util")

const GROUPS_DESTINATION_PATH = "groupResponses"

const getClassRoom = classRoomFile => {
  const rawdata = fs.readFileSync(classRoomFile);
  return JSON.parse(rawdata);
}

const getNumberClassRoom = classroomFile => {
  const regexp = /[0-9]\d+/g
  return `${regexp.exec(classroomFile)[0]}`
}


const main = (classNumber, numberMembersInGroup) => {
  const classroomFile = `turmas/${classNumber}.json`
  const classroom = getClassRoom(classroomFile);
  const groups = formGroups(classroom, numberMembersInGroup)

  const { hardskills_atividade } = classroom
  const stringJSON = JSON.stringify({ ...groups, hardskills_atividade }, null, 2)
  //const classNumber = getNumberClassRoom(classroomFile)
  //const aux = _.debounce(()=> listGroups(classNumber), 5000)
  
  createGroupsDestinationFiles(classNumber, stringJSON, GROUPS_DESTINATION_PATH)
  //return aux()
}


module.exports = {
  main
}

// Exemplo de uso
main('150', 3)
