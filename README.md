  etapa 01 : "configurar o arquivo de parametrização config/parametros.js"
  
  etapa 02: "gerar o mock da turma"

    ```node mock.js```
  
  etapa 03: "executar pior caso, instanciar pelo menos 10x",
    comando: "node random_pior_caso.js -i turmas/152.json -o grupos -q 6 -s 1",
    arquivo_gerado: "verificar arquivo gerado no diretorio informado, no caso grupos"
  
  etapa 04: "Definir e validar metodologia",
    comando: "",
    arquivo_gerado: "deve ser no mesmo local do arquivo da etapa 03"
  
  etapa 05: "Executar a performance, e acurácia dos grupos criados nas etapas 03 e 04",
    comando: "node analyzer.js -i grupos/111_1.json -o analises",
    arquivo_gerado: "será criada uma análise no diretório de output informado no comando acima"
  
  etapa 06: "Executar teste da metodologia proposta".
  
    ``` npm test ```




const GAP = (maior_valor - valor_analise) / (maior_valor - menor_valor)
// 0 - Melhor Performance
// 1 - Pior Performance
// Mais próximo da extremidade zero tende ao melhor, do contrário próximo a um tende ao pior

