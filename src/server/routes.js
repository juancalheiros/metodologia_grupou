const express = require("express")
const gpask = require("../gpask").main
const router = express.Router()
const path = "localhost:5000"


router.get("/", (req,res) => {
    return res.json({menssage :"hello, application is running!!!"})
})

router.get("/createclassroom", async (req, res) => {
    const url =  new URL(path + req.url)
    classNumber = url.searchParams.get("classNumber")
    // qntdStudents = url.searchParams.get("qntdStudents")
    // numberMembersInGroup = url.searchParams.get("numberMembersInGroup")

    return res.json(await gpask(classNumber, 9, ["API", "REST", "FIREBASE"], [20,40,40],3))
})

module.exports = router