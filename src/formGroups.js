const calcularGrauHardSkill = ({ alunos, hardskills_atividade }) => {
    const resp = []
    alunos.forEach((aluno, index, alunos) => {
        
        const { API, REST, Firebase } = aluno.hardskills
        const somaPonderadaHardSkill = ((API.nota * hardskills_atividade.API.peso) + (REST.nota * hardskills_atividade.REST.peso) + (Firebase.nota * hardskills_atividade.Firebase.peso))
        const grauHardSkill = somaPonderadaHardSkill/(hardskills_atividade.API.peso + hardskills_atividade.REST.peso + hardskills_atividade.Firebase.peso)
        
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
