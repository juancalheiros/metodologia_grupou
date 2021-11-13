const createGroup = require("./createGroup").main
const createClassRoom = require("./createClassRoom").main

const { debounce } = require("lodash")

const main = (
    classNumber, 
    qntdStudents,
    hardskill, 
    hardSkillWeight,
    numberMembersInGroup
    ) => {
        
        createClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight)       
        
        const createGroupDebounce = debounce(() => createGroup(classNumber, numberMembersInGroup), 1000)
        createGroupDebounce()
    }


module.exports = {
    main,
}

//Valores de exemplo para teste 
// const classNumber = 156
// const qntdStudents = 9
// const numberMembersInGroup = 3
// const hardskill = ["node", "golang", "ruby"] 
// const hardSkillWeight = [20,40,40]


// console.log("====>>> pmain", main(classNumber, qntdStudents, hardskill, hardSkillWeight, numberMembersInGroup))