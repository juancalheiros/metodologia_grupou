const fs = require("fs");
const _ = require("lodash")
const formGroups = require("./formGroups").main
const { createGroupsDestinationFiles } = require("./util")

const GROUPS_DESTINATION_PATH = "groupResponses"

const getClassRoom = classRoomFile => {
  const rawdata = fs.readFileSync(classRoomFile);
  return JSON.parse(rawdata);
}

const main = (classNumber, numberMembersInGroup) => {
  const classroomFile = `turmas/${classNumber}.json`
  const classroom = getClassRoom(classroomFile);
  const groups = formGroups(classroom, numberMembersInGroup)

  const { hardskills_atividade } = classroom
  const stringJSON = JSON.stringify({ ...groups, hardskills_atividade }, null, 2)

  createGroupsDestinationFiles(classNumber, stringJSON, GROUPS_DESTINATION_PATH)
}


module.exports = {
  main
}

// Exemplo de uso
//main('150', 3)
