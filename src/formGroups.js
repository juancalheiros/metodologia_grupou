const calcularGrauHardSkill = ({ alunos, hardskills_atividade }) => {
    const resp = []
    const HardSkillWeight_1 = Object.values(hardskills_atividade)[0]
    const HardSkillWeight_2 = Object.values(hardskills_atividade)[1]
    const HardSkillWeight_3 = Object.values(hardskills_atividade)[2]

    alunos.forEach((aluno, index, alunos) => {
        
        const hardskill_1 = Object.values(aluno.hardskills)[0]
        const hardskill_2 = Object.values(aluno.hardskills)[1]
        const hardskill_3 = Object.values(aluno.hardskills)[2]
        

        const somaPonderadaHardSkill = ((hardskill_1.nota * HardSkillWeight_1.peso) + (hardskill_2.nota * HardSkillWeight_2.peso) + (hardskill_3.nota * HardSkillWeight_3.peso))
        const grauHardSkill = somaPonderadaHardSkill/(HardSkillWeight_1.peso + HardSkillWeight_2.peso + HardSkillWeight_3.peso)
        
        alunos[index].grauHardSkill = { "nota": parseFloat(grauHardSkill.toFixed(2)) }
        
        resp.push(alunos[index])
    })

    return resp
}

const ordenarMedias = (alunos) => {
    return alunos.sort((a, b) => { return a.grauHardSkill.nota - b.grauHardSkill.nota })
}

const removerIntegrantesDaTurma = (novaLista, qntdIntegrantesGrupo) => {
    grupo = []
    let i = 0

    while (i < qntdIntegrantesGrupo) {
        grupo.push(novaLista.pop())
        grupo.push(novaLista.shift())

        i+=2

        if (grupo.length == qntdIntegrantesGrupo - 1) {
            grupo.push(novaLista.pop())
            break
        }
    }

    return { grupo, novaLista }
}


const rebalanceamentoGrupos = (lista, grupos) => {
    let index = 0

    while(lista.length > 0){
                    
        if (index > grupos.length - 1 ) index = 0              
        else {
            grupos[index].push(lista.pop())      
            index++  
        }      
    }

    return grupos
}

const formarGrupo = (lista, qntdIntegrantesGrupo) => {
    const grupos = []
    let precisaRebalancear = false

    while (lista.length > 0) {
        
        const { grupo, novaLista } = removerIntegrantesDaTurma(lista, qntdIntegrantesGrupo)
          
        lista = novaLista

        const tamLista = lista.length
        
        if (tamLista < qntdIntegrantesGrupo) {

            const qntdMinimaIntegrantesGrupo = Math.ceil((tamLista/qntdIntegrantesGrupo)*100)
            
            if (qntdMinimaIntegrantesGrupo >= 65) {
                grupos.push(lista)
                lista = []
            }

            precisaRebalancear = true
            grupos.push(grupo) 
            break
        }

        grupos.push(grupo)       
    }

    if (precisaRebalancear) return rebalanceamentoGrupos(lista, grupos)

    return grupos
}


const main = (lista, maxTamGrupo) => {
    const listaInicial = calcularGrauHardSkill(lista)
    const listaOrdenada = ordenarMedias(listaInicial)
    const grupos = formarGrupo(listaOrdenada, maxTamGrupo)

    return grupos.reduce((acumulate, grupo, index) => {
        acumulate.grupos[`grupo_${index + 1}`] = grupo
        return acumulate
    }, { grupos:{} } )    
}


module.exports = {
    calcularGrauHardSkill,
    ordenarMedias,
    formarGrupo,
    main,
}
