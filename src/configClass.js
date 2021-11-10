const SOFTSKILLS = [ 
  "Calmo", 
  "Paciência", 
  "Colaboração",
  "Conversação", 
  "Questionador",
  "Auto-Controle",
  "Produtividade",
  "Gestão de Tempo",
  "Comunicação Eficaz",
  "Resolução de Problemas",
]

const calcula_outliers = (percentual, qntdStudents) => {
  return Math.round((qntdStudents * percentual) / 100);
}

const buildUnitHardSkill = (hardskill,qntdStudents, grauMinHardSkill, grauMaxHardSkill) => {
  const propsHardSkill = `{
    "${hardskill}": {
      "capacidade": {
        "de":${grauMinHardSkill},
        "ate":${grauMaxHardSkill},
        "outliers_perc_maiores_ate":"${calcula_outliers(0, qntdStudents)}",
        "outliers_perc_menores_de":"${calcula_outliers(0, qntdStudents)}"
      }
    }
  }`

  return JSON.parse(propsHardSkill)
}

const buildHardSkillWeight = (hardskill, weight) => {
  const propsHardSkillWeight = `{
    "${hardskill}": {
      "peso": ${weight}
    }
  }`
  return JSON.parse(propsHardSkillWeight)
}

const configClassRoom = (classNumber, qntdStudents, hardskill, hardSkillWeight) => {
  const grauMinHardSkill = 20
  const grauMaxHardSkill = 60
  const hardskill_1 = buildUnitHardSkill(hardskill[0], qntdStudents, grauMinHardSkill, grauMaxHardSkill)
  const hardskill_2 = buildUnitHardSkill(hardskill[1], qntdStudents, grauMinHardSkill, grauMaxHardSkill)
  const hardskill_3 = buildUnitHardSkill(hardskill[2], qntdStudents, grauMinHardSkill, grauMaxHardSkill)
  const HardSkillWeight_1 = buildHardSkillWeight(hardskill[0], hardSkillWeight[0])
  const HardSkillWeight_2 = buildHardSkillWeight(hardskill[1], hardSkillWeight[1])
  const HardSkillWeight_3 = buildHardSkillWeight(hardskill[2], hardSkillWeight[2])

  const classBuild = {
    turma: classNumber,
    quantidade_alunos: qntdStudents,
    softskills: SOFTSKILLS,
    hardskills_turma: { ...hardskill_1, ...hardskill_2, ...hardskill_3},
    hardskills_atividade: { ...HardSkillWeight_1, ...HardSkillWeight_2, ...HardSkillWeight_3}
  }

  return classBuild
}



module.exports = {
  configClassRoom,
}