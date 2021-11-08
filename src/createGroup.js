const fs = require("fs");
const formGroups = require("./formGroups").main
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


const main = (classroomFile, numberMembersInGroup) => {
  const classroom = getClassRoom(classroomFile);
  const groups = formGroups(classroom, numberMembersInGroup)

  const { hardskills_atividade } = classroom
  const stringJSON = JSON.stringify({ ...groups, hardskills_atividade }, null, 2)
  const classNumber = getNumberClassRoom(classroomFile)
  
  createGroupsDestinationFiles(classNumber, stringJSON, GROUPS_DESTINATION_PATH)
}

main('turmas/152.json', 6)

module.exports = {
  main
}
