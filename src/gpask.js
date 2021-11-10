const createGroup = require("./createGroup").main
const createClassRoom = require("./createClassRoom").main

const _ = require("lodash")

const main = (
    classNumber, 
    qntdStudents,
    hardskill, 
    hardSkillWeight,
    numberMembersInGroup
    ) => {
        
        createClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight)       
        const createGroupDebounce= _.debounce(() => createGroup(classNumber, numberMembersInGroup), 2000)
        createGroupDebounce()
    }


module.exports = {
    main,
}

//Valores de exemplo para teste 
const classNumber = 155
const qntdStudents = 9
const numberMembersInGroup = 3
const hardskill = ["node", "golang", "ruby"] 
const hardSkillWeight = [20,40,40]


console.log("====>>>",main(classNumber, qntdStudents, hardskill, hardSkillWeight, numberMembersInGroup))