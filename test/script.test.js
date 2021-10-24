const assert = require('assert').strict;
const { main, ordenarMedias, formarGrupo, calcularGrauHardSkill } = require("../script")
const turma = require('./turma.json')
const util = require('./util.json')

test("calcularGrauHardSkill, espera-se que calcule o grau de hardskill de cada aluno", () => {
    const expectativa = util.calcularGrauHardSkill

    const resp = calcularGrauHardSkill(turma)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("ordenarMedias, espera que retorne a lista ordenada quando uma lista embaralhada for passada", () => {
    const lista = util.ordenarMedias.lista
    const expectativa = util.ordenarMedias.resp

    const resp = ordenarMedias(lista)
    assert.deepStrictEqual(resp, expectativa)   
})

test("ordenarMedias, espera que retorne a lista ordenada quando uma lista ordenada for passada", () => {
    const lista = util.ordenarMedias.resp
    const expectativa = lista

    const resp = ordenarMedias(lista)
    
    assert.equal(expectativa, resp)  
})


test("formarGrupo, espera que se forme grupos 4 a 4, com lista de tamanho par", () => {
    const lista = util.formarGrupo.tuma1
    const maxTamGrupo = 4
    const expectativa = util.formarGrupo.respTurma1

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("formarGrupo, espera que se forme grupos 5 a 5, com lista de tamanho par", () => {
    const lista = [0,  0,  2,   2,  3,  3, 4,  6,  7,  10, 25, 30, 40, 54, 65, 564]
    const maxTamGrupo = 5
    const expectativa = [ 
        [ 564, 0, 65, 0, 54, 4 ], 
        [ 40, 2, 30, 2, 25 ], 
        [ 10, 3, 7, 3, 6 ] 
    ]

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("formarGrupo, espera que se forme grupos 4 a 4, com listade tamanho impar e resto 1", () => {
    const lista = [0,  0,  2,   2,  3,  3, 4,  6,  7,  10, 25, 30, 40, 54, 65, 100, 564]
    const maxTamGrupo = 4
    const expectativa = [ 
        [ 564, 0, 100, 0, 7 ],
        [ 65, 2, 54, 2 ],
        [ 40, 3, 30, 3 ],
        [ 25, 4, 10, 6 ] 
    ]

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("formarGrupo, espera que se forme grupos 5 a 5, com listade tamanho impar e resto 2", () => {
    const lista = [0,  0,  2,   2,  3,  3,  4,  6,  7,  10, 25, 30, 40, 54, 65, 100, 564]
    const maxTamGrupo = 5
    const expectativa = [ 
        [ 564, 0, 100, 0, 65, 6 ],
        [ 54, 2, 40, 2, 30, 4 ],
        [ 25, 3, 10, 3, 7 ]
    ]

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("formarGrupo, espera que se forme grupos 6 a 6, com listade tamanho impar e resto 2", () => {
    const lista = [0,  0,  2,   2,  3,  3, 4,  6,  7,  10, 25, 30, 40, 54, 65, 100, 564]
    const maxTamGrupo = 6
    const expectativa = [
        [564, 0, 100, 0, 65, 2], 
        [4, 6, 7, 10, 25], 
        [54, 2, 40, 3, 30, 3]
    ]

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})

test("formarGrupo, espera que se forme grupos 7 a 7, com listade tamanho impar e resto 3", () => {
    const lista = [0,  0,  2,   2,  3,  3, 4,  6,  7,  10, 25, 30, 40, 54, 65, 100, 564]
    const maxTamGrupo = 7
    const expectativa = [
        [564, 0, 100, 0, 65, 2, 54, 7, 4], 
        [40, 2, 30, 3, 25, 3, 10, 6]
    ]

    const resp = formarGrupo(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})


test("main, espera que se forme grupos 3 a 3, com lista de tamanho par resto 0", () => {
    const lista = util.main.turma1
    const maxTamGrupo = 3
    const expectativa = util.main.respTurma1

    const resp = main(lista, maxTamGrupo)
    
    assert.deepStrictEqual(resp, expectativa) 
})
