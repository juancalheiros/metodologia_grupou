//node random_pior_caso.js -i turmas/123.json -o grupos -q 6 -s 1

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const formarGrupos = require("./script").main
const fs = require('fs');

const rawdata = fs.readFileSync(argv.i);
const turma = JSON.parse(rawdata);
const groups = formarGrupos(turma, argv.q)
const { hardskills_atividade } = turma
const regexp = /[0-9]\d+/g
const classNumber = `${regexp.exec(argv.i)[0]}_${argv.s}`
const filePath = `${argv.o}/${classNumber}.json`
const convertJSON = JSON.stringify({ ...groups, hardskills_atividade }, null, 2)

const message = err => {
  if (err) throw err;
  console.log('complete');
}

fs.writeFile(filePath, convertJSON, message );


